package br.ufpb.dsc.educomp.service;

import br.ufpb.dsc.educomp.domain.Professor;
import br.ufpb.dsc.educomp.repository.ProfessorRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final ProfessorRepository professorRepository;

    public CustomUserDetailsService(ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Professor professor = professorRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("Professor não encontrado com o e-mail: " + email));

        return User.builder()
            .username(professor.getEmail())
            .password(professor.getSenha())
            .roles("PROFESSOR")
            .build();
    }
}
