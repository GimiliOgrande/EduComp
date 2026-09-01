package br.ufpb.dsc.educomp.controller;

import br.ufpb.dsc.educomp.dto.QuizRequest;
import br.ufpb.dsc.educomp.dto.QuizResponse;
import br.ufpb.dsc.educomp.service.QuizService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("/aulas/{aulaId}/quiz")
    public ResponseEntity<QuizResponse> buscarPorAulaId(@PathVariable Long aulaId) {
        return ResponseEntity.ok(quizService.buscarPorAulaId(aulaId));
    }

    @GetMapping("/quizzes/{id}")
    public ResponseEntity<QuizResponse> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(quizService.buscarPorId(id));
    }

    @PostMapping("/aulas/{aulaId}/quiz")
    public ResponseEntity<QuizResponse> salvarQuiz(@PathVariable Long aulaId, @Valid @RequestBody QuizRequest request) {
        QuizResponse response = quizService.salvarOuAtualizarQuiz(aulaId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PutMapping("/aulas/{aulaId}/quiz")
    public ResponseEntity<QuizResponse> atualizarQuiz(@PathVariable Long aulaId, @Valid @RequestBody QuizRequest request) {
        return ResponseEntity.ok(quizService.salvarOuAtualizarQuiz(aulaId, request));
    }

    @DeleteMapping("/quizzes/{id}")
    public ResponseEntity<Void> excluirQuiz(@PathVariable Long id) {
        quizService.excluirQuiz(id);
        return ResponseEntity.noContent().build();
    }
}
