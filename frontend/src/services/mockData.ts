export interface SlideData {
  id: number;
  titulo: string;
  conteudo: string;
  imagemUrl?: string;
  ordem: number;
  objetivo?: string;
  tempoEstimado?: number;
  sugestaoExplicacao?: string;
  perguntasSugeridas?: string;
  curiosidades?: string;
  errosComuns?: string;
  materiaisComplementares?: string;
}

export interface AlternativaData {
  id: number;
  texto: string;
  correta: boolean;
  ordem: number;
}

export interface PerguntaData {
  id: number;
  enunciado: string;
  ordem: number;
  alternativas: AlternativaData[];
}

export interface QuizData {
  id: number;
  titulo: string;
  perguntas: PerguntaData[];
}

export interface AulaData {
  id: number;
  titulo: string;
  descricao: string;
  ordem: number;
  objetivo?: string;
  recursosNecessarios?: string;
  duracaoSugerida?: string;
  slides: SlideData[];
  quiz?: QuizData;
  atividades?: { id: number; titulo: string; descricao: string; arquivoUrl: string }[];
  videos?: { id: number; titulo: string; url: string }[];
  competencias?: string[];
  habilidades?: string[];
}

export interface ModuloData {
  id: number;
  nome: string;
  descricao: string;
  aulas: AulaData[];
}

export interface SerieData {
  id: number;
  nome: string;
  modulos: ModuloData[];
}

export interface CursoData {
  id: number;
  nome: string;
  descricao: string;
  series: SerieData[];
}

export const mockCurso: CursoData = {
  id: 1,
  nome: 'Educação Digital',
  descricao: 'Desenvolver competências relacionadas ao uso consciente, crítico, seguro e produtivo das tecnologias digitais, seguindo as orientações da BNCC para o Ensino Médio.',
  series: [
    {
      id: 1,
      nome: '1º Ano',
      modulos: [
        {
          id: 1,
          nome: 'Introdução à Computação',
          descricao: 'Fundamentos conceituais, histórico e áreas da computação.',
          aulas: [
            {
              id: 101,
              titulo: 'O que é Computação?',
              descricao: 'Apresentação dos conceitos básicos sobre computação e dados. Os alunos entenderão que computar significa calcular e processar, indo muito além de apenas acessar redes sociais ou navegar no celular.',
              ordem: 1,
              objetivo: 'Compreender a diferença entre usar aparelhos digitais e a ciência da Computação, reconhecendo a computação como o processamento sistemático de informações.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar, caderno e caneta.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico', 'Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 102,
              titulo: 'A História da Computação: Da Contagem aos Supercomputadores',
              descricao: 'Um passeio histórico que vai do ábaco e das máquinas mecânicas de calcular ao surgimento do ENIAC, computadores pessoais e o papel fundamental de pioneiros como Ada Lovelace e Grace Hopper.',
              ordem: 2,
              objetivo: 'Reconhecer a evolução histórica das ferramentas de cálculo e processamento até a criação dos computadores modernos, valorizando as contribuições de pioneiros.',
              recursosNecessarios: 'Projetor ou TV para exibição de imagens históricas, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13CHS502'],
              slides: []
            },
            {
              id: 103,
              titulo: 'Como os Computadores Processam: Introdução ao Binário',
              descricao: 'Uma aula prática e desplugada que usa cartões ou lâmpadas desenhadas para demonstrar o sistema binário de maneira visual. Discussão sobre mitos do cotidiano envolvendo computadores.',
              ordem: 3,
              objetivo: 'Compreender o conceito de código binário (0 e 1) e como os computadores representam números, letras e imagens.',
              recursosNecessarios: 'Cartões de papel numerados potências de 2, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13MAT315'],
              slides: []
            },
            {
              id: 104,
              titulo: 'Áreas da Computação e Profissões',
              descricao: 'Uma introdução descomplicada às grandes áreas da computação, desmistificando o mercado de trabalho e mostrando onde os diferentes perfis se encaixam na criação de tecnologia.',
              ordem: 4,
              objetivo: 'Conhecer as subdivisões da ciência da computação (hardware, software, redes, IA, segurança) e a atuação profissional de cada uma.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            }
          ]
        },
        {
          id: 2,
          nome: 'Conhecendo o Computador',
          descricao: 'Componentes de hardware, software, periféricos e preservação ambiental.',
          aulas: [
            {
              id: 105,
              titulo: 'O Corpo e a Mente: Hardware vs. Software',
              descricao: 'Utilizando analogias simples, os alunos entenderão a diferença conceitual e a interdependência entre a parte física e lógica de computadores e smartphones, analisando o ciclo de processamento de dados.',
              ordem: 1,
              objetivo: 'Distinguir os componentes físicos (hardware) das instruções lógicas (software) e compreender o ciclo básico de entrada, processamento e saída.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 106,
              titulo: 'Interagindo com o Computador: Dispositivos de Entrada e Saída',
              descricao: 'Estudo sobre teclados, mouses, microfones, câmeras, monitores e fones de ouvido. Discussão prática sobre o desenvolvimento de periféricos voltados para tecnologias assistivas.',
              ordem: 2,
              objetivo: 'Identificar os dispositivos de entrada e saída, compreendendo seu papel na interação humano-computador e sua relevância para a acessibilidade.',
              recursosNecessarios: 'Periféricos antigos (opcional), projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital', 'Responsabilidade e Cidadania'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 107,
              titulo: 'Armazenamento e Memória: RAM vs. SSD vs. HD',
              descricao: 'Explicação prática sobre como a informação é guardada de forma temporária e permanente. Análise visual de peças físicas e discussões sobre o impacto da evolução da velocidade no uso diário.',
              ordem: 3,
              objetivo: 'Diferenciar a memória de trabalho (RAM) dos dispositivos de armazenamento permanente (HD, SSD e Pendrive), compreendendo suas hierarquias de velocidade.',
              recursosNecessarios: 'Amostras ou fotos de HDs mecânicos e SSDs, projetor ou TV.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 108,
              titulo: 'Preservação, Higiene e Obsolescência Programada',
              descricao: 'Dicas preventivas de limpeza e temperatura de computadores e celulares. Debate sobre a vida útil dos aparelhos, o impacto ambiental da obsolescência programada e descarte correto.',
              ordem: 4,
              objetivo: 'Aprender práticas de conservação física de eletrônicos e refletir criticamente sobre o descarte e o consumismo de tecnologia (lixo eletrônico).',
              recursosNecessarios: 'Quadro escolar, notícias ou folheto sobre lixo eletrônico.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cidadania', 'Trabalho e Projeto de Vida'],
              habilidades: ['EM13CHS602'],
              slides: []
            }
          ]
        },
        {
          id: 3,
          nome: 'Internet',
          descricao: 'Funcionamento técnico da internet, serviços digitais e inclusão social.',
          aulas: [
            {
              id: 109,
              titulo: 'O que é a Internet e Como Ela Surgiu?',
              descricao: 'Desmistificação da internet mostrando os cabos gigantescos submarinos e os data centers ("nuvem") que guardam e processam nossos arquivos, relacionando ao contexto histórico do surgimento das redes.',
              ordem: 1,
              objetivo: 'Compreender a internet como uma rede física global de computadores interconectados e conhecer sua origem e a infraestrutura de nuvem.',
              recursosNecessarios: 'Projetor ou TV para exibição do mapa de cabos submarinos, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 110,
              titulo: 'Navegando na Web: URLs, Navegadores e Pesquisas',
              descricao: 'Explicação de como o navegador traduz código em páginas web. Análise de URLs para segurança e aplicação de truques úteis de motores de busca (aspas, formatos de arquivos) para pesquisas escolares.',
              ordem: 2,
              objetivo: 'Compreender a função dos navegadores de internet, a estrutura básica de um link (URL) e aplicar técnicas avançadas de pesquisa.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Crítico'],
              habilidades: ['EM13LGG704'],
              slides: []
            },
            {
              id: 111,
              titulo: 'Como a Informação Viaja: Roteamento e Serviços Digitais',
              descricao: 'Dinâmica prática de roteamento teatral usando envelopes. Em seguida, análise de serviços de e-mail, mapas, streaming e utilidades públicas digitais (Gov.br).',
              ordem: 3,
              objetivo: 'Entender o conceito de roteamento, pacotes de dados e IPs, e mapear os principais serviços web do cotidiano.',
              recursosNecessarios: 'Papéis e envelopes (dinâmica teatral), projetor ou TV.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 112,
              titulo: 'Inclusão Digital e o Direito à Conexão',
              descricao: 'Discussão sobre as diferenças de conectividade no Brasil (velocidade, franquia e tela) e como a falta de acesso compromete os estudos e oportunidades profissionais.',
              ordem: 4,
              objetivo: 'Refletir criticamente sobre as barreiras socioeconômicas de acesso à internet de qualidade e como a exclusão afeta a cidadania.',
              recursosNecessarios: 'Gráficos e dados sobre inclusão digital (projetados ou impressos).',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13CHS602'],
              slides: []
            }
          ]
        },
        {
          id: 4,
          nome: 'Segurança Digital',
          descricao: 'Estratégias de proteção pessoal, combate a golpes e fake news.',
          aulas: [
            {
              id: 113,
              titulo: 'Chaves Digitais: Senhas Fortes e Privacidade',
              descricao: 'Dinâmica de criação de senhas difíceis de hackear mas fáceis de lembrar. Discussão sobre o valor comercial das informações privadas e configurações de segurança de aplicativos.',
              ordem: 1,
              objetivo: 'Criar senhas pessoais robustas, compreender a verificação em duas etapas e ajustar as restrições de privacidade nas redes sociais.',
              recursosNecessarios: 'Quadro escolar, papel e caneta para rascunhos.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 114,
              titulo: 'Golpes Digitais e Engenharia Social (Phishing)',
              descricao: 'Análise de mensagens reais de golpistas (phishing) e fraudes comuns (PIX agendado, clonagem de contas no WhatsApp). Os alunos aprenderão a buscar pistas de adulterações.',
              ordem: 2,
              objetivo: 'Identificar links, e-mails e mensagens fraudulentas estruturados para roubar dados ou aplicar golpes financeiros cotidianos.',
              recursosNecessarios: 'Prints de mensagens/e-mails suspeitos projetados ou impressos.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Crítico'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 115,
              titulo: 'Desinformação e Combate a Fake News',
              descricao: 'Como as Fake News são escritas para despertar fortes reações emocionais. Passos práticos para checar notícias usando agências de checagem e análise de fontes.',
              ordem: 3,
              objetivo: 'Desenvolver uma postura analítica e crítica para identificar boatos e desinformações nas redes.',
              recursosNecessarios: 'Exemplos de boatos históricos da internet impressos ou projetados.',
              duracaoSugerida: '50 minutos',
              competencias: ['Argumentação', 'Empatia'],
              habilidades: ['EM13LGG704'],
              slides: []
            },
            {
              id: 116,
              titulo: 'Proteção de Dispositivos e Segurança Familiar',
              descricao: 'Cuidados de conexões e concessão de acesso a recursos físicos do celular (câmera, contatos). Trabalho em grupo para criar cartazes informativos com dicas de segurança para familiares.',
              ordem: 4,
              objetivo: 'Aprender os perigos de redes Wi-Fi públicas, gerenciar permissões de apps e planejar cartilhas de orientação digital.',
              recursosNecessarios: 'Papel cartolina, canetas coloridas, tesoura e cola.',
              duracaoSugerida: '50 minutos',
              competencias: ['Empatia e Cooperação'],
              habilidades: ['EM13LGG703'],
              slides: []
            }
          ]
        },
        {
          id: 5,
          nome: 'Cidadania Digital',
          descricao: 'Ética na rede, saúde mental, cyberbullying e direitos autorais.',
          aulas: [
            {
              id: 117,
              titulo: 'Convivência Ética e Netiqueta nas Redes Sociais',
              descricao: 'Reflexão sobre como as redes retêm nossa atenção. Boas práticas de convivência digital, netiqueta para escrita construtiva e como identificar e acolher vítimas de assédio online.',
              ordem: 1,
              objetivo: 'Analisar criticamente as bolhas de informação, os algoritmos de engajamento e combater a violência oculta do Cyberbullying.',
              recursosNecessarios: 'Histórias hipotéticas de conflitos online para debate em grupo.',
              duracaoSugerida: '50 minutos',
              competencias: ['Empatia', 'Comunicação'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 118,
              titulo: 'Autoria na Internet: Direitos Autorais e Plágio',
              descricao: 'Plágio e pirataria na rede e como dar créditos corretos em pesquisas. Introdução a conteúdos livres e às regras simples de licenciamento gratuito para produções autorais.',
              ordem: 2,
              objetivo: 'Compreender as regras de direitos autorais, diferenciar plágio de pesquisa científica e aplicar o licenciamento Creative Commons.',
              recursosNecessarios: 'Exemplos de licenças de uso Creative Commons, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG704'],
              slides: []
            },
            {
              id: 119,
              titulo: 'Pegada Digital e Saúde Mental',
              descricao: 'Debate sobre pegada digital e a análise de redes sociais em processos seletivos. Análise de ansiedade provocada por feeds, luz azul e dependência de curtidas.',
              ordem: 3,
              objetivo: 'Compreender o rastro permanente gerado por publicações digitais e criar estratégias para mitigar a dependência das telas.',
              recursosNecessarios: 'Ficha de autoavaliação sobre tempo de uso de celulares.',
              duracaoSugerida: '50 minutos',
              competencias: ['Autoconhecimento'],
              habilidades: ['EM13CHS602'],
              slides: []
            },
            {
              id: 120,
              titulo: 'Ativismo e Cidadania Ativa Digital',
              descricao: 'Uso de ferramentas web para participação social, como abaixo-assinados digitais, fiscalização de problemas do bairro e mobilização legítima para melhorias escolares.',
              ordem: 4,
              objetivo: 'Identificar formas construtivas de utilizar a internet em prol da sociedade local.',
              recursosNecessarios: 'Projetor ou TV, papel para planejamento de ação social escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13LGG703'],
              slides: []
            }
          ]
        },
        {
          id: 6,
          nome: 'Projeto Final — Minha Primeira Investigação Digital',
          descricao: 'Aplicação prática dos conceitos fundamentais de cidadania digital e investigação.',
          aulas: [
            {
              id: 121,
              titulo: 'Concepção do Projeto e Pesquisa de Opinião',
              descricao: 'Definição dos temas integradores (segurança, fake news, lixo eletrônico, exclusão). Os grupos formulam questionários de pesquisa simples para aplicar a familiares.',
              ordem: 1,
              objetivo: 'Organizar grupos, delimitar um problema digital local e estruturar perguntas para coleta de dados.',
              recursosNecessarios: 'Quadro escolar, folhas de papel e canetas.',
              duracaoSugerida: '50 minutos',
              competencias: ['Repertório Cultural'],
              habilidades: ['EM13CHS502'],
              slides: []
            },
            {
              id: 122,
              titulo: 'Coleta de Dados e Compilação das Respostas',
              descricao: 'Os alunos trazem as pesquisas aplicadas. Discussão e tabulação de dados no caderno para entender as principais dores digitais da vizinhança.',
              ordem: 2,
              objetivo: 'Tabular os resultados colhidos nas pesquisas externas e extrair conclusões estatísticas iniciais.',
              recursosNecessarios: 'Questionários preenchidos, cadernos para tabulação de dados.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 123,
              titulo: 'Planejamento e Confecção do Material',
              descricao: 'Desenvolvimento prático de cartazes ou folhetos informativos usando cartolinas. Organização do texto explicativo de prevenção para que seja direto e atrativo.',
              ordem: 3,
              objetivo: 'Planejar o layout informativo e produzir as peças artísticas físicas da campanha.',
              recursosNecessarios: 'Cartolinas ou papel sulfite, canetas hidrográficas coloridas.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 124,
              titulo: 'Apresentação da Campanha e Feedback',
              descricao: 'Apresentação dos cartazes para a turma. Exposição no mural da escola e debate cooperativo sobre a recepção da comunidade aos temas de Educação Digital.',
              ordem: 4,
              objetivo: 'Expor os materiais produzidos na escola e debater os aprendizados sobre cidadania digital.',
              recursosNecessarios: 'Fitas adesivas, mural escolar ou quadro de exposição.',
              duracaoSugerida: '50 minutos',
              competencias: ['Comunicação'],
              habilidades: ['EM13LGG703'],
              slides: []
            }
          ]
        }
      ]
    },
    {
      id: 2,
      nome: '2º Ano',
      modulos: [
        {
          id: 7,
          nome: 'Hardware na Prática',
          descricao: 'Arquitetura física detalhada de computadores e smartphones.',
          aulas: [
            {
              id: 201,
              titulo: 'A Placa-Mãe e as Conexões do PC',
              descricao: 'Uma explicação visual sobre onde os componentes do computador se encaixam e como as trilhas e os fios (barramentos) transportam energia e dados elétricos de um lugar para o outro.',
              ordem: 1,
              objetivo: 'Conhecer a placa-mãe como a central de interconexão física de todos os dispositivos do computador e barramento de dados.',
              recursosNecessarios: 'Projetor ou TV para fotos de alta resolução de placas-mãe, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 202,
              titulo: 'A Força Bruta de Processamento: A CPU e Refrigeração',
              descricao: 'Explicação de termos técnicos como "núcleos" (cores), velocidade em GHz e cooler para manter o chip funcionando sem travar.',
              ordem: 2,
              objetivo: 'Entender a função profunda do processador, fatores que definem o seu rendimento básico e a importância da dissipação de calor.',
              recursosNecessarios: 'Projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 203,
              titulo: 'Memórias e Armazenamento: RAM vs. SSD vs. HD',
              descricao: 'Análise prática de como a transição de HDs para SSDs mudou a velocidade de inicialização do sistema e de aplicativos, mostrando a hierarquia e taxas de velocidade de cada memória.',
              ordem: 3,
              objetivo: 'Compreender a diferença de velocidade e funcionalidade entre os tipos de memórias no acesso diário de arquivos.',
              recursosNecessarios: 'Amostras ou fotos de HDs mecânicos e SSDs, projetor ou TV.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 204,
              titulo: 'GPU, Energia e Diagnósticos de Problemas',
              descricao: 'Placas dedicadas vs. integradas. Fonte de alimentação e energia estável. Como diagnosticar problemas de superaquecimento ou memória a partir de sons (apitos) ou desligamento repentino.',
              ordem: 4,
              objetivo: 'Compreender a função da placa de vídeo (GPU), fontes de alimentação e identificar defeitos físicos simples.',
              recursosNecessarios: 'Quadro escolar, projetor ou TV.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            }
          ]
        },
        {
          id: 8,
          nome: 'Sistemas Operacionais e Softwares',
          descricao: 'Gerenciamento de softwares, interfaces de usuários e extensões de arquivos.',
          aulas: [
            {
              id: 205,
              titulo: 'O Maestro Virtual: SO e Interfaces (Windows vs. Linux)',
              descricao: 'O papel do SO em organizar a memória, tarefas e programas. Comparativo de filosofias, segurança e gratuidade de sistemas Windows e Linux.',
              ordem: 1,
              objetivo: 'Compreender o Sistema Operacional como o programa principal que traduz as ações do usuário em controle do hardware, e diferenciar interfaces comerciais de código aberto.',
              recursosNecessarios: 'Capturas de tela das áreas de trabalho dos sistemas Windows e Linux projetadas.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13CHS502'],
              slides: []
            },
            {
              id: 206,
              titulo: 'Sistemas Móveis e Aplicativos',
              descricao: 'Funcionamento de aparelhos móveis: controle de consumo de bateria, atualizações de aplicativos em segundo plano e a importância do download em fontes seguras.',
              ordem: 2,
              objetivo: 'Reconhecer a arquitetura dos sistemas operacionais de celulares (Android e iOS), o papel de lojas oficiais e gerência de processos.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 207,
              titulo: 'Arquivos, Pastas e Instalação de Programas',
              descricao: 'A diferença entre arquivos executáveis (.exe, .deb, .apk) e pastas comuns. Exercício de organização de arquivos em estrutura em árvore para fins escolares.',
              ordem: 3,
              objetivo: 'Compreender a lógica de instalação de programas, identificar extensões de arquivos (.docx, .pdf, .png) e organizar diretórios lógicos.',
              recursosNecessarios: 'Quadro escolar, projetor ou TV.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG704'],
              slides: []
            },
            {
              id: 208,
              titulo: 'Manutenção Preventiva e Nuvem',
              descricao: 'Limpeza lógica de arquivos temporários, desinstalação de programas inúteis e a apresentação de sistemas operacionais focados na web (como o ChromeOS).',
              ordem: 4,
              objetivo: 'Reconhecer a importância das atualizações de segurança do sistema e o conceito de sistemas operacionais baseados na nuvem.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            }
          ]
        },
        {
          id: 9,
          nome: 'Pensamento Computacional',
          descricao: 'Os quatro pilares da lógica computacional e fluxogramas.',
          aulas: [
            {
              id: 209,
              titulo: 'Introdução ao Pensamento Computacional e Decomposição',
              descricao: 'Introdução ao Pensamento Computacional. Dinâmica cooperativa: desmembrar problemas ou projetos complexos (como organizar um festival escolar) em pequenas etapas resolvíveis.',
              ordem: 1,
              objetivo: 'Conhecer a importância do raciocínio lógico no planejamento de soluções e aplicar o pilar da decomposição.',
              recursosNecessarios: 'Fichas de tarefas impressas, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 210,
              titulo: 'Reconhecimento de Padrões e Abstração',
              descricao: 'Padrões lúdicos no cotidiano para reutilizar soluções. Exercício prático de abstração usando mapas de trânsito simplificados e seleção de dados fundamentais.',
              ordem: 2,
              objetivo: 'Identificar repetições ou semelhanças em dados e focar em informações úteis eliminando detalhes desnecessários.',
              recursosNecessarios: 'Mapas de metrô ou textos detalhados para exercício em folha.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13MAT315'],
              slides: []
            },
            {
              id: 211,
              titulo: 'Criando Roteiros Lógicos: Algoritmos no Cotidiano',
              descricao: 'Escrita de receitas lógicas e comandos sequenciais (como o algoritmo exato para amarrar o sapato ou desenhar no papel), desafiando colegas a seguirem à risca as instruções.',
              ordem: 3,
              objetivo: 'Desenvolver sequências estruturadas de passos de forma clara e linear, sem ambiguidades.',
              recursosNecessarios: 'Papel e caneta para escrita dos passos lógicos.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 212,
              titulo: 'Fluxogramas e Desafios de Lógica Desplugada',
              descricao: 'Uso de caixas de início, ação, decisões (Sim/Não) e fim. Competição cooperativa de desafios e charadas matemáticas desplugadas de forma lógica e rápida.',
              ordem: 4,
              objetivo: 'Representar graficamente fluxos de decisões lógicas por meio de blocos geométricos e resolver enigmas aplicando os quatro pilares.',
              recursosNecessarios: 'Quadro escolar, folhas com enigmas impressos.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico', 'Cooperação'],
              habilidades: ['EM13MAT315'],
              slides: []
            }
          ]
        },
        {
          id: 10,
          nome: 'Tecnologia para Estudo e Trabalho',
          descricao: 'Uso produtivo e colaborativo de ferramentas de texto, planilha e slides.',
          aulas: [
            {
              id: 213,
              titulo: 'Edição e Formatação de Textos Acadêmicos',
              descricao: 'Estruturação de um documento: margens, espaçamentos, títulos, sumários e como referenciar fontes bibliográficas de forma limpa em processadores de texto.',
              ordem: 1,
              objetivo: 'Formatar relatórios e textos escolares seguindo diretrizes estruturais básicas de digitação (ABNT).',
              recursosNecessarios: 'Projetor ou TV com editor de texto aberto para demonstração das ferramentas.',
              duracaoSugerida: '50 minutos',
              competencias: ['Comunicação'],
              habilidades: ['EM13LGG704'],
              slides: []
            },
            {
              id: 214,
              titulo: 'Planilhas Eletrônicas e Visualização de Dados',
              descricao: 'Introdução ao uso de tabelas digitais para notas escolares e finanças pessoais. Geração de gráficos de pizza, barras e linhas para análises rápidas e eficientes.',
              ordem: 2,
              objetivo: 'Compreender a estrutura de células e fórmulas aritméticas simples (soma, média) e converter dados numéricos em gráficos explicativos.',
              recursosNecessarios: 'Projetor ou TV demonstrando planilha aberta, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13MAT315'],
              slides: []
            },
            {
              id: 215,
              titulo: 'Design de Apresentações de Slides',
              descricao: 'Regras básicas de contraste de cores, tamanho de fontes legíveis, uso de tópicos pontuais, inserção de imagens explicativas e técnicas corporais básicas de apresentação de ideas.',
              ordem: 3,
              objetivo: 'Projetar apresentações visuais harmônicas e equilibradas, fugindo do excesso de textos.',
              recursosNecessarios: 'Exemplos de slides bons e ruins projetados.',
              duracaoSugerida: '50 minutos',
              competencias: ['Comunicação', 'Repertório Cultural'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 216,
              titulo: 'Trabalho Coletivo, Calendários e Portfólio',
              descricao: 'Armazenamento e comentários compartilhados online. Uso prático de agendas eletrônicas e listas de tarefas. Compilação de relatórios e fotos em pastas digitais estruturadas.',
              ordem: 4,
              objetivo: 'Editar documentos em nuvem colaborativamente, gerenciar prazos em agendas virtuais e montar portfólios organizados de atividades do ano.',
              recursosNecessarios: 'Projetor ou TV, quadro, computador de demonstração.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13LGG703'],
              slides: []
            }
          ]
        },
        {
          id: 11,
          nome: 'Produção Digital',
          descricao: 'Criação e edição básica de mídias de vídeo, áudio, podcasts e imagens.',
          aulas: [
            {
              id: 217,
              titulo: 'Comunicação Visual e Editores Gráficos',
              descricao: 'Fundamentos de design de cartaz: posicionamento de elementos, paleta de cores harmoniosa, seleção de imagens de boa qualidade e escrita de chamadas textuais curtas e chamativas.',
              ordem: 1,
              objetivo: 'Criar peças visuais básicas (cartazes e banners) utilizando ferramentas online e gratuitas de design.',
              recursosNecessarios: 'Projetor ou TV, celulares dos alunos (se permitido) ou atividade com recortes.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 218,
              titulo: 'Planejamento, Gravação e Edição de Vídeo',
              descricao: 'Elaboração de roteiro de 2 minutos. Como usar iluminação solar caseira. Uso de aplicativos mobile gratuitos de corte e legendagem de vídeos.',
              ordem: 2,
              objetivo: 'Estruturar roteiros simples de vídeo explicativo, aplicar enquadramentos de celular e dominar edições básicas de corte e transição.',
              recursosNecessarios: 'Celular com app de edição instalado (opcional), papel para roteiro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 219,
              titulo: 'Planejamento e Edição de Áudio (Podcasts)',
              descricao: 'Estrutura dinâmica de perguntas e vinhetas. Gravação limpa de som no celular. Ajustes de volume de voz em relação à música de fundo em aplicativos.',
              ordem: 3,
              objetivo: 'Compreender o formato de podcast, planejar roteiros de entrevistas e editar trilhas e vozes.',
              recursosNecessarios: 'Amostra de áudio de podcast educacional, projetor ou TV.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 220,
              titulo: 'Direitos Autorais, Imagem e Curadoria Ética',
              descricao: 'Proteção e compartilhamento legal de vídeos escolares. Cuidados de privacidade em relação a rostos alheios. Como comentar e compartilhar indicações de conteúdo na rede.',
              ordem: 4,
              objetivo: 'Publicar produções em Creative Commons de forma ética, respeitando imagens alheias e realizando curadorias informativas de links.',
              recursosNecessarios: 'Quadro escolar, ilustrações das regras Creative Commons.',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13LGG704'],
              slides: []
            }
          ]
        },
        {
          id: 12,
          nome: 'Projeto Final — Resolução de Problemas no Cotidiano',
          descricao: 'Resolução de problemas do cotidiano escolar aplicando lógica computacional.',
          aulas: [
            {
              id: 221,
              titulo: 'Identificação de Gargalos e Modelagem Lógica',
              descricao: 'Mapeamento de problemas cotidianos da escola (filas, biblioteca, salas de estudo). Os grupos rascunham o fluxo de ação e decisões para otimizá-lo.',
              ordem: 1,
              objetivo: 'Identificar gargalos da rotina escolar, escolher o tema integrador e modelar o fluxo lógico da solução.',
              recursosNecessarios: 'Quadro escolar, cadernos e lápis.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13MAT315'],
              slides: []
            },
            {
              id: 222,
              titulo: 'Prototipação em Papel das Interfaces (Wireframes)',
              descricao: 'Desenvolvimento prático das telas. Como o usuário veria as informações? Rascunhos de botões, formulários e textos explicativos utilizando cartões de cartolina ou papel sulfite.',
              ordem: 2,
              objetivo: 'Desenhar de forma desplugada as telas de um aplicativo fictício ou os cartazes de fluxo para os usuários.',
              recursosNecessarios: 'Papel sulfite, lápis, canetas, tesouras e réguas.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 223,
              titulo: 'Projeção de Dados e Conclusão Artística',
              descricao: 'Cálculos fictícios de tempos e recursos economizados na escola com o projeto. Finalização dos livretos ou cartazes contendo a identidade do trabalho.',
              ordem: 3,
              objetivo: 'Tabular dados estatísticos dos benefícios projetados da solução e concluir o material demonstrativo físico.',
              recursosNecessarios: 'Cartolinas, marcadores, réguas e calculadoras.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13MAT315'],
              slides: []
            },
            {
              id: 224,
              titulo: 'O Pitch do Projeto: Apresentação para a Turma',
              descricao: 'Apresentação dinâmica das ideias simulando pitches corporativos de utilidade escolar. A sala debate a viabilidade e sugere melhorias aos grupos.',
              ordem: 4,
              objetivo: 'Comunicar a ideia do projeto de forma sucinta (pitch de 3 minutos) e receber feedback construtivo dos colegas.',
              recursosNecessarios: 'Cronômetro de tempo de apresentação, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Comunicação'],
              habilidades: ['EM13LGG703'],
              slides: []
            }
          ]
        }
      ]
    },
    {
      id: 3,
      nome: '3º Ano',
      modulos: [
        {
          id: 13,
          nome: 'Inteligência Artificial',
          descricao: 'Histórico, Machine Learning, IA Generativa e dilemas éticos da automação.',
          aulas: [
            {
              id: 301,
              titulo: 'O Despertar da IA: Histórico e Conceito Básico',
              descricao: 'Apresentação da IA, diferenciando robôs de filmes de ficção científica de sistemas lógicos reais baseados em algoritmos matemáticos complexos. Apresentação do clássico teste de Turing.',
              ordem: 1,
              objetivo: 'Compreender o que define a Inteligência Artificial e conhecer momentos marcantes do seu surgimento científico.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 302,
              titulo: 'Como as Máquinas Aprendem: Machine Learning e Redes Sociais',
              descricao: 'Como dados históricos são usados para treinar sistemas sem código rígido. Discussão prática sobre a captura de curtidas e tempo de visualização de telas que retroalimentam algoritmos.',
              ordem: 2,
              objetivo: 'Compreender conceitualmente o aprendizado de máquina a partir de dados e mapear as aplicações de recomendação invisíveis nas redes sociais.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13MAT315'],
              slides: []
            },
            {
              id: 303,
              titulo: 'Inteligência Artificial Generativa e Prompting',
              descricao: 'A geração automatizada de conhecimento e o funcionamento de grandes redes. Como conversar com a IA usando instruções ricas e a importância de supervisionar dados inventados.',
              ordem: 3,
              objetivo: 'Entender o funcionamento de modelos geradores de textos/imagens, aprender a redigir instruções eficazes (prompts) e prever alucinações das ferramentas.',
              recursosNecessarios: 'Celulares dos alunos (se permitido), projetor de demonstração.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG704'],
              slides: []
            },
            {
              id: 304,
              titulo: 'Ética, Vieses de Dados e o Futuro do Trabalho',
              descricao: 'Debate sobre erros em identificação facial ou seleções de emprego gerados por dados enviesados históricos. Mapeamento das tarefas humanas que tendem a ser automatizadas e as novas carreiras.',
              ordem: 4,
              objetivo: 'Analisar preconceitos algorítmicos em decisões automatizadas e refletir sobre a transição profissional devido à automação.',
              recursosNecessarios: 'Casos jornalísticos impressos ou projetados sobre erros algorítmicos.',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13CHS502'],
              slides: []
            }
          ]
        },
        {
          id: 14,
          nome: 'Desenvolvimento de Soluções Digitais',
          descricao: 'Ciclo de vida de software, conceitos básicos de web e plataformas no-code.',
          aulas: [
            {
              id: 305,
              titulo: 'O Ciclo de Desenvolvimento de Software',
              descricao: 'Uma explicação voltada à gestão de projetos. Os estudantes entenderão que programar é apenas uma das etapas da criação de um produto digital útil e funcional.',
              ordem: 1,
              objetivo: 'Conhecer o ciclo de vida do desenvolvimento de um programa (análise de problemas, design, programação, testes e sustentação).',
              recursosNecessarios: 'Projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 306,
              titulo: 'O Esqueleto da Web e Aplicativos Móveis',
              descricao: 'A analogia das paredes da casa (HTML), pintura (CSS) e lógica elétrica (JS). Como celulares (clientes) se comunicam com servidores distantes para carregar dados de telas de forma dinâmica.',
              ordem: 2,
              objetivo: 'Entender conceitualmente a função de HTML, CSS e JavaScript e a arquitetura cliente-servidor (front-end e back-end).',
              recursosNecessarios: 'Quadro escolar, projetor ou TV.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 307,
              titulo: 'Equipes de Tecnologia e Metodologias Ágeis',
              descricao: 'Apresentação de profissionais de UX/UI, gerentes de produto, desenvolvedores e QAs. Dinâmica de estruturação de quadro Kanban físico ("A Fazer", "Fazendo", "Feito") usando post-its.',
              ordem: 3,
              objetivo: 'Conhecer os diferentes papéis de especialistas de TI e organizar tarefas de grupo em quadros ágeis (Kanban).',
              recursosNecessarios: 'Notas autoadesivas coloridas (post-its) ou fita crepe, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 308,
              titulo: 'Criação Rápida de Soluções com No-Code',
              descricao: 'Demonstração de construtores visuais de blogs e sites gratuitos. Reflexão sobre como essas tecnologias abrem portas para o empreendedorismo social rápido e de baixo custo.',
              ordem: 4,
              objetivo: 'Conhecer o potencial de ferramentas visuais sem código para validação ágil de páginas informativas e portfólios.',
              recursosNecessarios: 'Projetor ou TV demonstrando ferramentas visuais de criação de sites.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13LGG703'],
              slides: []
            }
          ]
        },
        {
          id: 15,
          nome: 'Segurança da Informação',
          descricao: 'Leis de proteção de dados (LGPD), engenharia social, malwares e backup.',
          aulas: [
            {
              id: 309,
              titulo: 'Dados Pessoais, Privacidade e a LGPD',
              descricao: 'A economia dos dados e anúncios direcionados de serviços gratuitos. Estudo dos direitos de exclusão de dados e da finalidade do consentimento de cookies nos sites.',
              ordem: 1,
              objetivo: 'Compreender o valor financeiro das informações pessoais no mercado de anúncios digitais e os direitos assegurados pela LGPD.',
              recursosNecessarios: 'Trechos simplificados e explicados da LGPD (impressos ou projetados).',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13CHS502'],
              slides: []
            },
            {
              id: 310,
              titulo: 'Engenharia Social, Phishing e Defesas',
              descricao: 'Senhas fortes combinadas com códigos de segurança (2FA). A engenharia social baseada em senso de urgência falsa e o combate a iscas digitais que induzem à entrega voluntária de acessos.',
              ordem: 2,
              objetivo: 'Identificar táticas de manipulação psicológica usadas em fraudes e aplicar chaves de dupla autenticação.',
              recursosNecessarios: 'Transcrições ou áudios de golpes digitais reais.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Crítico'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 311,
              titulo: 'Ameaças Virtuais (Malwares) e Criptografia',
              descricao: 'O perigo de vírus, cavalos de troia e ransomwares (sequestro de arquivos). Como chaves públicas e privadas protegem transações e o tráfego em redes de Wi-Fi públicas via cadeado do navegador.',
              ordem: 3,
              objetivo: 'Classificar softwares maliciosos comuns e compreender conceitualmente o papel da criptografia.',
              recursosNecessarios: 'Envelopes e chaves físicas de demonstração lógica, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Crítico'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 312,
              titulo: 'Rotinas de Backup e Planos de Emergência',
              descricao: 'Cópias seguras em mídias e nuvens diferentes. Elaboração de um manual do que fazer ao ter contas clonadas: boletim de ocorrência online, contato com bancos e notificação a familiares.',
              ordem: 4,
              objetivo: 'Aplicar a regra do backup seguro 3-2-1 e estruturar um roteiro prático de contingência em caso de roubo de dados.',
              recursosNecessarios: 'Ficha estruturada para preenchimento do plano de emergência, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13LGG703'],
              slides: []
            }
          ]
        },
        {
          id: 16,
          nome: 'Tecnologia e Sociedade',
          descricao: 'Efeitos socioculturais da automação, deepfakes, sustentabilidade e dependência digital.',
          aulas: [
            {
              id: 313,
              titulo: 'Inclusão Digital e Sustentabilidade Ecológica',
              descricao: 'Dificuldade de acesso a serviços públicos. A pegada de carbono de servidores de IA e streamings e o perigo do lixo eletrônico tóxico (chumbo/mercúrio) em aterros locais.',
              ordem: 1,
              objetivo: 'Debater as dificuldades da exclusão digital e o impacto energético/ambiental gerado por computadores e descarte.',
              recursosNecessarios: 'Infográficos ambientais de tecnologia e dados de exclusão.',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13CHS602'],
              slides: []
            },
            {
              id: 314,
              titulo: 'Saúde Mental e Dependência Tecnológica',
              descricao: 'O vício invisível de telas e likes. Discussão aberta sobre FOMO, insônia e ansiedade motivada pela comparação constante nas redes de influenciadores, aplicando regras de autocontrole.',
              ordem: 2,
              objetivo: 'Avaliar o impacto das notificações, loops de dopamina das redes e propor hábitos equilibrados de desconexão.',
              recursosNecessarios: 'Quadro escolar, folhas para relatos anônimos da turma.',
              duracaoSugerida: '50 minutos',
              competencias: ['Autoconhecimento'],
              habilidades: ['EM13CHS602'],
              slides: []
            },
            {
              id: 315,
              titulo: 'Deepfakes, Desinformação e Vieses Automatizados',
              descricao: 'Deepfakes criminosas e formas de detectá-las. Análise de sistemas automáticos que decidem financiamentos ou sentenças judiciais sem auditorias ou explicações humanas claras.',
              ordem: 3,
              objetivo: 'Reconhecer manipulações visuais e sonoras complexas criadas por IAs e os riscos decorrentes para a democracia e imagem de pessoas comuns.',
              recursosNecessarios: 'Imagens ou vídeos manipulados para análise de imperfeições.',
              duracaoSugerida: '50 minutos',
              competencias: ['Argumentação'],
              habilidades: ['EM13LGG704'],
              slides: []
            },
            {
              id: 316,
              titulo: 'Leis Digitais e a Governança das Redes',
              descricao: 'As leis brasileiras relativas a crimes cibernéticos de invasão. Discussão sobre a responsabilidade de plataformas em combater discursos nocivos sem infringir a liberdade de expressão.',
              ordem: 4,
              objetivo: 'Conhecer o Marco Civil da Internet no Brasil, a Lei Carolina Dieckmann e os debates democráticos sobre regulação das mídias.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13CHS502'],
              slides: []
            }
          ]
        },
        {
          id: 17,
          nome: 'Profissões em Tecnologia',
          descricao: 'Mapeamento de carreiras em TI, formação acadêmica e mercado de trabalho.',
          aulas: [
            {
              id: 317,
              titulo: 'Mapeando os Cursos de TI (Computação, Software e Sistemas)',
              descricao: 'Comparativo simples de Ciência da Computação (foco em algoritmos/pesquisa), Engenharia de Software (processos de criação de código e projetos) e Sistemas de Informação (gestão tecnológica).',
              ordem: 1,
              objetivo: 'Compreender as diferenças curriculares e atuações profissionais de graduações em TI.',
              recursosNecessarios: 'Projetor ou TV, grades curriculares resumidas no quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13CHS602'],
              slides: []
            },
            {
              id: 318,
              titulo: 'Interfaces e Infraestrutura: UX/UI, Redes e Cibersegurança',
              descricao: 'O design focado em empatia e acessibilidade de cores e telas. O trabalho crítico de manter servidores no ar e protegidos contra invasores externos corporativos.',
              ordem: 2,
              objetivo: 'Conhecer a rotina profissional de designers de experiência de usuário e de administradores/defensores de redes de computadores.',
              recursosNecessarios: 'Exemplos de layouts responsivos projetados, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13CHS602'],
              slides: []
            },
            {
              id: 319,
              titulo: 'O Mundo dos Dados e IA: Ciência de Dados e Engenharia de IA',
              descricao: 'O trabalho de cientistas de dados gerando estatísticas preditivas para medicina ou comércio. Novas carreiras de treinamento e refino de modelos de Inteligência Artificial.',
              ordem: 3,
              objetivo: 'Compreender as novas carreiras de análise de grandes volumes de informações, prompt engineering e modelagem inteligente de algoritmos.',
              recursosNecessarios: 'Projetor ou TV, gráficos estatísticos corporativos.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13MAT315'],
              slides: []
            },
            {
              id: 320,
              titulo: 'Portfólio e Educação Continuada',
              descricao: 'Como o profissional de tecnologia se mantém atualizado. Apresentação de plataformas públicas de exibição de projetos pessoais para contratação profissional futura.',
              ordem: 4,
              objetivo: 'Planejar passos de desenvolvimento profissional, conhecendo cursos livres, certificações técnicas e formas de divulgar conhecimentos.',
              recursosNecessarios: 'Exemplos de páginas de portfólios acadêmicos e técnicos projetados.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13CHS602'],
              slides: []
            }
          ]
        },
        {
          id: 18,
          nome: 'Projeto Final — Cidadão Digital e Soluções Tecnológicas',
          descricao: 'Modelagem, ética e prototipagem de uma solução digital para impacto social.',
          aulas: [
            {
              id: 321,
              titulo: 'Concepção de Projetos Sociais Tecnológicos',
              descricao: 'Formação dos grupos e rascunho de soluções tecnológicas de utilidade pública baseadas em problemas reais da própria vizinhança ou escola.',
              ordem: 1,
              objetivo: 'Escolher um problem ético, ecológico ou de inclusão digital da comunidade local para propor uma solução de utilidade pública.',
              recursosNecessarios: 'Quadro escolar, folhas de papel e canetas.',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13CHS602'],
              slides: []
            },
            {
              id: 322,
              titulo: 'Fluxograma e Arquitetura da Solução',
              descricao: 'Desenho no papel cartolina de fluxogramas funcionais completos que detalham o caminho exato de funcionamento da solução idealizada pelo grupo.',
              ordem: 2,
              objetivo: 'Esquematizar de forma detalhada o fluxo de dados (entrada, processamento, saída) e as decisões lógicas do projeto.',
              recursosNecessarios: 'Papel cartolina, réguas e marcadores coloridos.',
              duracaoSugerida: '50 minutos',
              competencias: ['Trabalho e Projeto de Vida'],
              habilidades: ['EM13LGG703'],
              slides: []
            },
            {
              id: 323,
              titulo: 'Viabilidade Ética, Legal (LGPD) e Acessibilidade',
              descricao: 'Debate de segurança de dados: onde as informações ficam guardadas? Como o usuário pede a exclusão? Adaptação de contrastes e recursos táteis no projeto.',
              ordem: 3,
              objetivo: 'Analisar a conformidade legal do projeto com a LGPD e desenhar soluções para usuários com deficiência auditiva ou visual.',
              recursosNecessarios: 'Ficha de checklist ético legal, quadro.',
              duracaoSugerida: '50 minutos',
              competencias: ['Responsabilidade e Cidadania'],
              habilidades: ['EM13CHS502'],
              slides: []
            },
            {
              id: 324,
              titulo: 'Criação de Protótipo e Feira Tecnológica',
              descricao: 'Elaboração de telas mobile interativas desenhadas. Exposição final de cartazes simulando fluxos de serviço para a comunidade escolar e colegas de classe.',
              ordem: 4,
              objetivo: 'Produzir protótipos de papel de telas de simulação e expor os trabalhos em feira de ciências.',
              recursosNecessarios: 'Cartolinas, tesouras, cola e fitas adesivas para fixação.',
              duracaoSugerida: '50 minutos',
              competencias: ['Comunicação'],
              habilidades: ['EM13LGG703'],
              slides: []
            }
          ]
        }
      ]
    }
  ]
};

export const getAulaById = (id: number): AulaData | undefined => {
  for (const serie of mockCurso.series) {
    for (const modulo of serie.modulos) {
      const aula = modulo.aulas.find(a => a.id === id);
      if (aula) {
        // Se a aula não tiver slides ou quiz definidos, povoamos de forma mockada dinâmica
        if (!aula.slides || aula.slides.length === 0) {
          if (id === 101) {
            aula.slides = [
              {
                id: 1011,
                titulo: "Bem-vindo ao EduComp!",
                conteudo: "Hoje iniciaremos nossa jornada pelo fascinante mundo da Computação!\n\n**Pergunta rápida para aquecer:** O que vem à sua mente quando você escuta a palavra 'Computação'? \n\nSerá que é apenas mexer no celular, usar redes sociais ou jogar videogame? Vamos descobrir que existe um universo invisível e incrível por trás das telas!",
                ordem: 1,
                objetivo: "Acolher a turma e problematizar a diferença entre usar tecnologia e entender a computação.",
                tempoEstimado: 5
              },
              {
                id: 1012,
                titulo: "O que significa 'Computar'?",
                conteudo: "A palavra **computar** vem do latim e significa simplesmente **calcular**, **contar** ou **avaliar**.\n\nAntigamente, antes de existirem as máquinas elétricas, 'computadores' eram **pessoas** contratadas para passar o dia inteiro fazendo cálculos matemáticos complexos no papel! \n\nHoje, o computador físico faz isso em bilionésimos de segundo.",
                ordem: 2,
                objetivo: "Apresentar a etimologia da palavra computar e o contexto histórico da computação.",
                tempoEstimado: 5
              },
              {
                id: 1013,
                titulo: "Dados vs. Informação",
                conteudo: "Existe uma grande diferença entre esses dois conceitos:\n\n- **Dados**: São elementos soltos, brutos e sem significado próprio. Exemplo: O número '38'.\n- **Informação**: É quando organizamos e damos contexto a esses dados. Exemplo: 'A temperatura atual é de 38°C'. \n\nA Computação é a ciência que estuda como transformar dados brutos em informações úteis automaticamente.",
                ordem: 3,
                objetivo: "Ensinar a diferença crucial entre dados e informações no processamento computacional.",
                tempoEstimado: 5
              },
              {
                id: 1014,
                titulo: "Os Três Passos Mágicos",
                conteudo: "Toda e qualquer tarefa realizada por um sistema de computação segue rigorosamente estes três passos:\n\n1. **Entrada (Input)**: Os dados entram no sistema (ex: você digita uma letra no teclado).\n2. **Processamento**: O computador faz os cálculos e processa a ação.\n3. **Saída (Output)**: O resultado é exibido (ex: a letra aparece na tela).",
                ordem: 4,
                objetivo: "Apresentar o ciclo básico de processamento de dados (entrada, processamento e saída).",
                tempoEstimado: 5
              },
              {
                id: 1015,
                titulo: "A Analogia da Cozinha",
                conteudo: "Pense no ciclo de processamento como a receita de um bolo:\n\n- **Entrada**: Os ingredientes brutos (farinha, ovos, açúcar) que você coloca na mesa.\n- **Processamento**: O ato de misturar os ingredientes e assar no forno seguindo a receita.\n- **Saída**: O bolo quentinho pronto para comer!\n\nNa computação, a 'receita' que o cozinheiro segue é o que chamamos de **programa** ou **algoritmo**.",
                ordem: 5,
                objetivo: "Fixar o ciclo de processamento usando uma analogia cotidiana memorável.",
                tempoEstimado: 5
              },
              {
                id: 1016,
                titulo: "Hardware vs. Software",
                conteudo: "Todo sistema computacional é dividido em duas partes fundamentais:\n\n- **Hardware**: É a parte física que você consegue tocar. As placas, fios, tela, carcaça e botões.\n- **Software**: É a parte lógica que você não toca, mas interage. São os programas, sistemas e aplicativos (como o Instagram, jogos ou o Windows).\n\n**O hardware é o corpo; o software é a mente.**",
                ordem: 6,
                objetivo: "Diferenciar hardware de software e explicar a interdependência entre eles.",
                tempoEstimado: 5
              },
              {
                id: 1017,
                titulo: "O que NÃO é Computação?",
                conteudo: "Vamos desmistificar algumas coisas!\nA Ciência da Computação **NÃO** se resume a:\n\n- Saber consertar computadores ou formatar celulares.\n- Ser bom em jogos de computador ou passar o dia em redes sociais.\n- Apenas escrever linhas de código (isso é programação, que é só uma ferramenta).\n\nComputação é a ciência sobre **resolver problemas humanos usando a lógica e a tecnologia**.",
                ordem: 7,
                objetivo: "Desmistificar estereótipos comuns da área e ampliar a visão sobre a Ciência da Computação.",
                tempoEstimado: 5
              },
              {
                id: 1018,
                titulo: "O que é um Algoritmo?",
                conteudo: "Um **algoritmo** é apenas uma **sequência de instruções passo a passo, claras e sem ambiguidades**, criada para resolver um problema ou realizar uma tarefa.\n\n**Algoritmos do dia a dia:**\n- A receita de bolo.\n- As instruções para montar um móvel.\n- O trajeto que você faz para vir à escola.\n\nSe os passos forem seguidos na ordem correta, o problema será resolvido com sucesso.",
                ordem: 8,
                objetivo: "Definir algoritmo de forma simplificada e relacioná-lo com ações do cotidiano.",
                tempoEstimado: 5
              },
              {
                id: 1019,
                titulo: "Desafio do Robô (Mão na Massa)",
                conteudo: "Vamos fazer um jogo rápido na sala!\n\nImagine que o professor é um **robô burro** que não sabe fazer nada sozinho, mas entende ordens exatas.\n\n**O desafio:** Em duplas, escrevam no papel um algoritmo detalhado para fazer o robô **'pegar uma caneta da mesa e guardá-la no bolso'**.\n\n*Regra:* O robô segue os passos de forma literal. Se faltar um passo (ex: 'abrir a mão'), o robô falhará!",
                ordem: 9,
                objetivo: "Experimentar a lógica algorítmica e a clareza de instruções de forma prática e desplugada.",
                tempoEstimado: 10
              },
              {
                id: 10110,
                titulo: "Consumidor vs. Criador",
                conteudo: "Para fechar nossa aula de hoje:\n\nQuando você usa um aplicativo ou joga videogame, você é um **consumidor** da computação.\n\nAo aprender a ciência da Computação, você se torna capaz de **criar** novas soluções, jogos, aplicativos e ferramentas para ajudar as pessoas.\n\nA computação é a nova linguagem do mundo. **E vocês estão aqui para aprender a falar essa linguagem!**",
                ordem: 10,
                objetivo: "Concluir a aula estimulando o protagonismo digital e a consciência social da turma.",
                tempoEstimado: 5
              }
            ];
          } else if (id === 102) {
            aula.slides = [
              {
                id: 1021,
                titulo: "A Jornada Através do Tempo",
                conteudo: "Hoje vamos embarcar em uma máquina do tempo da história humana!\n\n**O desafio:** Como você faria para somar números grandes ou organizar contas se não existisse nenhuma calculadora ou celular? \n\nA história da computação é a história de como a humanidade inventou ferramentas para ajudar a nossa mente a calcular coisas cada vez mais rápidas.",
                ordem: 1,
                objetivo: "Despertar a curiosidade e introduzir a linha temporal da evolução tecnológica.",
                tempoEstimado: 5
              },
              {
                id: 1022,
                titulo: "O Ábaco: A Origem de Tudo",
                conteudo: "Inventado há mais de 4.000 anos na Mesopotâmia, o **Ábaco** é considerado a primeira calculadora da humanidade.\n\n- Ele usa pequenas contas de madeira que deslizam em hastes paralelas.\n- Cada haste representa unidades, dezenas ou centenas.\n\nO princípio de usar posições físicas para somar números ainda é a base de como os microchips processam dados hoje!",
                ordem: 2,
                objetivo: "Conceituar o funcionamento do ábaco e sua relevância lógica na representação posicional numérica.",
                tempoEstimado: 5
              },
              {
                id: 1023,
                titulo: "As Máquinas de Engrenagens",
                conteudo: "Durante o Renascimento, inventores criaram máquinas de calcular mecânicas:\n\n- **Pascalina (Blaise Pascal, 1642)**: Usava engrenagens metálicas dentadas (como relógios) para somar e subtrair automaticamente ao girar manivelas.\n- **Calculadora de Leibniz (1671)**: Aperfeiçoou a máquina para também multiplicar e dividir.\n\nA matemática saía do papel e virava engrenagem física!",
                ordem: 3,
                objetivo: "Apresentar as primeiras tentativas mecânicas de automatizar operações aritméticas.",
                tempoEstimado: 5
              },
              {
                id: 1024,
                titulo: "Babbage e Ada: O Sonho do Motor Analítico",
                conteudo: "No século XIX, o matemático **Charles Babbage** projetou a Máquina Analítica, um computador mecânico gigante com memória e leitor de cartões de papel.\n\nA matemática **Ada Lovelace** percebeu o potencial da máquina e escreveu a primeira sequência de instruções lógicas para ela funcionar.\n\nPor isso, **Ada Lovelace é reconhecida como a primeira programadora da história!**",
                ordem: 4,
                objetivo: "Apresentar a Máquina Analítica e destacar o pioneirismo histórico de Ada Lovelace no software.",
                tempoEstimado: 5
              },
              {
                id: 1025,
                titulo: "O Nascimento dos Gigantes: O ENIAC",
                conteudo: "Em 1946, surgiu o **ENIAC**, um dos primeiros computadores totalmente eletrônicos do mundo:\n\n- Ocupava uma sala gigante de 180 metros quadrados (o tamanho de uma casa grande!).\n- Pesava 30 toneladas e continha mais de 17.000 válvulas de vidro quentes.\n- Para ser programado, era necessário conectar cabos físicos em painéis imensos.\n\nEra lento para os padrões de hoje, mas processava em segundos o que humanos levariam semanas.",
                ordem: 5,
                objetivo: "Compreender a escala física e a complexidade operacional dos primeiros computadores a válvula.",
                tempoEstimado: 5
              },
              {
                id: 1026,
                titulo: "Grace Hopper e a Linguagem de Programação",
                conteudo: "Nos anos 50, a cientista **Grace Hopper** revolucionou a computação:\n\n- Criou o primeiro **compilador** (um software que traduz comandos escritos em palavras humanas como 'ADD' ou 'SUB' para a linguagem elétrica binária do computador).\n- Graças a ela, programar ficou muito mais acessível.\n- Popularizou o termo **'bug'** para falhas de sistema.\n\n**Grace Hopper é considerada uma das maiores heroínas do software!**",
                ordem: 6,
                objetivo: "Apresentar o conceito de compilador e homenagear as contribuições cruciais de Grace Hopper.",
                tempoEstimado: 5
              },
              {
                id: 1027,
                titulo: "O Milagre do Silício: Os Transistores",
                conteudo: "A grande virada na tecnologia ocorreu com a invenção do **Transistor** e, depois, do **Circuito Integrado (Chip)**:\n\n- Eles substituíram as válvulas gigantescas de vidro por minúsculos interruptores em chips de silício.\n- Os computadores passaram de gigantescos trambolhos a caixas que cabiam em cima de mesas.\n- Reduziram drasticamente o consumo de energia e o calor gerado.",
                ordem: 7,
                objetivo: "Explicar como o transistor permitiu a miniaturização dos computadores.",
                tempoEstimado: 5
              },
              {
                id: 1028,
                titulo: "Os Computadores Pessoais (PCs)",
                conteudo: "Nos anos 70 e 80, os computadores deixaram de ser exclusivos de governos e universidades e entraram nas casas das pessoas:\n\n- **Steve Jobs e Steve Wozniak**: Criaram o Apple I e Apple II em uma garagem de carros.\n- **IBM PC**: Popularizou o computador em escritórios do mundo inteiro.\n- Surgiram as interfaces visuais com mouses e ícones coloridos, tornando a tecnologia amigável para qualquer cidadão comum.",
                ordem: 8,
                objetivo: "Compreender a popularização dos computadores domésticos nos anos 70 e 80.",
                tempoEstimado: 5
              },
              {
                id: 1029,
                titulo: "Supercomputadores e Celulares de Bolso",
                conteudo: "Hoje a computação se dividiu em dois extremos incríveis:\n\n- **Supercomputadores**: Ocupam salas inteiras e realizam previsões do tempo mundiais, simulações espaciais e pesquisas de novos remédios.\n- **Smartphones**: Computadores de bolso que carregamos conosco todos os dias.\n\n**Comparação surpreendente:** O celular no seu bolso tem milhões de vezes mais poder de cálculo do que todos os computadores que levaram o homem à Lua juntos em 1969!",
                ordem: 9,
                objetivo: "Comparar o poder de processamento atual com as décadas anteriores.",
                tempoEstimado: 5
              },
              {
                id: 10210,
                titulo: "E como será o Futuro?",
                conteudo: "Ao olhar para trás, vemos que a história da computação não para de acelerar:\n\n- Computadores quânticos prometem resolver em minutos problemas que levariam milhares de anos.\n- Inteligências Artificiais estão mudando a forma como aprendemos e trabalhamos.\n\n**O futuro pertence a quem entende essa evolução e usa a tecnologia com ética e responsabilidade para mudar a sociedade!**",
                ordem: 10,
                objetivo: "Concluir a aula provocando reflexões críticas e éticas sobre os rumos futuros da computação.",
                tempoEstimado: 5
              }
            ];
          } else if (id === 103) {
            aula.slides = [
              {
                id: 1031,
                titulo: "O Mundo dos Interruptores",
                conteudo: "Computadores são feitos de eletricidade. Eles não sabem o que são letras ou cores de verdade. Eles entendem apenas dois estados físicos:\n- **Ligado** (energia passando) = representado pelo número **1**.\n- **Desligado** (sem energia) = representado pelo número **0**.",
                ordem: 1,
                objetivo: "Compreender o conceito físico de código binário a partir de interruptores elétricos.",
                tempoEstimado: 10
              },
              {
                id: 1032,
                titulo: "O que é Bit e Byte?",
                conteudo: "- **Bit**: É a menor unidade de informação (um único 0 ou 1).\n- **Byte**: É um grupo de 8 bits juntos (ex: `01000001` representa a letra 'A').\nCada caractere digitado consome exatamente 1 byte de memória.",
                ordem: 2,
                objetivo: "Diferenciar bit e byte e entender a formação de caracteres por agrupamento de estados binários.",
                tempoEstimado: 10
              }
            ];
          } else if (id === 104) {
            aula.slides = [
              {
                id: 1041,
                titulo: "Os Segmentos da Computação",
                conteudo: "A computação não se resume a apenas programar sites. Ela é dividida em grandes áreas:\n- **Hardware**: Criação de componentes físicos e circuitos.\n- **Software**: Desenvolvimento de sistemas operacionais e aplicativos.\n- **Redes**: Comunicação de dados entre computadores.\n- **Segurança**: Proteção de sistemas contra ataques digitais.\n- **Inteligência Artificial**: Algoritmos de aprendizado automático.",
                ordem: 1,
                objetivo: "Mapear as principais divisões científicas e mercadológicas da Computação.",
                tempoEstimado: 10
              },
              {
                id: 1042,
                titulo: "Profissões do Futuro",
                conteudo: "Quem trabalha com computação possui diferentes funções:\n- **Engenheiro de Software**: Desenha e planeja grandes sistemas.\n- **Analista de Segurança**: Protege dados e investiga invasões.\n- **Designer de Interações (UX/UI)**: Garante que os aplicativos sejam fáceis e bonitos de usar.\n- **Cientista de Dados**: Analisa informações para tomar decisões de negócios.",
                ordem: 2,
                objetivo: "Conhecer a variedade de carreiras no mercado de tecnologia da informação.",
                tempoEstimado: 15
              }
            ];
          } else if (id === 105) {
            aula.slides = [
              {
                id: 1051,
                titulo: "Corpo e Mente do Computador",
                conteudo: "- **Hardware**: A parte física que você chuta (placas, cabos, carcaça).\n- **Software**: A parte lógica que você xinga quando trava (programas, sistemas, aplicativos).\nEles são interdependentes: a mente precisa do corpo para agir, e o corpo precisa da mente para ter utilidade.",
                ordem: 1,
                objetivo: "Diferenciar a infraestrutura física da lógica em dispositivos eletrônicos.",
                tempoEstimado: 10
              },
              {
                id: 1052,
                titulo: "O Ciclo do Processamento",
                conteudo: "Toda ação computacional segue três etapas obrigatórias:\n1. **Entrada**: Dados inseridos no sistema (digitação, clique, voz).\n2. **Processamento**: O cálculo realizado pelo processador (CPU).\n3. **Saída**: O resultado visualizado pelo usuário (imagem na tela, som).",
                ordem: 2,
                objetivo: "Compreender o fluxo de informações dentro do ciclo básico de computação.",
                tempoEstimado: 15
              }
            ];
          } else if (id === 201) {
            aula.slides = [
              {
                id: 2011,
                titulo: "A Placa-Mãe e as Estradas de Dados",
                conteudo: "A **Placa-Mãe** é o sistema circulatório do computador. Ela conecta fisicamente o processador, as memórias e todos os periféricos através de trilhas de cobre chamadas de **Barramentos**, que transportam pulsos elétricos.",
                ordem: 1,
                objetivo: "Identificar a placa-mãe como o núcleo de conexões elétricas e tráfego de dados de um computador.",
                tempoEstimado: 15
              }
            ];
          } else if (id === 209) {
            aula.slides = [
              {
                id: 2091,
                titulo: "O que é Pensamento Computacional?",
                conteudo: "Não é pensar como um computador, mas aprender a usar o raciocínio lógico estruturado para resolver problemas complexos das nossas vidas. Ele possui 4 pilares:\n1. **Decomposição**\n2. **Reconhecimento de Padrões**\n3. **Abstração**\n4. **Algoritmos**",
                ordem: 1,
                objetivo: "Conceituar o Pensamento Computacional como ferramenta humana de resolução de problemas.",
                tempoEstimado: 10
              },
              {
                id: 2092,
                titulo: "Pilar 1: Decomposição",
                conteudo: "**Decomposição** é a arte de quebrar um grande problema em pequenas partes menores, focando em resolver uma de cada vez. Problemas menores são muito mais simples de solucionar.",
                ordem: 2,
                objetivo: "Aplicar a técnica de decomposição na divisão de problemas complexos.",
                tempoEstimado: 15
              }
            ];
          } else if (id === 301) {
            aula.slides = [
              {
                id: 3011,
                titulo: "O Despertar da Inteligência Artificial",
                conteudo: "A Inteligência Artificial (IA) busca fazer com que sistemas computacionais consigam simular comportamentos inteligentes de humanos, como aprender, raciocinar e reconhecer padrões de linguagem.",
                ordem: 1,
                objetivo: "Introduzir a definição científica de Inteligência Artificial.",
                tempoEstimado: 10
              },
              {
                id: 3012,
                titulo: "O Teste de Turing",
                conteudo: "Proposto por Alan Turing em 1950, o teste avalia se uma máquina consegue conversar por texto com um humano sem que este perceba que está falando com um computador. Se o humano não conseguir diferenciar, a máquina passou no teste.",
                ordem: 2,
                objetivo: "Compreender a primeira metodologia histórica de avaliação de inteligência de máquinas.",
                tempoEstimado: 15
              }
            ];
          } else {
            aula.slides = [
              {
                id: id * 10 + 1,
                titulo: "Apresentação & Objetivos",
                conteudo: `Bem-vindos à aula de hoje: **${aula.titulo}**.\n\nNesta etapa, vamos explorar como esta aula se conecta com o nosso cotidiano e quais as metas de aprendizado que alcançaremos juntos.`,
                ordem: 1,
                objetivo: "Introduzir a temática geral e motivar o engajamento inicial da turma.",
                tempoEstimado: 5
              },
              {
                id: id * 10 + 2,
                titulo: "Desafio Quebra-Gelo!",
                conteudo: `Vamos começar com um desafio rápido de raciocínio relacionado a **${aula.titulo}**. \n\nObserve o cenário proposto pelo professor e discuta com seus colegas em duplas.`,
                ordem: 2,
                objetivo: "Despertar a curiosidade e ativar conhecimentos prévios de forma lúdica.",
                tempoEstimado: 5
              },
              {
                id: id * 10 + 3,
                titulo: "Compreendendo o Conceito",
                conteudo: `Aqui está a essência de **${aula.titulo}**:\n\n${aula.descricao}\n\nPara facilitar, pense na analogia do cotidiano que o professor irá explicar.`,
                ordem: 3,
                objetivo: "Apresentar a teoria e os conceitos técnicos de forma clara e acessível.",
                tempoEstimado: 10
              },
              {
                id: id * 10 + 4,
                titulo: "Mão na Massa: Atividade Prática",
                conteudo: "Agora é com vocês! Em grupos de 3 a 5 alunos, vamos realizar uma atividade desplugada utilizando papel e caneta.\n\nSiga as instruções e colabore com seu time para construir a solução do desafio proposto.",
                ordem: 4,
                objetivo: "Aplicar o conhecimento adquirido em um desafio cooperativo prático e desplugado.",
                tempoEstimado: 10
              },
              {
                id: id * 10 + 5,
                titulo: "Fechamento & Reflexão Social",
                conteudo: `O que aprendemos hoje sobre **${aula.titulo}**?\n\n* A tecnologia não é neutra: ela afeta a sociedade, o meio ambiente e as nossas vidas.\n* Compreender o mundo digital nos torna cidadãos mais críticos e preparados para o futuro.`,
                ordem: 5,
                objetivo: "Consolidar o aprendizado e estimular a consciência social e ética.",
                tempoEstimado: 5
              }
            ];
          }
        }

        if (!aula.quiz) {
          aula.quiz = {
            id: id * 100,
            titulo: `Quiz de Fixação: ${aula.titulo}`,
            perguntas: [
              {
                id: id * 1000 + 1,
                enunciado: `Sobre a aula de hoje ('${aula.titulo}'), qual alternativa descreve corretamente o seu objetivo principal?`,
                ordem: 1,
                alternativas: [
                  { id: id * 10000 + 1, texto: `Compreender e aplicar os conceitos práticos de ${aula.titulo} no nosso cotidiano digital.`, correta: true, ordem: 1 },
                  { id: id * 10000 + 2, texto: "Decorar códigos complexos in inglês para criar novos sistemas operacionais.", correta: false, ordem: 2 },
                  { id: id * 10000 + 3, texto: "Aprender a formatar o celular e instalar antivírus pirateados no computador.", correta: false, ordem: 3 },
                  { id: id * 10000 + 4, texto: "Apenas navegar em redes sociais e assistir vídeos sem propósitos educativos.", correta: false, ordem: 4 }
                ]
              },
              {
                id: id * 1000 + 2,
                enunciado: `Por que a temática abordada em '${aula.titulo}' é importante para os estudantes do Ensino Médio?`,
                ordem: 2,
                alternativas: [
                  { id: id * 10000 + 5, texto: "Porque nos ajuda a desenvolver pensamento crítico e lógico para resolver problemas complexos da sociedade.", correta: true, ordem: 1 },
                  { id: id * 10000 + 6, texto: "Porque é necessário para poder jogar videogame durante as aulas escolares.", correta: false, ordem: 2 },
                  { id: id * 10000 + 7, texto: "Porque o computador faz tudo sozinho e não precisamos pensar ao usá-lo.", correta: false, ordem: 3 },
                  { id: id * 10000 + 8, texto: "Porque apenas cientistas renomados devem entender de tecnologia.", correta: false, ordem: 4 }
                ]
              },
              {
                id: id * 1000 + 3,
                enunciado: `Ao falar de '${aula.titulo}', qual é um erro ou mito conceitual comum que devemos evitar?`,
                ordem: 3,
                alternativas: [
                  { id: id * 10000 + 9, texto: "Acreditar que tecnologia é mágica ou que não exige planejamento e ética humana.", correta: true, ordem: 1 },
                  { id: id * 10000 + 10, texto: "Saber que computadores usam código binário para processar dados de energia.", correta: false, ordem: 2 },
                  { id: id * 10000 + 11, texto: "Reconhecer que hardware e software dependem um do outro para funcionar.", correta: false, ordem: 3 },
                  { id: id * 10000 + 12, texto: "Entender que algoritmos são instruções sequenciais passo a passo.", correta: false, ordem: 4 }
                ]
              },
              {
                id: id * 1000 + 4,
                enunciado: `Qual a melhor postura ética ao aplicar as noções de '${aula.titulo}' nas redes sociais?`,
                ordem: 4,
                alternativas: [
                  { id: id * 10000 + 13, texto: "Respeitar a autoria das produções, proteger dados privados e combater notícias falsas.", correta: true, ordem: 1 },
                  { id: id * 10000 + 14, texto: "Compartilhar links suspeitos sem verificar a veracidade da fonte.", correta: false, ordem: 2 },
                  { id: id * 10000 + 15, texto: "Utilizar a mesma senha fraca em todas as plataformas para não esquecer.", correta: false, ordem: 3 },
                  { id: id * 10000 + 16, texto: "Copiar textos de sites alheios sem citar os autores (plágio).", correta: false, ordem: 4 }
                ]
              }
            ]
          };
        }

        return aula;
      }
    }
  }
  return undefined;
};
