package br.ufpb.dsc.educomp.repository;

import br.ufpb.dsc.educomp.domain.Curso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
}
