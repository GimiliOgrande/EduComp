# AI Agents Context — EduComp

> Este arquivo fornece contexto para ferramentas de IA (Cursor, GitHub Copilot, Claude, etc.)

## Projeto
Plataforma web de apoio ao ensino de Computação para escolas públicas, desenvolvida para auxiliar professores do Ensino Médio na condução de aulas utilizando materiais instrucionais digitais alinhados à BNCC.

## Stack Principal
- **Front-end**: React + TypeScript + Vite (Estilização com Material UI)
- **Back-end**: Spring Boot 3.4.5 (Java 21, Maven, Spring Security + JWT, Spring Data JPA, Hibernate)
- **Banco de Dados**: PostgreSQL

## Pacote base do Back-end
`br.ufpb.dsc.educomp`

## Padrões importantes
- **DTOs**: Records Java imutáveis no back-end (Request/Response da REST API)
- **Controllers**: Apenas REST APIs retornando DTOs/JSON (sem views server-side)
- **Service Layer**: Lógica de negócio anotada com `@Transactional`
- **Banco de Dados**: Migrations via Flyway em `src/main/resources/db/migration/`
- **Segurança**: Autenticação stateless com token JWT no header HTTP
- **Configuração**: Variáveis de ambiente gerenciadas por `.env` (NUNCA commitar `.env` ou chaves privadas)

## Comandos rápidos

### Back-end (Spring Boot)
```bash
mvn spring-boot:run                    # rodar back-end local
mvn test                               # rodar testes unitários e de integração
mvn clean verify                       # construir o projeto e rodar testes/verificações
```

### Front-end (React + Vite)
```bash
npm run dev                            # rodar front-end localmente (Vite)
npm run build                          # gerar build de produção
npm run lint                           # rodar linter do projeto
```

### Docker
```bash
docker compose -f docker/docker-compose.dev.yml up  # subir infra local (PostgreSQL)
```

---

# Memória do Projeto — EduComp

## Identidade do Projeto
- **Nome**: EduComp — Apoio ao Ensino de Computação
- **Disciplina**: Desenvolvimento de Sistemas Corporativos / Estágio III
- **Instituição**: Universidade Federal da Paraíba (UFPB) — Campus IV
- **Propósito**: Permitir que professores do Ensino Médio de escolas públicas ministrem aulas de Computação de qualidade utilizando apenas uma TV/projetor, contendo roteiros, apresentações e suporte pedagógico integrado.

## Diferencial: Assistente Pedagógico
Cada slide na apresentação conta com um **Assistente Pedagógico**, fornecendo ao professor:
- Objetivo da etapa da aula e tempo estimado.
- Sugestão do que explicar em sala.
- Perguntas para a turma e possíveis respostas esperadas.
- Curiosidades e erros conceituais comuns.
- Competências e habilidades da BNCC relacionadas.
- Materiais complementares de leitura e apoio.

## Stack Técnica Detalhada
| Camada | Tecnologia | Versão/Detalhe |
|--------|-----------|----------------|
| Linguagem Back-end | Java | 21 |
| Linguagem Front-end | TypeScript | - |
| Framework Back-end | Spring Boot | 3.4.5 |
| Framework Front-end | React + Vite | 18+ |
| Roteamento Front-end | React Router | - |
| Comunicação HTTP | Axios | - |
| Interface / Componentes | Material UI | - |
| Persistência / ORM | Spring Data JPA + Hibernate | - |
| Banco de Dados | PostgreSQL | 16 |
| Migrations | Flyway | - |
| Segurança | Spring Security + JWT | - |

## Estrutura de Diretórios Proposta

### Back-end (`/backend` ou similar)
```
br.ufpb.dsc.educomp
├── config/          # Configurações Spring (Security, Web, CORS, JWT)
├── controller/      # REST Controllers (exposição de endpoints JSON)
├── domain/          # Entidades JPA (mapeamento objeto-relacional)
├── dto/             # Data Transfer Objects (Records Java imutáveis)
├── exception/       # Exceções personalizadas de domínio e GlobalExceptionHandler
├── repository/      # Interfaces de repositório Spring Data JPA
└── service/         # Lógica de negócio (@Transactional)
```

### Front-end (`/frontend` ou similar)
```
src/
├── components/      # Componentes de UI reutilizáveis (botões, slides, cards, etc.)
├── pages/           # Telas completas da aplicação
│   ├── Inicial/     # Página Inicial (Módulos: Hardware, Programação, etc.)
│   ├── Aula/        # Apresentação do Slide
│   ├── Professor/   # Controles e Roteiro do Assistente Pedagógico
│   ├── Apresentacao/# Visão limpa dos slides projetados para alunos
│   └── Admin/       # CRUDs de Módulos, Aulas, Quizzes, etc.
├── routes/          # Configuração de rotas da aplicação (React Router)
├── services/        # Cliente HTTP (configuração do Axios para comunicação com API)
├── context/         # Estados globais (autenticação, estado da aula)
└── hooks/           # Custom hooks utilitários
```

## Acesso Local
- **Acesso Front-end**: http://localhost:5173
- **Acesso Back-end (API)**: http://localhost:8080
- **Adminer (DB UI - Opcional)**: http://localhost:8888

## Decisões Arquiteturais

### Por que React + Vite em vez de Thymeleaf?
O EduComp necessita de interatividade rica em tempo real para gerenciar o Modo Apresentação (exibido na TV/projetor para alunos) de forma sincronizada com as observações do Modo Professor (exibido no celular/notebook do professor). Um front-end desacoplado usando React permite esse controle avançado de estado e uma UI rica em micro-interações sem recarregar a página.

### Por que Material UI (MUI)?
O MUI acelera a entrega de interfaces administrativas completas (CRUDs de aulas e módulos) e fornece um ecossistema responsivo e altamente personalizável para suportar layouts adaptados tanto a celulares (professor) quanto a TVs Full HD (apresentação de slides).

### Por que Flyway para migrations?
Garante o versionamento do banco de dados PostgreSQL do projeto, essencial para que as equipes de desenvolvimento de alunos mantenham schemas sincronizados.

## Convenções de Código
- Nomes em português no domínio (entidades, métodos de negócio).
- Endpoints REST em português (ex: `/api/modulos`, `/api/aulas`).
- Comentários de código em português.
- Mensagens de commit no padrão Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`).
- Records Java para DTOs imutáveis.
- `@Transactional(readOnly = true)` para operações de leitura nos services.

## Entidades de Domínio
1. **Professor**: Cadastro e autenticação.
2. **Módulo**: Hardware, Internet, Segurança, IA, Programação, etc.
3. **Aula**: Pertence a um módulo, agrupa slides, atividades e quizzes.
4. **Slide**: Conteúdo multimídia (textos, imagens, links).
5. **Quiz**: Conjunto de perguntas e respostas rápidas para fixação.
6. **Pergunta**: Pertencente ao Quiz.
7. **Alternativa**: Opções de resposta para uma pergunta.
8. **Atividade**: Arquivo ou roteiro de atividades práticas para download.
9. **Vídeo**: Link ou player de mídia complementar.
10. **Competência BNCC** / **Habilidade BNCC**: Vinculação curricular da aula.

## Backlog de Desenvolvimento (Sprints 1 a 9)
1. **Sprint 1**: Planejamento, Levantamento da BNCC, Documento de Visão.
2. **Sprint 2**: Modelagem, Banco de Dados, Protótipos.
3. **Sprint 3**: Desenvolvimento do Back-end.
4. **Sprint 4**: Desenvolvimento do Front-end.
5. **Sprint 5**: Área Administrativa (Módulos/Aulas/Slides).
6. **Sprint 6**: Modo Apresentação.
7. **Sprint 7**: Desenvolvimento do primeiro módulo completo de conteúdo.
8. **Sprint 8**: Testes de Integração e Sistema.
9. **Sprint 9**: Documentação final e entrega.
