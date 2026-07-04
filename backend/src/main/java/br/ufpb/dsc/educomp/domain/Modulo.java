package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "modulo")
public class Modulo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "serie_id")
    private Serie serie;

    @OneToMany(mappedBy = "modulo", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Aula> aulas;

    public Modulo() {}

    public Modulo(Long id, String nome, String descricao, Serie serie, List<Aula> aulas) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.serie = serie;
        this.aulas = aulas;
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

    public Serie getSerie() {
        return serie;
    }

    public void setSerie(Serie serie) {
        this.serie = serie;
    }

    public List<Aula> getAulas() {
        return aulas;
    }

    public void setAulas(List<Aula> aulas) {
        this.aulas = aulas;
    }

    // Builder Pattern
    public static ModuloBuilder builder() {
        return new ModuloBuilder();
    }

    public static class ModuloBuilder {
        private Long id;
        private String nome;
        private String descricao;
        private Serie serie;
        private List<Aula> aulas;

        public ModuloBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public ModuloBuilder nome(String nome) {
            this.nome = nome;
            return this;
        }

        public ModuloBuilder descricao(String descricao) {
            this.descricao = descricao;
            return this;
        }

        public ModuloBuilder serie(Serie serie) {
            this.serie = serie;
            return this;
        }

        public ModuloBuilder aulas(List<Aula> aulas) {
            this.aulas = aulas;
            return this;
        }

        public Modulo build() {
            return new Modulo(id, nome, descricao, serie, aulas);
        }
    }
}
