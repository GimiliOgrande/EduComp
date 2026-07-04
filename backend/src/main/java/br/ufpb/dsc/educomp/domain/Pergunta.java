package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "pergunta")
public class Pergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "quiz_id", nullable = false)
    @JsonIgnore
    private Quiz quiz;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String enunciado;

    @Column(nullable = false)
    private Integer ordem;

    @OneToMany(mappedBy = "pergunta", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("ordem ASC")
    private List<Alternativa> alternativas;

    public Pergunta() {}

    public Pergunta(Long id, Quiz quiz, String enunciado, Integer ordem, List<Alternativa> alternativas) {
        this.id = id;
        this.quiz = quiz;
        this.enunciado = enunciado;
        this.ordem = ordem;
        this.alternativas = alternativas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public Integer getOrdem() {
        return ordem;
    }

    public void setOrdem(Integer ordem) {
        this.ordem = ordem;
    }

    public List<Alternativa> getAlternativas() {
        return alternativas;
    }

    public void setAlternativas(List<Alternativa> alternativas) {
        this.alternativas = alternativas;
    }

    // Builder Pattern
    public static PerguntaBuilder builder() {
        return new PerguntaBuilder();
    }

    public static class PerguntaBuilder {
        private Long id;
        private Quiz quiz;
        private String enunciado;
        private Integer ordem;
        private List<Alternativa> alternativas;

        public PerguntaBuilder id(Long id) { this.id = id; return this; }
        public PerguntaBuilder quiz(Quiz quiz) { this.quiz = quiz; return this; }
        public PerguntaBuilder enunciado(String enunciado) { this.enunciado = enunciado; return this; }
        public PerguntaBuilder ordem(Integer ordem) { this.ordem = ordem; return this; }
        public PerguntaBuilder alternativas(List<Alternativa> alternativas) { this.alternativas = alternativas; return this; }

        public Pergunta build() {
            return new Pergunta(id, quiz, enunciado, ordem, alternativas);
        }
    }
}
