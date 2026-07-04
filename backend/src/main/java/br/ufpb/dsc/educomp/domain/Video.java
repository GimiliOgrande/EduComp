package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "video")
public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aula_id", nullable = false)
    private Aula aula;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false, length = 512)
    private String url;

    @Column(nullable = false)
    private Integer ordem;

    public Video() {}

    public Video(Long id, Aula aula, String titulo, String url, Integer ordem) {
        this.id = id;
        this.aula = aula;
        this.titulo = titulo;
        this.url = url;
        this.ordem = ordem;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getOrdem() {
        return ordem;
    }

    public void setOrdem(Integer ordem) {
        this.ordem = ordem;
    }

    // Builder Pattern
    public static VideoBuilder builder() {
        return new VideoBuilder();
    }

    public static class VideoBuilder {
        private Long id;
        private Aula aula;
        private String titulo;
        private String url;
        private Integer ordem;

        public VideoBuilder id(Long id) { this.id = id; return this; }
        public VideoBuilder aula(Aula aula) { this.aula = aula; return this; }
        public VideoBuilder titulo(String titulo) { this.titulo = titulo; return this; }
        public VideoBuilder url(String url) { this.url = url; return this; }
        public VideoBuilder ordem(Integer ordem) { this.ordem = ordem; return this; }

        public Video build() {
            return new Video(id, aula, titulo, url, ordem);
        }
    }
}
