package br.ufpb.dsc.educomp.repository;

import br.ufpb.dsc.educomp.domain.Aula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AulaRepository extends JpaRepository<Aula, Long> {
    List<Aula> findByModuloIdOrderByOrdemAsc(Long moduloId);
}
