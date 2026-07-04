package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "quiz")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aula_id", nullable = false)
    @JsonIgnore
    private Aula aula;

    @Column(nullable = false)
    private String titulo;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("ordem ASC")
    private List<Pergunta> perguntas;

    public Quiz() {}

    public Quiz(Long id, Aula aula, String titulo, List<Pergunta> perguntas) {
        this.id = id;
        this.aula = aula;
        this.titulo = titulo;
        this.perguntas = perguntas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Aula getAula() {
        return aula;
    }

    public void setAula(Aula aula) {
        this.aula = aula;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public List<Pergunta> getPerguntas() {
        return perguntas;
    }

    public void setPerguntas(List<Pergunta> perguntas) {
        this.perguntas = perguntas;
    }

    // Builder Pattern
    public static QuizBuilder builder() {
        return new QuizBuilder();
    }

    public static class QuizBuilder {
        private Long id;
        private Aula aula;
        private String titulo;
        private List<Pergunta> perguntas;

        public QuizBuilder id(Long id) { this.id = id; return this; }
        public QuizBuilder aula(Aula aula) { this.aula = aula; return this; }
        public QuizBuilder titulo(String titulo) { this.titulo = titulo; return this; }
        public QuizBuilder perguntas(List<Pergunta> perguntas) { this.perguntas = perguntas; return this; }

        public Quiz build() {
            return new Quiz(id, aula, titulo, perguntas);
        }
    }
}
