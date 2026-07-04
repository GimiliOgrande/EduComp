package br.ufpb.dsc.educomp.controller;

import br.ufpb.dsc.educomp.dto.LoginRequest;
import br.ufpb.dsc.educomp.dto.LoginResponse;
import br.ufpb.dsc.educomp.dto.ProfessorResponse;
import br.ufpb.dsc.educomp.dto.RegisterRequest;
import br.ufpb.dsc.educomp.service.ProfessorService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final ProfessorService professorService;

    public AuthController(ProfessorService professorService) {
        this.professorService = professorService;
    }

    @PostMapping("/registrar")
    public ResponseEntity<ProfessorResponse> registrar(@Valid @RequestBody RegisterRequest request) {
        ProfessorResponse response = professorService.registrar(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        LoginResponse response = professorService.login(request);
        return ResponseEntity.ok(response);
    }
}
