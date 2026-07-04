package br.ufpb.dsc.educomp.controller;

import br.ufpb.dsc.educomp.dto.ModuloResponse;
import br.ufpb.dsc.educomp.service.ModuloService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/modulos")
public class ModuloController {

    private final ModuloService moduloService;

    public ModuloController(ModuloService moduloService) {
        this.moduloService = moduloService;
    }

    @GetMapping
    public ResponseEntity<List<ModuloResponse>> listarTodos() {
        List<ModuloResponse> modulos = moduloService.listarTodos();
        return ResponseEntity.ok(modulos);
    }
}
