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
              slides: [
                {
                  id: 1001,
                  titulo: 'Dados vs. Informação',
                  conteudo: 'Os dados são apenas números, letras ou símbolos soltos no mundo. Quando organizamos e damos sentido a esses dados, eles se transformam em informação útil. A Computação estuda como coletar, organizar e processar esses dados de maneira rápida e automática.',
                  ordem: 1,
                  objetivo: 'Diferenciar dados brutos de informação estruturada.',
                  tempoEstimado: 5
                }
              ]
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
      if (aula) return aula;
    }
  }
  return undefined;
};
