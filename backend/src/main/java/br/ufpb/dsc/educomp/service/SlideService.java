package br.ufpb.dsc.educomp.service;

import br.ufpb.dsc.educomp.domain.Aula;
import br.ufpb.dsc.educomp.domain.Slide;
import br.ufpb.dsc.educomp.dto.SlideRequest;
import br.ufpb.dsc.educomp.dto.SlideResponse;
import br.ufpb.dsc.educomp.exception.RecursoNaoEncontradoException;
import br.ufpb.dsc.educomp.repository.AulaRepository;
import br.ufpb.dsc.educomp.repository.SlideRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class SlideService {

    private final SlideRepository slideRepository;
    private final AulaRepository aulaRepository;

    public SlideService(SlideRepository slideRepository, AulaRepository aulaRepository) {
        this.slideRepository = slideRepository;
        this.aulaRepository = aulaRepository;
    }

    @Transactional(readOnly = true)
    public SlideResponse buscarPorId(Long id) {
        Slide slide = slideRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Slide não encontrado com id: " + id));
        return converterParaSlideResponse(slide);
    }

    @Transactional(readOnly = true)
    public List<SlideResponse> listarPorAula(Long aulaId) {
        return slideRepository.findByAulaIdOrderByOrdemAsc(aulaId).stream()
                .map(this::converterParaSlideResponse)
                .collect(Collectors.toList());
    }

    public SlideResponse criarSlide(Long aulaId, SlideRequest request) {
        Aula aula = aulaRepository.findById(aulaId)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Aula não encontrada com id: " + aulaId));

        Integer ordem = request.ordem();
        if (ordem == null) {
            List<Slide> slidesExistentes = slideRepository.findByAulaIdOrderByOrdemAsc(aulaId);
            ordem = slidesExistentes.size() + 1;
        }

        Slide slide = Slide.builder()
                .aula(aula)
                .titulo(request.titulo())
                .conteudo(request.conteudo())
                .imagemUrl(request.imagemUrl())
                .balaoTexto(request.balaoTexto())
                .ordem(ordem)
                .objetivo(request.objetivo())
                .tempoEstimado(request.tempoEstimado() != null ? request.tempoEstimado() : 5)
                .sugestaoExplicacao(request.sugestaoExplicacao())
                .perguntasSugeridas(request.perguntasSugeridas())
                .curiosidades(request.curiosidades())
                .errosComuns(request.errosComuns())
                .materiaisComplementares(request.materiaisComplementares())
                .build();

        Slide salvo = slideRepository.save(slide);
        return converterParaSlideResponse(salvo);
    }

    public SlideResponse atualizarSlide(Long id, SlideRequest request) {
        Slide slide = slideRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Slide não encontrado com id: " + id));

        slide.setTitulo(request.titulo());
        slide.setConteudo(request.conteudo());
        slide.setImagemUrl(request.imagemUrl());
        slide.setBalaoTexto(request.balaoTexto());
        if (request.ordem() != null) {
            slide.setOrdem(request.ordem());
        }
        slide.setObjetivo(request.objetivo());
        slide.setTempoEstimado(request.tempoEstimado());
        slide.setSugestaoExplicacao(request.sugestaoExplicacao());
        slide.setPerguntasSugeridas(request.perguntasSugeridas());
        slide.setCuriosidades(request.curiosidades());
        slide.setErrosComuns(request.errosComuns());
        slide.setMateriaisComplementares(request.materiaisComplementares());

        Slide atualizado = slideRepository.save(slide);
        return converterParaSlideResponse(atualizado);
    }

    public void excluirSlide(Long id) {
        if (!slideRepository.existsById(id)) {
            throw new RecursoNaoEncontradoException("Slide não encontrado com id: " + id);
        }
        slideRepository.deleteById(id);
    }

    public SlideResponse converterParaSlideResponse(Slide slide) {
        return new SlideResponse(
                slide.getId(),
                slide.getTitulo(),
                slide.getConteudo(),
                slide.getImagemUrl(),
                slide.getBalaoTexto(),
                slide.getOrdem(),
                slide.getObjetivo(),
                slide.getTempoEstimado(),
                slide.getSugestaoExplicacao(),
                slide.getPerguntasSugeridas(),
                slide.getCuriosidades(),
                slide.getErrosComuns(),
                slide.getMateriaisComplementares()
        );
    }
}
