package br.ufpb.dsc.educomp.repository;

import br.ufpb.dsc.educomp.domain.Alternativa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlternativaRepository extends JpaRepository<Alternativa, Long> {
    List<Alternativa> findByPerguntaIdOrderByOrdemAsc(Long perguntaId);
}
