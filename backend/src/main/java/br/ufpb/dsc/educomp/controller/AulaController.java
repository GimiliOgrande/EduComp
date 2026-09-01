package br.ufpb.dsc.educomp.controller;

import br.ufpb.dsc.educomp.dto.AulaCriacaoRequest;
import br.ufpb.dsc.educomp.dto.AulaDetalhadaResponse;
import br.ufpb.dsc.educomp.service.AulaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AulaController {

    private final AulaService aulaService;

    public AulaController(AulaService aulaService) {
        this.aulaService = aulaService;
    }

    @GetMapping("/aulas/{id}")
    public ResponseEntity<AulaDetalhadaResponse> buscarPorId(@PathVariable Long id) {
        AulaDetalhadaResponse aula = aulaService.buscarPorId(id);
        return ResponseEntity.ok(aula);
    }

    @PostMapping("/modulos/{moduloId}/aulas")
    public ResponseEntity<AulaDetalhadaResponse> criarAula(
            @PathVariable Long moduloId,
            @Valid @RequestBody AulaCriacaoRequest request
    ) {
        AulaDetalhadaResponse aula = aulaService.criarAula(moduloId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(aula);
    }

    @PutMapping("/aulas/{id}")
    public ResponseEntity<AulaDetalhadaResponse> atualizarAula(
            @PathVariable Long id,
            @Valid @RequestBody AulaCriacaoRequest request
    ) {
        return ResponseEntity.ok(aulaService.atualizarAula(id, request));
    }

    @DeleteMapping("/aulas/{id}")
    public ResponseEntity<Void> excluirAula(@PathVariable Long id) {
        aulaService.excluirAula(id);
        return ResponseEntity.noContent().build();
    }
}
