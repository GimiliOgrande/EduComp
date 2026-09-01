package br.ufpb.dsc.educomp.repository;

import br.ufpb.dsc.educomp.domain.Slide;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SlideRepository extends JpaRepository<Slide, Long> {
    List<Slide> findByAulaIdOrderByOrdemAsc(Long aulaId);
}
