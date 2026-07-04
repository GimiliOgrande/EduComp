package br.ufpb.dsc.educomp.service;

import br.ufpb.dsc.educomp.domain.*;
import br.ufpb.dsc.educomp.dto.*;
import br.ufpb.dsc.educomp.exception.RecursoNaoEncontradoException;
import br.ufpb.dsc.educomp.repository.AulaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class AulaService {

    private final AulaRepository aulaRepository;

    public AulaService(AulaRepository aulaRepository) {
        this.aulaRepository = aulaRepository;
    }

    public AulaDetalhadaResponse buscarPorId(Long id) {
        Aula aula = aulaRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Aula não encontrada com id: " + id));

        return converterParaAulaDetalhadaResponse(aula);
    }

    private AulaDetalhadaResponse converterParaAulaDetalhadaResponse(Aula aula) {
        List<SlideResponse> slides = aula.getSlides() != null ? aula.getSlides().stream()
                .map(slide -> new SlideResponse(
                        slide.getId(),
                        slide.getTitulo(),
                        slide.getConteudo(),
                        slide.getImagemUrl(),
                        slide.getOrdem(),
                        slide.getObjetivo(),
                        slide.getTempoEstimado(),
                        slide.getSugestaoExplicacao(),
                        slide.getPerguntasSugeridas(),
                        slide.getCuriosidades(),
                        slide.getErrosComuns(),
                        slide.getMateriaisComplementares()
                ))
                .collect(Collectors.toList()) : Collections.emptyList();

        QuizResponse quizResponse = null;
        if (aula.getQuiz() != null) {
            Quiz quiz = aula.getQuiz();
            List<PerguntaResponse> perguntas = quiz.getPerguntas() != null ? quiz.getPerguntas().stream()
                    .map(pergunta -> {
                        List<AlternativaResponse> alternativas = pergunta.getAlternativas() != null ? pergunta.getAlternativas().stream()
                                .map(alt -> new AlternativaResponse(
                                        alt.getId(),
                                        alt.getTexto(),
                                        alt.getCorreta(),
                                        alt.getOrdem()
                                ))
                                .collect(Collectors.toList()) : Collections.emptyList();

                        return new PerguntaResponse(
                                pergunta.getId(),
                                pergunta.getEnunciado(),
                                pergunta.getOrdem(),
                                alternativas
                        );
                    })
                    .collect(Collectors.toList()) : Collections.emptyList();

            quizResponse = new QuizResponse(quiz.getId(), quiz.getTitulo(), perguntas);
        }

        List<AtividadeResponse> atividades = aula.getAtividades() != null ? aula.getAtividades().stream()
                .map(atv -> new AtividadeResponse(
                        atv.getId(),
                        atv.getTitulo(),
                        atv.getDescricao(),
                        atv.getArquivoUrl()
                ))
                .collect(Collectors.toList()) : Collections.emptyList();

        List<VideoResponse> videos = aula.getVideos() != null ? aula.getVideos().stream()
                .map(vid -> new VideoResponse(
                        vid.getId(),
                        vid.getTitulo(),
                        vid.getUrl()
                ))
                .collect(Collectors.toList()) : Collections.emptyList();

        List<String> competencias = aula.getCompetencias() != null ? aula.getCompetencias().stream()
                .map(CompetenciaBNCC::getDescricao)
                .collect(Collectors.toList()) : Collections.emptyList();

        List<String> habilidades = aula.getHabilidades() != null ? aula.getHabilidades().stream()
                .map(HabilidadeBNCC::getCodigo)
                .collect(Collectors.toList()) : Collections.emptyList();

        return new AulaDetalhadaResponse(
                aula.getId(),
                aula.getTitulo(),
                aula.getDescricao(),
                aula.getOrdem(),
                aula.getObjetivo(),
                aula.getRecursosNecessarios(),
                aula.getDuracaoSugerida(),
                slides,
                quizResponse,
                atividades,
                videos,
                competencias,
                habilidades
        );
    }
}
