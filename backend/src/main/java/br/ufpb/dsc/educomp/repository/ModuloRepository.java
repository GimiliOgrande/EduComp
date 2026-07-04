package br.ufpb.dsc.educomp.repository;

import br.ufpb.dsc.educomp.domain.Modulo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ModuloRepository extends JpaRepository<Modulo, Long> {
    Optional<Modulo> findByNome(String nome);
    boolean existsByNome(String nome);
}
