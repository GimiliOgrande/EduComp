package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "aula")
public class Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "modulo_id", nullable = false)
    private Modulo modulo;

    @Column(nullable = false)
    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(nullable = false)
    private Integer ordem;

    @Column(length = 512)
    private String objetivo;

    @Column(name = "recursos_necessarios", length = 512)
    private String recursosNecessarios;

    @Column(name = "duracao_sugerida", length = 100)
    private String duracaoSugerida;

    @OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("ordem ASC")
    @JsonIgnore
    private List<Slide> slides;

    @OneToOne(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
    private Quiz quiz;

    @OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Atividade> atividades;

    @OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("ordem ASC")
    @JsonIgnore
    private List<Video> videos;

    @ManyToMany
    @JoinTable(
        name = "aula_competencia",
        joinColumns = @JoinColumn(name = "aula_id"),
        inverseJoinColumns = @JoinColumn(name = "competencia_id")
    )
    private List<CompetenciaBNCC> competencias;

    @ManyToMany
    @JoinTable(
        name = "aula_habilidade",
        joinColumns = @JoinColumn(name = "aula_id"),
        inverseJoinColumns = @JoinColumn(name = "habilidade_id")
    )
    private List<HabilidadeBNCC> habilidades;

    public Aula() {}

    public Aula(Long id, Modulo modulo, String titulo, String descricao, Integer ordem, String objetivo, String recursosNecessarios, String duracaoSugerida, List<Slide> slides, Quiz quiz, List<Atividade> atividades, List<Video> videos, List<CompetenciaBNCC> competencias, List<HabilidadeBNCC> habilidades) {
        this.id = id;
        this.modulo = modulo;
        this.titulo = titulo;
        this.descricao = descricao;
        this.ordem = ordem;
        this.objetivo = objetivo;
        this.recursosNecessarios = recursosNecessarios;
        this.duracaoSugerida = duracaoSugerida;
        this.slides = slides;
        this.quiz = quiz;
        this.atividades = atividades;
        this.videos = videos;
        this.competencias = competencias;
        this.habilidades = habilidades;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Modulo getModulo() {
        return modulo;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
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

    public Integer getOrdem() {
        return ordem;
    }

    public void setOrdem(Integer ordem) {
        this.ordem = ordem;
    }

    public String getObjetivo() {
        return objetivo;
    }

    public void setObjetivo(String objetivo) {
        this.objetivo = objetivo;
    }

    public String getRecursosNecessarios() {
        return recursosNecessarios;
    }

    public void setRecursosNecessarios(String recursosNecessarios) {
        this.recursosNecessarios = recursosNecessarios;
    }

    public String getDuracaoSugerida() {
        return duracaoSugerida;
    }

    public void setDuracaoSugerida(String duracaoSugerida) {
        this.duracaoSugerida = duracaoSugerida;
    }

    public List<Slide> getSlides() {
        return slides;
    }

    public void setSlides(List<Slide> slides) {
        this.slides = slides;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public List<Atividade> getAtividades() {
        return atividades;
    }

    public void setAtividades(List<Atividade> atividades) {
        this.atividades = atividades;
    }

    public List<Video> getVideos() {
        return videos;
    }

    public void setVideos(List<Video> videos) {
        this.videos = videos;
    }

    public List<CompetenciaBNCC> getCompetencias() {
        return competencias;
    }

    public void setCompetencias(List<CompetenciaBNCC> competencias) {
        this.competencias = competencias;
    }

    public List<HabilidadeBNCC> getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(List<HabilidadeBNCC> habilidades) {
        this.habilidades = habilidades;
    }

    // Builder Pattern
    public static AulaBuilder builder() {
        return new AulaBuilder();
    }

    public static class AulaBuilder {
        private Long id;
        private Modulo modulo;
        private String titulo;
        private String descricao;
        private Integer ordem;
        private String objetivo;
        private String recursosNecessarios;
        private String duracaoSugerida;
        private List<Slide> slides;
        private Quiz quiz;
        private List<Atividade> atividades;
        private List<Video> videos;
        private List<CompetenciaBNCC> competencias;
        private List<HabilidadeBNCC> habilidades;

        public AulaBuilder id(Long id) { this.id = id; return this; }
        public AulaBuilder modulo(Modulo modulo) { this.modulo = modulo; return this; }
        public AulaBuilder titulo(String titulo) { this.titulo = titulo; return this; }
        public AulaBuilder descricao(String descricao) { this.descricao = descricao; return this; }
        public AulaBuilder ordem(Integer ordem) { this.ordem = ordem; return this; }
        public AulaBuilder objetivo(String objetivo) { this.objetivo = objetivo; return this; }
        public AulaBuilder recursosNecessarios(String recursosNecessarios) { this.recursosNecessarios = recursosNecessarios; return this; }
        public AulaBuilder duracaoSugerida(String duracaoSugerida) { this.duracaoSugerida = duracaoSugerida; return this; }
        public AulaBuilder slides(List<Slide> slides) { this.slides = slides; return this; }
        public AulaBuilder quiz(Quiz quiz) { this.quiz = quiz; return this; }
        public AulaBuilder atividades(List<Atividade> atividades) { this.atividades = atividades; return this; }
        public AulaBuilder videos(List<Video> videos) { this.videos = videos; return this; }
        public AulaBuilder competencias(List<CompetenciaBNCC> competencias) { this.competencias = competencias; return this; }
        public AulaBuilder habilidades(List<HabilidadeBNCC> habilidades) { this.habilidades = habilidades; return this; }

        public Aula build() {
            return new Aula(id, modulo, titulo, descricao, ordem, objetivo, recursosNecessarios, duracaoSugerida, slides, quiz, atividades, videos, competencias, habilidades);
        }
    }
}
