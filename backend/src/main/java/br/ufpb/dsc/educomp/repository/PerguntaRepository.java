package br.ufpb.dsc.educomp.repository;

import br.ufpb.dsc.educomp.domain.Pergunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerguntaRepository extends JpaRepository<Pergunta, Long> {
    List<Pergunta> findByQuizIdOrderByOrdemAsc(Long quizId);
}
