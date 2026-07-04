package br.ufpb.dsc.educomp.service;

import br.ufpb.dsc.educomp.domain.Modulo;
import br.ufpb.dsc.educomp.dto.AulaResumidaResponse;
import br.ufpb.dsc.educomp.dto.ModuloResponse;
import br.ufpb.dsc.educomp.repository.ModuloRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class ModuloService {

    private final ModuloRepository moduloRepository;

    public ModuloService(ModuloRepository moduloRepository) {
        this.moduloRepository = moduloRepository;
    }

    public List<ModuloResponse> listarTodos() {
        List<Modulo> modulos = moduloRepository.findAll();
        return modulos.stream()
                .map(this::converterParaModuloResponse)
                .collect(Collectors.toList());
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
