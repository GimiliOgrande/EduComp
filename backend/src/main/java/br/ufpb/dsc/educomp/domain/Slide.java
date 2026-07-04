package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "slide")
public class Slide {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aula_id", nullable = false)
    private Aula aula;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String conteudo;

    @Column(name = "imagem_url", length = 512)
    private String imagemUrl;

    @Column(nullable = false)
    private Integer ordem;

    // Campos do Assistente Pedagógico
    @Column(length = 512)
    private String objetivo;

    @Column(name = "tempo_estimado")
    private Integer tempoEstimado;

    @Column(name = "sugestao_explicacao", columnDefinition = "TEXT")
    private String sugestaoExplicacao;

    @Column(name = "perguntas_sugeridas", columnDefinition = "TEXT")
    private String perguntasSugeridas;

    @Column(columnDefinition = "TEXT")
    private String curiosidades;

    @Column(name = "erros_comuns", columnDefinition = "TEXT")
    private String errosComuns;

    @Column(name = "materiais_complementares", columnDefinition = "TEXT")
    private String materiaisComplementares;

    public Slide() {}

    public Slide(Long id, Aula aula, String titulo, String conteudo, String imagemUrl, Integer ordem, String objetivo, Integer tempoEstimado, String sugestaoExplicacao, String perguntasSugeridas, String curiosidades, String errosComuns, String materiaisComplementares) {
        this.id = id;
        this.aula = aula;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.imagemUrl = imagemUrl;
        this.ordem = ordem;
        this.objetivo = objetivo;
        this.tempoEstimado = tempoEstimado;
        this.sugestaoExplicacao = sugestaoExplicacao;
        this.perguntasSugeridas = perguntasSugeridas;
        this.curiosidades = curiosidades;
        this.errosComuns = errosComuns;
        this.materiaisComplementares = materiaisComplementares;
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

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
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

    public Integer getTempoEstimado() {
        return tempoEstimado;
    }

    public void setTempoEstimado(Integer tempoEstimado) {
        this.tempoEstimado = tempoEstimado;
    }

    public String getSugestaoExplicacao() {
        return sugestaoExplicacao;
    }

    public void setSugestaoExplicacao(String sugestaoExplicacao) {
        this.sugestaoExplicacao = sugestaoExplicacao;
    }

    public String getPerguntasSugeridas() {
        return perguntasSugeridas;
    }

    public void setPerguntasSugeridas(String perguntasSugeridas) {
        this.perguntasSugeridas = perguntasSugeridas;
    }

    public String getCuriosidades() {
        return curiosidades;
    }

    public void setCuriosidades(String curiosidades) {
        this.curiosidades = curiosidades;
    }

    public String getErrosComuns() {
        return errosComuns;
    }

    public void setErrosComuns(String errosComuns) {
        this.errosComuns = errosComuns;
    }

    public String getMateriaisComplementares() {
        return materiaisComplementares;
    }

    public void setMateriaisComplementares(String materiaisComplementares) {
        this.materiaisComplementares = materiaisComplementares;
    }

    // Builder Pattern
    public static SlideBuilder builder() {
        return new SlideBuilder();
    }

    public static class SlideBuilder {
        private Long id;
        private Aula aula;
        private String titulo;
        private String conteudo;
        private String imagemUrl;
        private Integer ordem;
        private String objetivo;
        private Integer tempoEstimado;
        private String sugestaoExplicacao;
        private String perguntasSugeridas;
        private String curiosidades;
        private String errosComuns;
        private String materiaisComplementares;

        public SlideBuilder id(Long id) { this.id = id; return this; }
        public SlideBuilder aula(Aula aula) { this.aula = aula; return this; }
        public SlideBuilder titulo(String titulo) { this.titulo = titulo; return this; }
        public SlideBuilder conteudo(String conteudo) { this.conteudo = conteudo; return this; }
        public SlideBuilder imagemUrl(String imagemUrl) { this.imagemUrl = imagemUrl; return this; }
        public SlideBuilder ordem(Integer ordem) { this.ordem = ordem; return this; }
        public SlideBuilder objetivo(String objetivo) { this.objetivo = objetivo; return this; }
        public SlideBuilder tempoEstimado(Integer tempoEstimado) { this.tempoEstimado = tempoEstimado; return this; }
        public SlideBuilder sugestaoExplicacao(String sugestaoExplicacao) { this.sugestaoExplicacao = sugestaoExplicacao; return this; }
        public SlideBuilder perguntasSugeridas(String perguntasSugeridas) { this.perguntasSugeridas = perguntasSugeridas; return this; }
        public SlideBuilder curiosidades(String curiosidades) { this.curiosidades = curiosidades; return this; }
        public SlideBuilder errosComuns(String errosComuns) { this.errosComuns = errosComuns; return this; }
        public SlideBuilder materiaisComplementares(String materiaisComplementares) { this.materiaisComplementares = materiaisComplementares; return this; }

        public Slide build() {
            return new Slide(id, aula, titulo, conteudo, imagemUrl, ordem, objetivo, tempoEstimado, sugestaoExplicacao, perguntasSugeridas, curiosidades, errosComuns, materiaisComplementares);
        }
    }
}
