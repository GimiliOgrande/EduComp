package br.ufpb.dsc.educomp.repository;

import br.ufpb.dsc.educomp.domain.Serie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SerieRepository extends JpaRepository<Serie, Long> {
    List<Serie> findByCursoId(Long cursoId);
}
