package br.ufpb.dsc.educomp.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "professor")
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    public Professor() {}

    public Professor(Long id, String nome, String email, String senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    // Builder Pattern
    public static ProfessorBuilder builder() {
        return new ProfessorBuilder();
    }

    public static class ProfessorBuilder {
        private Long id;
        private String nome;
        private String email;
        private String senha;

        public ProfessorBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public ProfessorBuilder nome(String nome) {
            this.nome = nome;
            return this;
        }

        public ProfessorBuilder email(String email) {
            this.email = email;
            return this;
        }

        public ProfessorBuilder senha(String senha) {
            this.senha = senha;
            return this;
        }

        public Professor build() {
            return new Professor(id, nome, email, senha);
        }
    }
}
