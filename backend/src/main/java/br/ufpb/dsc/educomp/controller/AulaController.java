package br.ufpb.dsc.educomp.controller;

import br.ufpb.dsc.educomp.dto.AulaDetalhadaResponse;
import br.ufpb.dsc.educomp.service.AulaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/aulas")
public class AulaController {

    private final AulaService aulaService;

    public AulaController(AulaService aulaService) {
        this.aulaService = aulaService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AulaDetalhadaResponse> buscarPorId(@PathVariable Long id) {
        AulaDetalhadaResponse aula = aulaService.buscarPorId(id);
        return ResponseEntity.ok(aula);
    }
}
