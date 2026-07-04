package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "competencia_bncc")
public class CompetenciaBNCC {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String codigo;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String descricao;

    @ManyToMany(mappedBy = "competencias")
    @JsonIgnore
    private List<Aula> aulas;

    public CompetenciaBNCC() {}

    public CompetenciaBNCC(Long id, String codigo, String descricao, List<Aula> aulas) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.aulas = aulas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public List<Aula> getAulas() {
        return aulas;
    }

    public void setAulas(List<Aula> aulas) {
        this.aulas = aulas;
    }

    // Builder Pattern
    public static CompetenciaBNCCBuilder builder() {
        return new CompetenciaBNCCBuilder();
    }

    public static class CompetenciaBNCCBuilder {
        private Long id;
        private String codigo;
        private String descricao;
        private List<Aula> aulas;

        public CompetenciaBNCCBuilder id(Long id) { this.id = id; return this; }
        public CompetenciaBNCCBuilder codigo(String codigo) { this.codigo = codigo; return this; }
        public CompetenciaBNCCBuilder descricao(String descricao) { this.descricao = descricao; return this; }
        public CompetenciaBNCCBuilder aulas(List<Aula> aulas) { this.aulas = aulas; return this; }

        public CompetenciaBNCC build() {
            return new CompetenciaBNCC(id, codigo, descricao, aulas);
        }
    }
}
