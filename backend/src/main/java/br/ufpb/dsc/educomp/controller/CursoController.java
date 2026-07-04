package br.ufpb.dsc.educomp.controller;

import br.ufpb.dsc.educomp.dto.CursoResponse;
import br.ufpb.dsc.educomp.service.CursoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    private final CursoService cursoService;

    public CursoController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    @GetMapping
    public ResponseEntity<List<CursoResponse>> listarTodos() {
        List<CursoResponse> cursos = cursoService.listarTodos();
        return ResponseEntity.ok(cursos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CursoResponse> buscarPorId(@PathVariable Long id) {
        CursoResponse curso = cursoService.buscarPorId(id);
        return ResponseEntity.ok(curso);
    }
}
