package br.ufpb.dsc.educomp.repository;

import br.ufpb.dsc.educomp.domain.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    Optional<Quiz> findByAulaId(Long aulaId);
}
