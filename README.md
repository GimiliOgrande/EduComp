# EduComp — Plataforma de Apoio ao Ensino de Computação

O **EduComp** é uma plataforma web projetada para apoiar o ensino de Computação em escolas públicas. O sistema foi desenvolvido para auxiliar professores do Ensino Médio — inclusive aqueles sem formação específica na área de tecnologia — a ministrar aulas de qualidade utilizando apenas uma TV ou projetor. A plataforma oferece roteiros de aula, apresentações visuais e suporte pedagógico integrado de forma alinhada à Base Nacional Comum Curricular (BNCC).

---

## 🚀 Diferencial: Assistente Pedagógico

O principal diferencial do EduComp é o **Assistente Pedagógico** integrado diretamente na tela de apresentação de slides do professor (Modo Professor). Para cada slide projetado aos alunos, o professor tem acesso a um painel de apoio contendo:

*   **Objetivo da etapa**: O que os alunos devem absorver nessa parte do slide.
*   **Tempo estimado**: Sugestão de duração da explicação do slide.
*   **Sugestão de explicação**: Um roteiro detalhado do que falar ou como abordar o assunto em sala.
*   **Perguntas para a turma**: Questionamentos para instigar os alunos e as respostas conceituais esperadas.
*   **Curiosidades e erros comuns**: Dicas de mitos tecnológicos e erros conceituais recorrentes que os alunos costumam cometer.
*   **Integração com a BNCC**: Indicação direta de quais competências e habilidades curriculares estão sendo trabalhadas naquele momento.

---

## 🛠️ Stack Tecnológica

O sistema utiliza uma arquitetura desacoplada em duas camadas principais:

### Back-end (API REST)
*   **Linguagem**: Java 21
*   **Framework**: Spring Boot 3.4.5
*   **Persistência**: Spring Data JPA + Hibernate
*   **Segurança**: Spring Security com autenticação stateless baseada em token JWT
*   **Banco de Dados**: PostgreSQL 16
*   **Migração de Schema**: Flyway
*   **Gerenciador de Dependências**: Maven

### Front-end (SPA)
*   **Linguagem**: TypeScript
*   **Framework**: React (Vite)
*   **Interface e Componentes**: Material UI (MUI) com tema escuro premium personalizado e animações
*   **Roteamento**: React Router
*   **Comunicação**: Axios para requisições HTTP

---

## 📂 Estrutura do Projeto

O repositório está dividido em dois subdiretórios principais na raiz:

```text
EduComp/
├── backend/                  # Código-fonte da API Spring Boot
│   ├── src/main/java         # Pacote base br.ufpb.dsc.educomp
│   │   ├── config/           # Configurações de Security, CORS e JWT
│   │   ├── controller/       # REST Controllers (exposição de JSON)
│   │   ├── domain/           # Entidades JPA (Modelo relacional)
│   │   ├── dto/              # Records Java imutáveis para requests/responses
│   │   ├── exception/        # Tratamento global de exceções
│   │   ├── repository/       # Interfaces Spring Data JPA
│   │   └── service/          # Lógica de negócio com controle transacional
│   └── src/main/resources    # Arquivos de propriedades e migrações Flyway
│
├── frontend/                 # Código-fonte do cliente React + Vite
│   ├── src/
│   │   ├── components/       # Componentes visuais e reutilizáveis
│   │   ├── pages/            # Telas (Página Inicial, Slides, Modo Professor, etc.)
│   │   ├── routes/           # Rotas da Single Page Application
│   │   ├── services/         # Configuração do Axios para chamadas à API
│   │   ├── context/          # Provedores de estado global (autenticação, aula)
│   │   ├── theme.ts          # Definições de cores e fontes do Material UI
│   │   └── index.css         # Design system de base com variáveis CSS
│
└── docs/                     # Documentação de requisitos e planejamento do projeto
```

---

## ⚙️ Como Executar o Sistema Localmente

### Pré-requisitos
Certifique-se de possuir instalado em sua máquina:
*   [Java JDK 21](https://adoptium.net/temurin/releases/?version=21)
*   [Node.js (versão 18 ou superior)](https://nodejs.org/)
*   [Maven](https://maven.apache.org/)
*   [Docker](https://www.docker.com/) (opcional para subir o PostgreSQL local de forma rápida)

---

### Passo 1: Subir o Banco de Dados (PostgreSQL)

Você pode subir uma instância local do PostgreSQL de forma automatizada via Docker Compose:

```bash
# A partir da pasta raiz do projeto, execute:
docker compose -f docker/docker-compose.dev.yml up -d
```

Caso não queira usar Docker, crie um banco de dados local chamado `educomp` no seu PostgreSQL e ajuste as credenciais de acesso no arquivo de propriedades do back-end.

---

### Passo 2: Executar o Back-end (Spring Boot)

1.  Navegue até a pasta do back-end:
    ```bash
    cd backend
    ```
2.  (Opcional) Ajuste as variáveis de conexão com o banco no arquivo `src/main/resources/application.properties` se necessário.
3.  Execute a aplicação via Maven:
    ```bash
    mvn spring-boot:run
    ```
    A API iniciará na porta **8080** (endereço padrão: `http://localhost:8080`).

---

### Passo 3: Executar o Front-end (React + Vite)

1.  Abra um novo terminal e navegue até a pasta do front-end:
    ```bash
    cd frontend
    ```
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento do Vite:
    ```bash
    npm run dev
    ```
    O front-end iniciará e estará disponível em seu navegador no endereço: `http://localhost:5173`.

---

## ✍️ Convenções do Projeto

*   **Padrão de Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `refactor:`).
*   **Idioma**: Comentários de código, entidades de domínio, endpoints REST e atributos em **Português**.
*   **Segurança**: NUNCA commite senhas ou arquivos `.env` contendo tokens privados no repositório.
