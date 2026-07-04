-- Tabela Professor
CREATE TABLE professor (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Tabela Módulo
CREATE TABLE modulo (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    descricao TEXT
);

-- Tabela Aula
CREATE TABLE aula (
    id BIGSERIAL PRIMARY KEY,
    modulo_id BIGINT NOT NULL REFERENCES modulo(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    ordem INT NOT NULL DEFAULT 0
);

-- Tabela Slide
CREATE TABLE slide (
    id BIGSERIAL PRIMARY KEY,
    aula_id BIGINT NOT NULL REFERENCES aula(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    imagem_url VARCHAR(512),
    ordem INT NOT NULL DEFAULT 0,
    -- Campos do Assistente Pedagógico
    objetivo VARCHAR(512),
    tempo_estimado INT DEFAULT 5, -- Em minutos
    sugestao_explicacao TEXT,
    perguntas_sugeridas TEXT,
    curiosidades TEXT,
    erros_comuns TEXT,
    materiais_complementares TEXT
);

-- Tabela Quiz
CREATE TABLE quiz (
    id BIGSERIAL PRIMARY KEY,
    aula_id BIGINT NOT NULL UNIQUE REFERENCES aula(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL
);

-- Tabela Pergunta
CREATE TABLE pergunta (
    id BIGSERIAL PRIMARY KEY,
    quiz_id BIGINT NOT NULL REFERENCES quiz(id) ON DELETE CASCADE,
    enunciado TEXT NOT NULL,
    ordem INT NOT NULL DEFAULT 0
);

-- Tabela Alternativa
CREATE TABLE alternativa (
    id BIGSERIAL PRIMARY KEY,
    pergunta_id BIGINT NOT NULL REFERENCES pergunta(id) ON DELETE CASCADE,
    texto TEXT NOT NULL,
    correta BOOLEAN NOT NULL DEFAULT FALSE,
    ordem INT NOT NULL DEFAULT 0
);

-- Tabela Atividade (Roteiro ou arquivo complementar para download)
CREATE TABLE atividade (
    id BIGSERIAL PRIMARY KEY,
    aula_id BIGINT NOT NULL REFERENCES aula(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    arquivo_url VARCHAR(512) NOT NULL
);

-- Tabela Vídeo (Vídeos complementares da aula)
CREATE TABLE video (
    id BIGSERIAL PRIMARY KEY,
    aula_id BIGINT NOT NULL REFERENCES aula(id) ON DELETE CASCADE,
    titulo VARCHAR(255) NOT NULL,
    url VARCHAR(512) NOT NULL,
    ordem INT NOT NULL DEFAULT 0
);

-- Tabelas da BNCC (Competências e Habilidades)
CREATE TABLE competencia_bncc (
    id BIGSERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT NOT NULL
);

CREATE TABLE habilidade_bncc (
    id BIGSERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT NOT NULL
);

-- Relacionamentos Muitos-para-Muitos das Aulas com Competências/Habilidades
CREATE TABLE aula_competencia (
    aula_id BIGINT NOT NULL REFERENCES aula(id) ON DELETE CASCADE,
    competencia_id BIGINT NOT NULL REFERENCES competencia_bncc(id) ON DELETE CASCADE,
    PRIMARY KEY (aula_id, competencia_id)
);

CREATE TABLE aula_habilidade (
    aula_id BIGINT NOT NULL REFERENCES aula(id) ON DELETE CASCADE,
    habilidade_id BIGINT NOT NULL REFERENCES habilidade_bncc(id) ON DELETE CASCADE,
    PRIMARY KEY (aula_id, habilidade_id)
);
