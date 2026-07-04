package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "alternativa")
public class Alternativa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pergunta_id", nullable = false)
    @JsonIgnore
    private Pergunta pergunta;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String texto;

    @Column(nullable = false)
    private Boolean correta;

    @Column(nullable = false)
    private Integer ordem;

    public Alternativa() {}

    public Alternativa(Long id, Pergunta pergunta, String texto, Boolean correta, Integer ordem) {
        this.id = id;
        this.pergunta = pergunta;
        this.texto = texto;
        this.correta = correta;
        this.ordem = ordem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pergunta getPergunta() {
        return pergunta;
    }

    public void setPergunta(Pergunta pergunta) {
        this.pergunta = pergunta;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Boolean getCorreta() {
        return correta;
    }

    public void setCorreta(Boolean correta) {
        this.correta = correta;
    }

    public Integer getOrdem() {
        return ordem;
    }

    public void setOrdem(Integer ordem) {
        this.ordem = ordem;
    }

    // Builder Pattern
    public static AlternativaBuilder builder() {
        return new AlternativaBuilder();
    }

    public static class AlternativaBuilder {
        private Long id;
        private Pergunta pergunta;
        private String texto;
        private Boolean correta;
        private Integer ordem;

        public AlternativaBuilder id(Long id) { this.id = id; return this; }
        public AlternativaBuilder pergunta(Pergunta pergunta) { this.pergunta = pergunta; return this; }
        public AlternativaBuilder texto(String texto) { this.texto = texto; return this; }
        public AlternativaBuilder correta(Boolean correta) { this.correta = correta; return this; }
        public AlternativaBuilder ordem(Integer ordem) { this.ordem = ordem; return this; }

        public Alternativa build() {
            return new Alternativa(id, pergunta, texto, correta, ordem);
        }
    }
}
