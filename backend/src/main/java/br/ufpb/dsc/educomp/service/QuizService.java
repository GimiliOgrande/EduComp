package br.ufpb.dsc.educomp.service;

import br.ufpb.dsc.educomp.domain.Alternativa;
import br.ufpb.dsc.educomp.domain.Aula;
import br.ufpb.dsc.educomp.domain.Pergunta;
import br.ufpb.dsc.educomp.domain.Quiz;
import br.ufpb.dsc.educomp.dto.*;
import br.ufpb.dsc.educomp.exception.RecursoNaoEncontradoException;
import br.ufpb.dsc.educomp.repository.AulaRepository;
import br.ufpb.dsc.educomp.repository.QuizRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class QuizService {

    private final QuizRepository quizRepository;
    private final AulaRepository aulaRepository;

    public QuizService(QuizRepository quizRepository, AulaRepository aulaRepository) {
        this.quizRepository = quizRepository;
        this.aulaRepository = aulaRepository;
    }

    @Transactional(readOnly = true)
    public QuizResponse buscarPorAulaId(Long aulaId) {
        Quiz quiz = quizRepository.findByAulaId(aulaId)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Quiz não encontrado para a aula com id: " + aulaId));
        return converterParaQuizResponse(quiz);
    }

    @Transactional(readOnly = true)
    public QuizResponse buscarPorId(Long id) {
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Quiz não encontrado com id: " + id));
        return converterParaQuizResponse(quiz);
    }

    public QuizResponse salvarOuAtualizarQuiz(Long aulaId, QuizRequest request) {
        Aula aula = aulaRepository.findById(aulaId)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Aula não encontrada com id: " + aulaId));

        Quiz quiz = quizRepository.findByAulaId(aulaId)
                .orElseGet(() -> {
                    Quiz novo = new Quiz();
                    novo.setAula(aula);
                    novo.setPerguntas(new ArrayList<>());
                    return novo;
                });

        quiz.setTitulo(request.titulo());

        // Atualizar / recriar perguntas e alternativas
        if (quiz.getPerguntas() == null) {
            quiz.setPerguntas(new ArrayList<>());
        } else {
            quiz.getPerguntas().clear();
        }

        if (request.perguntas() != null) {
            int pIndex = 1;
            for (PerguntaRequest pr : request.perguntas()) {
                Pergunta pergunta = new Pergunta();
                pergunta.setQuiz(quiz);
                pergunta.setEnunciado(pr.enunciado());
                pergunta.setOrdem(pr.ordem() != null ? pr.ordem() : pIndex++);
                pergunta.setAlternativas(new ArrayList<>());

                if (pr.alternativas() != null) {
                    int aIndex = 1;
                    for (AlternativaRequest ar : pr.alternativas()) {
                        Alternativa alt = new Alternativa();
                        alt.setPergunta(pergunta);
                        alt.setTexto(ar.texto());
                        alt.setCorreta(ar.correta() != null && ar.correta());
                        alt.setOrdem(ar.ordem() != null ? ar.ordem() : aIndex++);
                        pergunta.getAlternativas().add(alt);
                    }
                }
                quiz.getPerguntas().add(pergunta);
            }
        }

        Quiz salvo = quizRepository.save(quiz);
        return converterParaQuizResponse(salvo);
    }

    public void excluirQuiz(Long id) {
        if (!quizRepository.existsById(id)) {
            throw new RecursoNaoEncontradoException("Quiz não encontrado com id: " + id);
        }
        quizRepository.deleteById(id);
    }

    public QuizResponse converterParaQuizResponse(Quiz quiz) {
        List<PerguntaResponse> perguntas = quiz.getPerguntas() != null ? quiz.getPerguntas().stream()
                .map(p -> {
                    List<AlternativaResponse> alternativas = p.getAlternativas() != null ? p.getAlternativas().stream()
                            .map(a -> new AlternativaResponse(a.getId(), a.getTexto(), a.getCorreta(), a.getOrdem()))
                            .collect(Collectors.toList()) : Collections.emptyList();
                    return new PerguntaResponse(p.getId(), p.getEnunciado(), p.getOrdem(), alternativas);
                })
                .collect(Collectors.toList()) : Collections.emptyList();

        return new QuizResponse(quiz.getId(), quiz.getTitulo(), perguntas);
    }
}
