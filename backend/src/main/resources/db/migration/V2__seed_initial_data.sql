-- Inserir Competências da BNCC
INSERT INTO competencia_bncc (id, codigo, descricao) VALUES 
(1, 'Pensamento Científico', 'Pensamento Científico, Crítico e Criativo'),
(2, 'Cultura Digital', 'Cultura Digital'),
(3, 'Pensamento Crítico', 'Exercitar a curiosidade intelectual e utilizar as ciências');

-- Inserir Habilidades da BNCC
INSERT INTO habilidade_bncc (id, codigo, descricao) VALUES 
(1, 'EM13LGG101', 'Compreender o funcionamento das tecnologias digitais'),
(2, 'EM13LGG102', 'Analisar o impacto das tecnologias digitais na sociedade'),
(3, 'EM13LGG103', 'Utilizar diferentes linguagens e ferramentas digitais');

-- Inserir Módulos
INSERT INTO modulo (id, nome, descricao) VALUES
(1, 'Hardware', 'Introdução aos componentes físicos e arquitetura de computadores.'),
(2, 'Programação', 'Lógica algorítmica, fluxogramas, variáveis e as bases da programação.'),
(3, 'Redes e Internet', 'Infraestrutura da web, roteamento de pacotes, endereços IP e a história da internet.'),
(4, 'Segurança da Informação', 'Criptografia, segurança de senhas, engenharia social, malwares e privacidade online.'),
(5, 'Inteligência Artificial', 'Histórico da IA, aprendizado de máquina (Machine Learning) e redes neurais de forma intuitiva.');

-- Inserir Aulas
INSERT INTO aula (id, modulo_id, titulo, descricao, ordem) VALUES
(101, 1, 'Processadores e Memórias', 'Entenda como o computador processa informações e armazena dados temporária e permanentemente.', 1),
(102, 2, 'Lógica e Variáveis', 'Introdução ao raciocínio lógico computacional e ao uso de variáveis para armazenar dados em algoritmos.', 1);

-- Inserir Slides da Aula 101
INSERT INTO slide (id, aula_id, titulo, conteudo, imagem_url, ordem, objetivo, tempo_estimado, sugestao_explicacao, perguntas_sugeridas, curiosidades, erros_comuns, materiais_complementares) VALUES
(1001, 101, 'O Cérebro da Máquina (CPU)', 
 'A CPU (Unidade Central de Processamento) é o coração físico e cérebro do computador. Ela é responsável por carregar o sistema operacional, executar todas as instruções de programas e realizar bilhões de cálculos aritméticos e lógicos a cada segundo.',
 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80',
 1,
 'Apresentar a CPU como a unidade central de processamento e explicar seu papel fundamental no computador.',
 5,
 'Faça uma analogia direta com o cérebro humano: assim como pensamos para realizar tarefas, a CPU processa instruções para fazer a máquina rodar. Destaque que os programas são apenas longas listas de instruções simples que a CPU executa em velocidades inacreditáveis.',
 '1. Quem aqui sabe o que a sigla CPU significa? \n2. O que aconteceria se retirássemos o processador da máquina enquanto ela está rodando?',
 'A velocidade dos processadores é medida em Gigahertz (GHz). Uma CPU de 3.0 GHz pode processar cerca de 3 bilhões de operações em apenas um segundo!',
 'Os alunos costumam chamar o gabinete inteiro (a torre do computador) de "CPU". Explique que o gabinete é a carcaça e a CPU é apenas um pequeno chip instalado na placa-mãe.',
 'Leitura sugerida: "Arquitetura de Computadores" de Andrew Tanenbaum.'),
(1002, 101, 'Memória RAM vs Armazenamento', 
 'A Memória RAM é volátil (temporária) e extremamente rápida, guardando os programas e abas abertas enquanto o computador está ligado. Já o armazenamento permanente (HD ou SSD) guarda seus arquivos, fotos e o sistema operacional mesmo quando tudo está desligado.',
 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=800&auto=format&fit=crop&q=80',
 2,
 'Diferenciar claramente memória temporária (volátil) de armazenamento permanente.',
 7,
 'Use a analogia da mesa de trabalho: a memória RAM é o tamanho da superfície da sua mesa (onde você coloca os cadernos e canetas que está usando no momento). O HD ou SSD é a gaveta do armário onde você guarda os livros quando vai dormir.',
 '1. Se faltar energia repentinamente, o que acontece com o documento do Word que você não salvou? Por quê? \n2. Por que computadores com mais RAM conseguem abrir mais abas do navegador ao mesmo tempo?',
 'Os novos SSDs (Solid State Drives) usam chips de memória flash (parecido com pendrives) e são até 10 vezes mais rápidos que os HDs tradicionais mecânicos.',
 'Muitos alunos acham que ter mais memória RAM aumenta o espaço para salvar fotos no computador, ou que um HD maior deixa os jogos mais rápidos.',
 'Vídeo sugerido: "Como funciona a memória RAM" no canal do YouTube do EduComp.');

-- Inserir Slides da Aula 102
INSERT INTO slide (id, aula_id, titulo, conteudo, imagem_url, ordem, objetivo, tempo_estimado, sugestao_explicacao, perguntas_sugeridas, curiosidades, erros_comuns, materiais_complementares) VALUES
(1003, 102, 'O que é um Algoritmo?', 
 'Um algoritmo é simplesmente uma sequência finita de passos bem definidos e lógicos para realizar uma tarefa ou resolver um problema. No dia a dia, receitas de bolo ou instruções de montagem são algoritmos simples.',
 NULL,
 1,
 'Familiarizar o aluno com o conceito de algoritmo utilizando exemplos cotidianos.',
 5,
 'Peça para um aluno descrever os passos detalhados para escovar os dentes ou atravessar a rua. Mostre como pequenos detalhes que fazemos automaticamente precisam ser descritos passo a passo para um computador.',
 '1. O que acontece se uma etapa do algoritmo estiver fora de ordem? \n2. Computadores conseguem inventar novos passos sozinhos?',
 'O termo "algoritmo" vem do nome do matemático persa Al-Khwarizmi, do século IX.',
 'Achar que algoritmos são exclusivos de computadores ou que envolvem apenas fórmulas matemáticas complexas.',
 'Leitura complementar: "Algoritmos para iniciantes" no Medium.');

-- Inserir Quizzes
INSERT INTO quiz (id, aula_id, titulo) VALUES
(501, 101, 'Quiz Rápido: Processadores e Memórias');

-- Inserir Perguntas
INSERT INTO pergunta (id, quiz_id, enunciado, ordem) VALUES
(601, 501, 'Qual dos seguintes componentes físicos do computador perde todos os dados contidos nele quando a máquina é desligada ou perde energia?', 1),
(602, 501, 'O que a sigla CPU representa no contexto de hardware?', 2);

-- Inserir Alternativas
INSERT INTO alternativa (id, pergunta_id, texto, correta, ordem) VALUES
(701, 601, 'Disco Rígido (HD)', FALSE, 1),
(702, 601, 'SSD', FALSE, 2),
(703, 601, 'Memória RAM', TRUE, 3),
(704, 601, 'Memória Flash (Pendrive)', FALSE, 4),
(705, 602, 'Central de Programação Unificada', FALSE, 1),
(706, 602, 'Unidade Central de Processamento', TRUE, 2),
(707, 602, 'Computador Pessoal Unitário', FALSE, 3),
(708, 602, 'Carregador de Processamento Único', FALSE, 4);

-- Inserir Atividades
INSERT INTO atividade (id, aula_id, titulo, descricao, arquivo_url) VALUES
(801, 101, 'Roteiro Prático: Montando seu PC Ideal', 'Uma atividade em grupo onde os alunos devem pesquisar componentes reais e montar um orçamento equilibrado para diferentes perfis de uso (escritório, design, jogos).', '#');

-- Inserir Vídeos
INSERT INTO video (id, aula_id, titulo, url, ordem) VALUES
(901, 101, 'O que tem dentro do processador? - Microarquitetura', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 1);

-- Inserir Relacionamentos Aula-Competência
INSERT INTO aula_competencia (aula_id, competencia_id) VALUES
(101, 1),
(101, 2),
(102, 3),
(102, 2);

-- Inserir Relacionamentos Aula-Habilidade
INSERT INTO aula_habilidade (aula_id, habilidade_id) VALUES
(101, 1),
(101, 2),
(102, 3);

-- Sincronizar os sequences de IDs do PostgreSQL
SELECT setval(pg_get_serial_sequence('competencia_bncc', 'id'), coalesce(max(id), 1)) FROM competencia_bncc;
SELECT setval(pg_get_serial_sequence('habilidade_bncc', 'id'), coalesce(max(id), 1)) FROM habilidade_bncc;
SELECT setval(pg_get_serial_sequence('modulo', 'id'), coalesce(max(id), 1)) FROM modulo;
SELECT setval(pg_get_serial_sequence('aula', 'id'), coalesce(max(id), 1)) FROM aula;
SELECT setval(pg_get_serial_sequence('slide', 'id'), coalesce(max(id), 1)) FROM slide;
SELECT setval(pg_get_serial_sequence('quiz', 'id'), coalesce(max(id), 1)) FROM quiz;
SELECT setval(pg_get_serial_sequence('pergunta', 'id'), coalesce(max(id), 1)) FROM pergunta;
SELECT setval(pg_get_serial_sequence('alternativa', 'id'), coalesce(max(id), 1)) FROM alternativa;
SELECT setval(pg_get_serial_sequence('atividade', 'id'), coalesce(max(id), 1)) FROM atividade;
SELECT setval(pg_get_serial_sequence('video', 'id'), coalesce(max(id), 1)) FROM video;
