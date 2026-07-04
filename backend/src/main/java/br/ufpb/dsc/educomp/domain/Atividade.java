package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "atividade")
public class Atividade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aula_id", nullable = false)
    private Aula aula;

    @Column(nullable = false)
    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(name = "arquivo_url", nullable = false, length = 512)
    private String arquivoUrl;

    public Atividade() {}

    public Atividade(Long id, Aula aula, String titulo, String descricao, String arquivoUrl) {
        this.id = id;
        this.aula = aula;
        this.titulo = titulo;
        this.descricao = descricao;
        this.arquivoUrl = arquivoUrl;
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getArquivoUrl() {
        return arquivoUrl;
    }

    public void setArquivoUrl(String arquivoUrl) {
        this.arquivoUrl = arquivoUrl;
    }

    // Builder Pattern
    public static AtividadeBuilder builder() {
        return new AtividadeBuilder();
    }

    public static class AtividadeBuilder {
        private Long id;
        private Aula aula;
        private String titulo;
        private String descricao;
        private String arquivoUrl;

        public AtividadeBuilder id(Long id) { this.id = id; return this; }
        public AtividadeBuilder aula(Aula aula) { this.aula = aula; return this; }
        public AtividadeBuilder titulo(String titulo) { this.titulo = titulo; return this; }
        public AtividadeBuilder descricao(String descricao) { this.descricao = descricao; return this; }
        public AtividadeBuilder arquivoUrl(String arquivoUrl) { this.arquivoUrl = arquivoUrl; return this; }

        public Atividade build() {
            return new Atividade(id, aula, titulo, descricao, arquivoUrl);
        }
    }
}
