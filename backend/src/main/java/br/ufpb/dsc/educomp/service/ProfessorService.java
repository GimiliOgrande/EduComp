package br.ufpb.dsc.educomp.service;

import br.ufpb.dsc.educomp.config.JwtTokenProvider;
import br.ufpb.dsc.educomp.domain.Professor;
import br.ufpb.dsc.educomp.dto.LoginRequest;
import br.ufpb.dsc.educomp.dto.LoginResponse;
import br.ufpb.dsc.educomp.dto.ProfessorResponse;
import br.ufpb.dsc.educomp.dto.RegisterRequest;
import br.ufpb.dsc.educomp.exception.NegocioException;
import br.ufpb.dsc.educomp.exception.RecursoNaoEncontradoException;
import br.ufpb.dsc.educomp.repository.ProfessorRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProfessorService {

    private final ProfessorRepository professorRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    public ProfessorService(
            ProfessorRepository professorRepository,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtTokenProvider jwtTokenProvider) {
        this.professorRepository = professorRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    public ProfessorResponse registrar(RegisterRequest request) {
        if (professorRepository.existsByEmail(request.email())) {
            throw new NegocioException("O e-mail informado já está cadastrado.");
        }

        Professor professor = Professor.builder()
            .nome(request.nome())
            .email(request.email())
            .senha(passwordEncoder.encode(request.senha()))
            .build();

        Professor salvo = professorRepository.save(professor);
        return new ProfessorResponse(salvo.getId(), salvo.getNome(), salvo.getEmail());
    }

    @Transactional(readOnly = true)
    public LoginResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.email(), request.senha())
        );

        String token = jwtTokenProvider.gerarToken(authentication);

        Professor professor = professorRepository.findByEmail(request.email())
            .orElseThrow(() -> new RecursoNaoEncontradoException("Professor não encontrado."));

        ProfessorResponse response = new ProfessorResponse(professor.getId(), professor.getNome(), professor.getEmail());
        return new LoginResponse(token, response);
    }
}
