package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "curso")
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @OneToMany(mappedBy = "curso", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Serie> series;

    public Curso() {}

    public Curso(Long id, String nome, String descricao, List<Serie> series) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.series = series;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Serie> getSeries() {
        return series;
    }

    public void setSeries(List<Serie> series) {
        this.series = series;
    }

    // Builder
    public static CursoBuilder builder() {
        return new CursoBuilder();
    }

    public static class CursoBuilder {
        private Long id;
        private String nome;
        private String descricao;
        private List<Serie> series;

        public CursoBuilder id(Long id) { this.id = id; return this; }
        public CursoBuilder nome(String nome) { this.nome = nome; return this; }
        public CursoBuilder descricao(String descricao) { this.descricao = descricao; return this; }
        public CursoBuilder series(List<Serie> series) { this.series = series; return this; }

        public Curso build() {
            return new Curso(id, nome, descricao, series);
        }
    }
}
