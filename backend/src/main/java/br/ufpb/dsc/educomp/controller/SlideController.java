package br.ufpb.dsc.educomp.controller;

import br.ufpb.dsc.educomp.dto.SlideRequest;
import br.ufpb.dsc.educomp.dto.SlideResponse;
import br.ufpb.dsc.educomp.service.SlideService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SlideController {

    private final SlideService slideService;

    public SlideController(SlideService slideService) {
        this.slideService = slideService;
    }

    @GetMapping("/slides/{id}")
    public ResponseEntity<SlideResponse> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(slideService.buscarPorId(id));
    }

    @GetMapping("/aulas/{aulaId}/slides")
    public ResponseEntity<List<SlideResponse>> listarPorAula(@PathVariable Long aulaId) {
        return ResponseEntity.ok(slideService.listarPorAula(aulaId));
    }

    @PostMapping("/aulas/{aulaId}/slides")
    public ResponseEntity<SlideResponse> criarSlide(@PathVariable Long aulaId, @Valid @RequestBody SlideRequest request) {
        SlideResponse response = slideService.criarSlide(aulaId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PutMapping("/slides/{id}")
    public ResponseEntity<SlideResponse> atualizarSlide(@PathVariable Long id, @Valid @RequestBody SlideRequest request) {
        return ResponseEntity.ok(slideService.atualizarSlide(id, request));
    }

    @DeleteMapping("/slides/{id}")
    public ResponseEntity<Void> excluirSlide(@PathVariable Long id) {
        slideService.excluirSlide(id);
        return ResponseEntity.noContent().build();
    }
}
