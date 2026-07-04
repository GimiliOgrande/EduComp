package br.ufpb.dsc.educomp.service;

import br.ufpb.dsc.educomp.domain.Curso;
import br.ufpb.dsc.educomp.domain.Serie;
import br.ufpb.dsc.educomp.domain.Modulo;
import br.ufpb.dsc.educomp.dto.*;
import br.ufpb.dsc.educomp.exception.RecursoNaoEncontradoException;
import br.ufpb.dsc.educomp.repository.CursoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class CursoService {

    private final CursoRepository cursoRepository;

    public CursoService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    public List<CursoResponse> listarTodos() {
        return cursoRepository.findAll().stream()
                .map(this::converterParaCursoResponse)
                .collect(Collectors.toList());
    }

    public CursoResponse buscarPorId(Long id) {
        Curso curso = cursoRepository.findById(id)
                .orElseThrow(() -> new RecursoNaoEncontradoException("Curso não encontrado com id: " + id));
        return converterParaCursoResponse(curso);
    }

    private CursoResponse converterParaCursoResponse(Curso curso) {
        List<SerieResponse> series = curso.getSeries() != null ? curso.getSeries().stream()
                .map(this::converterParaSerieResponse)
                .collect(Collectors.toList()) : List.of();

        return new CursoResponse(
                curso.getId(),
                curso.getNome(),
                curso.getDescricao(),
                series
        );
    }

    private SerieResponse converterParaSerieResponse(Serie serie) {
        List<ModuloResponse> modulos = serie.getModulos() != null ? serie.getModulos().stream()
                .map(this::converterParaModuloResponse)
                .collect(Collectors.toList()) : List.of();

        return new SerieResponse(
                serie.getId(),
                serie.getNome(),
                modulos
        );
    }

    private ModuloResponse converterParaModuloResponse(Modulo modulo) {
        List<AulaResumidaResponse> aulas = modulo.getAulas() != null ? modulo.getAulas().stream()
                .map(aula -> new AulaResumidaResponse(
                        aula.getId(),
                        aula.getTitulo(),
                        aula.getDescricao(),
                        aula.getOrdem(),
                        aula.getObjetivo(),
                        aula.getRecursosNecessarios(),
                        aula.getDuracaoSugerida()
                ))
                .collect(Collectors.toList()) : List.of();

        return new ModuloResponse(
                modulo.getId(),
                modulo.getNome(),
                modulo.getDescricao(),
                aulas
        );
    }
}
