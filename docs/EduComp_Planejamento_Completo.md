# EduComp - Planejamento Completo do Projeto

## Visão Geral

O EduComp é uma plataforma web de apoio ao ensino de Computação para
escolas públicas, desenvolvida para auxiliar professores do Ensino Médio
na condução de aulas utilizando materiais instrucionais digitais
alinhados à BNCC.

O projeto será desenvolvido como um produto real, seguindo boas práticas
de Engenharia de Software.

------------------------------------------------------------------------

# Estrutura da Documentação

``` text
EduComp/
├── 01 - Documento de Visão.md
├── 02 - Documento de Requisitos.md
├── 03 - Histórias de Usuário.md
├── 04 - Modelo de Domínio.md
├── 05 - Casos de Uso.md
├── 06 - Arquitetura.md
├── 07 - Banco de Dados.md
├── 08 - Protótipos.md
├── 09 - Backlog.md
└── 10 - Plano de Desenvolvimento.md
```

------------------------------------------------------------------------

# 1. Documento de Visão

## Objetivo

Descrever o problema, a solução proposta, o público-alvo, o escopo e os
benefícios do EduComp.

## Problema

Grande parte das escolas públicas brasileiras possui infraestrutura
limitada para o ensino de Computação. Em muitos casos não existem
laboratórios de informática e os professores não possuem formação
específica na área.

## Solução

Criar uma plataforma web contendo materiais instrucionais alinhados à
BNCC, permitindo que o professor ministre aulas utilizando apenas uma
televisão ou projetor.

------------------------------------------------------------------------

# 2. Documento de Requisitos

## Requisitos Funcionais

-   RF01 -- O professor poderá criar uma conta.
-   RF02 -- O professor poderá realizar login.
-   RF03 -- O professor poderá visualizar os módulos disponíveis.
-   RF04 -- O professor poderá iniciar uma aula.
-   RF05 -- O sistema deverá exibir slides.
-   RF06 -- O sistema deverá apresentar observações do professor.
-   RF07 -- O sistema deverá exibir vídeos.
-   RF08 -- O sistema deverá apresentar quizzes.
-   RF09 -- O sistema deverá permitir o download de atividades.
-   RF10 -- O administrador poderá cadastrar módulos e aulas.

## Requisitos Não Funcionais

-   RNF01 -- Interface responsiva.
-   RNF02 -- Tempo médio de resposta inferior a 2 segundos.
-   RNF03 -- Compatibilidade com Chrome, Edge e Firefox.
-   RNF04 -- Autenticação utilizando JWT.
-   RNF05 -- Banco de dados PostgreSQL.
-   RNF06 -- API REST.
-   RNF07 -- Código organizado em arquitetura em camadas.
-   RNF08 -- Interface intuitiva.
-   RNF09 -- Adequado para TVs Full HD.

------------------------------------------------------------------------

# 3. Histórias de Usuário

-   Como professor, quero visualizar aulas prontas para reduzir meu
    tempo de preparação.
-   Como professor, quero visualizar um roteiro de aula para saber
    exatamente o que explicar.
-   Como professor, quero aplicar quizzes para verificar o entendimento
    dos alunos.
-   Como administrador, quero cadastrar novos módulos para manter o
    sistema atualizado.

------------------------------------------------------------------------

# 4. Modelo de Domínio

``` text
Professor
    ↓
Curso (ex: Educação Digital)
    ↓
Série (1º, 2º e 3º Ano)
    ↓
Módulo
    ↓
Aula
    ↓
Slide
    ↓
Quiz
    ↓
Pergunta
    ↓
Alternativa
    ↓
Atividade
    ↓
Competência BNCC / Habilidade BNCC
```

------------------------------------------------------------------------

# 5. Casos de Uso

## Professor

``` text
Cadastrar
   ↓
Login
   ↓
Escolher módulo
   ↓
Escolher aula
   ↓
Iniciar apresentação
   ↓
Aplicar quiz
   ↓
Baixar atividade
```

## Administrador

``` text
Login
   ↓
Cadastrar módulo
Cadastrar aula
Cadastrar slides
Cadastrar vídeos
Cadastrar atividades
```

------------------------------------------------------------------------

# 6. Arquitetura

## Front-end

-   React
-   TypeScript
-   Vite
-   React Router
-   Axios
-   Material UI

## Back-end

-   Spring Boot
-   Spring Security
-   JWT
-   Spring Data JPA
-   Hibernate
-   Bean Validation

## Banco de Dados

-   PostgreSQL

## Fluxo

``` text
React
   ↓
REST API
   ↓
Spring Boot
   ↓
PostgreSQL
```

------------------------------------------------------------------------

# 7. Banco de Dados

Entidades principais:

-   Professor
-   Curso (Educação Digital)
-   Série (1º, 2º e 3º Ano)
-   Módulo
-   Aula
-   Slide
-   Quiz
-   Pergunta
-   Alternativa
-   Atividade
-   Vídeo
-   Competência BNCC
-   Habilidade BNCC

Posteriormente será elaborado um DER completo.

------------------------------------------------------------------------

# 8. Protótipos

## Página Inicial

``` text
EduComp

Pesquisar Aula

[Seletor de Série: 1º Ano | 2º Ano | 3º Ano]

1º Ano: Fundamentos da Computação e Cultura Digital
- Módulo 1: Introdução à Computação
- Módulo 2: Conhecendo o Computador
- Módulo 3: Internet
- Módulo 4: Segurança Digital
- Módulo 5: Cidadania Digital
- Módulo 6: Projeto Final

2º Ano: Computação Aplicada e Pensamento Computacional
- Módulo 1: Hardware na Prática
- Módulo 2: Sistemas Operacionais e Softwares
- Módulo 3: Pensamento Computacional
- Módulo 4: Tecnologia para Estudo e Trabalho
- Módulo 5: Produção Digital
- Módulo 6: Projeto Final

3º Ano: Tecnologia, Sociedade e Futuro
- Módulo 1: Inteligência Artificial
- Módulo 2: Desenvolvimento de Soluções Digitais
- Módulo 3: Segurança da Informação
- Módulo 4: Tecnologia e Sociedade
- Módulo 5: Profissões em Tecnologia
- Módulo 6: Projeto Final
```

## Tela da Aula

-   Slide
-   Imagem
-   Conteúdo
-   Botões Anterior e Próximo

## Modo Professor

-   Observações
-   Perguntas sugeridas
-   Tempo estimado
-   Competências BNCC

## Modo Apresentação

Exibe apenas o conteúdo destinado aos alunos.

## Área Administrativa

-   Módulos
-   Aulas
-   Slides
-   Quizzes
-   Atividades

------------------------------------------------------------------------

# 9. Backlog

## Épicos

1.  Autenticação
2.  Gerenciamento de Conteúdo
3.  Quizzes
4.  Atividades
5.  Modo Apresentação
6.  Integração com a BNCC

------------------------------------------------------------------------

# 10. Plano de Desenvolvimento

## Sprint 1

-   Planejamento
-   Levantamento da BNCC
-   Documento de visão

## Sprint 2

-   Modelagem
-   Banco de dados
-   Protótipos

## Sprint 3

-   Backend

## Sprint 4

-   Frontend

## Sprint 5

-   Área Administrativa

## Sprint 6

-   Modo Apresentação

## Sprint 7

-   Desenvolvimento do primeiro módulo completo

## Sprint 8

-   Testes

## Sprint 9

-   Documentação final

------------------------------------------------------------------------

# Diferencial do Projeto

Cada slide contará com um **Assistente Pedagógico**, oferecendo:

-   Objetivo da etapa da aula;
-   Tempo estimado;
-   Sugestão do que explicar;
-   Perguntas para a turma;
-   Possíveis respostas esperadas;
-   Curiosidades;
-   Erros conceituais comuns;
-   Competências e habilidades da BNCC relacionadas;
-   Materiais complementares.

Esse recurso transformará o EduComp em uma plataforma de apoio
pedagógico completa para professores, especialmente aqueles que não
possuem formação específica em Computação.
