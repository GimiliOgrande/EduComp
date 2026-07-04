package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "serie")
public class Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "curso_id", nullable = false)
    private Curso curso;

    @OneToMany(mappedBy = "serie", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Modulo> modulos;

    public Serie() {}

    public Serie(Long id, String nome, Curso curso, List<Modulo> modulos) {
        this.id = id;
        this.nome = nome;
        this.curso = curso;
        this.modulos = modulos;
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

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public List<Modulo> getModulos() {
        return modulos;
    }

    public void setModulos(List<Modulo> modulos) {
        this.modulos = modulos;
    }

    // Builder
    public static SerieBuilder builder() {
        return new SerieBuilder();
    }

    public static class SerieBuilder {
        private Long id;
        private String nome;
        private Curso curso;
        private List<Modulo> modulos;

        public SerieBuilder id(Long id) { this.id = id; return this; }
        public SerieBuilder nome(String nome) { this.nome = nome; return this; }
        public SerieBuilder curso(Curso curso) { this.curso = curso; return this; }
        public SerieBuilder modulos(List<Modulo> modulos) { this.modulos = modulos; return this; }

        public Serie build() {
            return new Serie(id, nome, curso, modulos);
        }
    }
}
