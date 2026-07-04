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
              descricao: 'Um passeio histórico que vai do ábaco e das máquinas mecânicas de calcular ao surgimento dos primeiros computadores eletrônicos (como o ENIAC) e a popularização dos computadores pessoais.',
              ordem: 2,
              objetivo: 'Reconhecer a evolução histórica das ferramentas de cálculo e processamento até a criação dos computadores modernos.',
              recursosNecessarios: 'Projetor ou TV para exibição de imagens históricas, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13CHS502'],
              slides: []
            },
            {
              id: 103,
              titulo: 'Onde a Computação Está Presente?',
              descricao: 'Análise do cotidiano para descobrir microcomputadores em eletrodomésticos, carros, semáforos e caixas eletrônicos, mostrando que a computação não está apenas em notebooks e celulares.',
              ordem: 3,
              objetivo: 'Identificar sistemas computacionais embarcados em aparelhos de uso diário, percebendo a presença invisível da computação.',
              recursosNecessarios: 'Quadro escolar, folhas de papel para atividade de mapeamento em grupo.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 104,
              titulo: 'As Grandes Áreas da Computação',
              descricao: 'Uma introdução descomplicada sobre o que estuda cada área: hardware (físico), software (lógica/programas), redes (conexões), inteligência artificial (aprendizado de máquina) e segurança.',
              ordem: 4,
              objetivo: 'Conhecer as subdivisões da ciência da computação e o escopo de atuação de cada uma.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital'],
              habilidades: ['EM13LGG701'],
              slides: []
            },
            {
              id: 105,
              titulo: 'Como os Computadores "Pensam"? Introdução ao Binário',
              descricao: 'Uma aula prática e desplugada que usa lâmpadas desenhadas ou cartões de papel para demonstrar o sistema binário (0 e 1) de maneira visual e interativa.',
              ordem: 5,
              objetivo: 'Compreender o conceito de código binário e como os computadores representam números e letras usando apenas dois estados (ligado/desligado).',
              recursosNecessarios: 'Cartões de papel numerados (representando potências de 2) para atividade desplugada, quadro escolar.',
              duracaoSugerida: '50 minutos',
              competencias: ['Pensamento Científico'],
              habilidades: ['EM13MAT315'],
              slides: []
            },
            {
              id: 106,
              titulo: 'Mulheres e Pioneiros da Computação',
              descricao: 'Apresentação de figuras essenciais como Ada Lovelace (primeira programadora), Grace Hopper (criadora de linguagens de programação), Margaret Hamilton (software da missão Apollo) e cientistas nacionais.',
              ordem: 6,
              objetivo: 'Valorizar a contribuição histórica de mulheres e cientistas pioneiros no desenvolvimento da computação.',
              recursosNecessarios: 'Projetor ou TV para apresentação de fotos/biografias.',
              duracaoSugerida: '50 minutos',
              competencias: ['Cultura Digital', 'Responsabilidade e Cidadania'],
              habilidades: ['EM13CHS502'],
              slides: []
            },
            {
              id: 107,
              titulo: 'Mitos e Curiosidades do Mundo Digital',
              descricao: 'Debate divertido sobre mitos do cotidiano, como se colocar um imã perto da tela estraga o PC, se o celular grava tudo o que falamos e de onde surgiu o termo "bug".',
              ordem: 7,
              objetivo: 'Desmistificar crenças populares sobre tecnologia e computadores, estimulando a curiosidade intelectual.',
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
              id: 108,
              titulo: 'O Corpo e a Mente: Hardware vs. Software',
              descricao: 'Utilizando analogias simples, os alunos entenderão a diferença conceitual e a interdependência entre a parte física e os programas de computadores e smartphones.',
              ordem: 1,
              objetivo: 'Distinguir os componentes físicos (hardware) das instruções lógicas (software) de um computador.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 109,
              titulo: 'Os Sentidos do Computador: Dispositivos de Entrada',
              descricao: 'Estudo sobre teclados, mouses, microfones, câmeras e sensores de movimento. A aula também explora a importância desses dispositivos em tecnologias de acessibilidade.',
              ordem: 2,
              objetivo: 'Identificar os dispositivos utilizados para enviar dados ao computador, compreendendo seu papel na interação humano-computador.',
              recursosNecessarios: 'Dispositivos reais antigos (opcional, para manusear), quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 110,
              titulo: 'A Voz do Computador: Dispositivos de Saída',
              descricao: 'Análise de monitores, impressoras, fones de ouvido e caixas de som, discutindo como a informação digital é convertida em sinais visuais, sonoros ou táteis.',
              ordem: 3,
              objetivo: 'Identificar os periféricos que exibem ou emitem as informações processadas pelo computador para o usuário.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 111,
              titulo: 'Onde Guardamos as Informações? Armazenamento Físico',
              descricao: 'Explicação prática sobre como a informação é guardada de forma temporária enquanto o aparelho está ligado e de forma permanente para não se perder quando ele é desligado.',
              ordem: 4,
              objetivo: 'Diferenciar a memória de trabalho (RAM) dos dispositivos de armazenamento permanente (HD, SSD e Pendrive).',
              recursosNecessarios: 'Peças antigas de HD e pendrives (opcional), projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 112,
              titulo: 'Como o Hardware e o Software Conversam?',
              descricao: 'Apresentação visual da jornada de um clique no mouse até a alteração na tela, demonstrando como o processador e o sistema operacional coordenam essa conversa.',
              ordem: 5,
              objetivo: 'Compreender o ciclo básico de entrada, processamento, armazenamento e saída de dados.',
              recursosNecessarios: 'Projetor ou TV, folhas de papel para desenho do fluxo.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 113,
              titulo: 'Cuidando do Equipamento: Higiene e Conservação',
              descricao: 'Orientações preventivas para evitar que poeira, umidade, quedas e superaquecimento estraguem os aparelhos, promovendo a longevidade dos dispositivos dos próprios alunos.',
              ordem: 6,
              objetivo: 'Aprender práticas corretas de limpeza, ventilação e conservação física de computadores e celulares.',
              recursosNecessarios: 'Quadro escolar, folheto digital ou físico com dicas de cuidados.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 114,
              titulo: 'O Ciclo de Vida da Máquina e a Obsolescência Programada',
              descricao: 'Discussão crítica sobre o descarte de celulares antigos, o consumismo tecnológico e o que é o lixo eletrônico, incentivando práticas sustentáveis.',
              ordem: 7,
              objetivo: 'Refletir sobre a obsolescência programada de aparelhos eletrônicos e seus impactos no meio ambiente.',
              recursosNecessarios: 'Projetor ou TV, notícias impressas ou projetadas sobre lixo eletrônico.',
              duracaoSugerida: '50 minutos',
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
              id: 115,
              titulo: 'A Grande Teia: O que é a Internet e Como Ela Surgiu?',
              descricao: 'Desmistificação da internet mostrando que ela não está "no ar", mas sim conectada por cabos gigantescos no fundo do mar. Contexto da Guerra Fria e a criação das primeiras redes.',
              ordem: 1,
              objetivo: 'Compreender a internet como uma rede física global de computadores interconectados e conhecer sua origem histórica.',
              recursosNecessarios: 'Projetor ou TV para mapa dos cabos submarinos mundiais, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 116,
              titulo: 'Como a Informação Viaja pela Internet?',
              descricao: 'Uma dinâmica teatral onde os alunos enviam "cartas divididas" uns aos outros pela sala de aula para entender como os pacotes de dados viajam e se reagrupam no destino final.',
              ordem: 2,
              objetivo: 'Entender o conceito de roteamento, pacotes de dados e endereços IP de forma simples.',
              recursosNecessarios: 'Cartões ou pedaços de papel (para simular pacotes), envelopes e caneta.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 117,
              titulo: 'Portas de Entrada: Navegadores e URLs',
              descricao: 'Explicação de como o navegador traduz código em páginas bonitas. Análise das partes de um endereço da web (HTTP/HTTPS, domínio, caminhos) para identificar páginas confiáveis.',
              ordem: 3,
              objetivo: 'Compreender a função dos navegadores de internet e a estrutura básica de um link (URL).',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 118,
              titulo: 'Como Encontrar Qualquer Coisa: Motores de Busca',
              descricao: 'Apresentação de truques úteis de pesquisa (uso de aspas, exclusão de termos com hífen, busca por formato de arquivo) para tornar as pesquisas escolares muito mais rápidas e eficientes.',
              ordem: 4,
              objetivo: 'Aplicar técnicas avançadas de pesquisa na web e entender como os buscadores catalogam o conhecimento.',
              recursosNecessarios: 'Projetor ou TV, celulares dos alunos (se permitido) ou exemplos no quadro.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 119,
              titulo: 'Onde Fica a Nuvem?',
              descricao: 'Esclarecimento de que a "nuvem" é um conjunto de computadores distantes (servidores/data centers) que guardam e processam nossos arquivos, permitindo acessá-los de qualquer dispositivo.',
              ordem: 5,
              objetivo: 'Explicar o conceito de computação em nuvem e suas vantagens no compartilhamento e armazenamento de arquivos.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 120,
              titulo: 'Serviços Digitais do Cotidiano',
              descricao: 'Tour por ferramentas de e-mail, mapas e GPS, streaming de áudio/vídeo, serviços públicos digitais de emissão de documentos (Gov.br) e carteiras digitais.',
              ordem: 6,
              objetivo: 'Conhecer as diferentes categorias de serviços web úteis para a vida civil, acadêmica e profissional.',
              recursosNecessarios: 'Projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 121,
              titulo: 'Inclusão Digital e o Direito à Conexão',
              descricao: 'Discussão sobre as diferenças de acesso (velocidade, franquia de dados e qualidade de tela) e como a falta de internet afeta os estudos e as chances de emprego dos cidadãos.',
              ordem: 7,
              objetivo: 'Refletir criticamente sobre as barreiras socioeconômicas de acesso à internet de qualidade no Brasil.',
              recursosNecessarios: 'Dados e infográficos sobre exclusão digital no Brasil (projetados ou impressos).',
              duracaoSugerida: '50 minutos',
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
              id: 122,
              titulo: 'Chaves Digitais: A Importância de Senhas Fortes',
              descricao: 'Dinâmica prática demonstrando por que senhas óbvias são descobertas facilmente por computadores e como construir senhas fáceis de lembrar, mas difíceis de hackear.',
              ordem: 1,
              objetivo: 'Criar e gerenciar senhas pessoais seguras e compreender a importância da verificação em duas etapas.',
              recursosNecessarios: 'Quadro escolar, papel e caneta para simulação de criação de senhas.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 123,
              titulo: 'Cuidado com a Isca! O que é Phishing?',
              descricao: 'Análise visual de mensagens reais de golpistas que fingem ser bancos, correios ou promoções imperdíveis. O estudante aprenderá a buscar pistas de fraude antes de clicar.',
              ordem: 2,
              objetivo: 'Identificar e-mails, SMS e links fraudulentos projetados para roubar informações pessoais.',
              recursosNecessarios: 'Projetor ou TV com prints de e-mails/mensagens suspeitas.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 124,
              titulo: 'Golpes Virtuais do Dia a Dia',
              descricao: 'Análise de golpes recorrentes, como a clonagem ou roubo de contas do WhatsApp, falsos sorteios no Instagram, perfis fakes de lojas e o golpe do PIX agendado.',
              ordem: 3,
              objetivo: 'Reconhecer fraudes virtuais comuns que ocorrem em aplicativos de mensagens e redes sociais.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 125,
              titulo: 'Desinformação na Rede: Combatendo Fake News',
              descricao: 'Como as Fake News são escritas para despertar emoções fortes. Passos simples para verificar notícias antes de repassar (analisar a fonte, checar data, pesquisar em agências de checagem).',
              ordem: 4,
              objetivo: 'Desenvolver uma postura analítica e crítica para identificar boatos e notícias falsas compartilhados nas redes.',
              recursosNecessarios: 'Exemplos de boatos históricos da internet impressos ou projetados.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 126,
              titulo: 'Quem Está Te Vendo? Privacidade e Redes Sociais',
              descricao: 'Análise do valor comercial das informações privadas e das configurações de privacidade de aplicativos famosos, promovendo a reflexão antes de publicar fotos e locais em tempo real.',
              ordem: 5,
              objetivo: 'Configurar restrições de privacidade e compreender os riscos de expor dados pessoais excessivamente.',
              recursosNecessarios: 'Projetor ou TV para exibição das telas de configuração de privacidade de apps conhecidos.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 127,
              titulo: 'Segurança em Celulares e Wi-Fi Público',
              descricao: 'Explicação dos riscos ao conectar-se a redes de Wi-Fi gratuitas e a importância de analisar as permissões de acesso (câmera, microfone, contatos) solicitadas por aplicativos.',
              ordem: 6,
              objetivo: 'Aprender a proteger smartphones contra conexões sem fio perigosas e gerenciar permissões de apps.',
              recursosNecessarios: 'Quadro escolar, celular pessoal do professor ou alunos (opcional).',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 128,
              titulo: 'Criando um Escudo Digital Familiar',
              descricao: 'Os alunos trabalharão em grupos criando panfletos físicos ou cartazes ilustrativos com dicas simples de segurança para levar para casa e instruir pais ou avós.',
              ordem: 7,
              objetivo: 'Sintetizar as práticas aprendidas de segurança digital e transmiti-las para a comunidade familiar.',
              recursosNecessarios: 'Papel cartolina, canetas coloridas, tesoura e cola.',
              duracaoSugerida: '50 minutos',
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
              id: 129,
              titulo: 'Viver Conectado: O Impacto das Redes Sociais',
              descricao: 'Reflexão sobre como as plataformas são feitas para nos prender a atenção e como os feeds criam "bolhas de opinião", onde apenas vemos ideias parecidas com as nossas.',
              ordem: 1,
              objetivo: 'Analisar a dinâmica de funcionamento das redes sociais, bolhas de informação e os algoritmos de engajamento.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 130,
              titulo: 'Violência Oculta: Entendendo o Cyberbullying',
              descricao: 'Discussão sobre as consequências emocionais das agressões online, a falsa sensação de anonimato na rede e o papel do espectador que compartilha piadas ofensivas.',
              ordem: 2,
              objetivo: 'Identificar situações de assédio, agressão e zombaria na internet, sabendo como denunciar e acolher as vítimas.',
              recursosNecessarios: 'Cartazes com histórias hipotéticas para reflexão em grupo.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 131,
              titulo: 'O Dono da Obra: Direitos Autorais e Internet',
              descricao: 'Explicação do que é plágio, pirataria e a importância de dar os créditos em trabalhos escolares. Introdução a conteúdos livres via licenças Creative Commons.',
              ordem: 3,
              objetivo: 'Compreender as regras de direitos autorais de materiais da internet e como usar fontes de imagens e textos corretamente.',
              recursosNecessarios: 'Quadro escolar, exemplos práticos de licenças de uso.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 132,
              titulo: 'Ética Digital e Netiqueta',
              descricao: 'Práticas de convivência na rede, uso correto de letras maiúsculas (que representam grito), respeito às opiniões contrárias e formas saudáveis de argumentar sem ofender.',
              ordem: 4,
              objetivo: 'Desenvolver hábitos de escrita respeitosos e construtivos ao interagir em comentários, fóruns e grupos de mensagens.',
              recursosNecessarios: 'Quadro escolar, folhas com exemplos de mensagens amigáveis vs. hostis.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 133,
              titulo: 'Pegada Digital: A Memória da Internet',
              descricao: 'Debate sobre a permanência das postagens e como empresas e instituições examinam a reputação online de candidatos a bolsas de estudo, estágios e empregos.',
              ordem: 5,
              objetivo: 'Compreender que as ações e publicações feitas online criam um rastro permanente que pode afetar o futuro pessoal e profissional.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 134,
              titulo: 'Saúde Mental e o Tempo de Tela',
              descricao: 'Análise do fenômeno FOMO (medo de estar perdendo algo), insônia causada pela luz azul e ansiedade gerada pela busca de curtidas. Dicas para estabelecer momentos de desconexão.',
              ordem: 6,
              objetivo: 'Refletir sobre a dependência gerada pelas notificações e aplicar estratégias para manter um uso equilibrado de aparelhos eletrônicos.',
              recursosNecessarios: 'Ficha de autoavaliação impressa sobre uso de celular.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 135,
              titulo: 'Cidadania Ativa e Ativismo Digital Seguro',
              descricao: 'Estudo de como abaixo-assinados digitais, páginas comunitárias e aplicativos de ouvidoria pública ajudam a fiscalizar problemas urbanos e propor melhorias para o bairro.',
              ordem: 7,
              objetivo: 'Identificar formas positivas de usar a internet para o benefício social, socialização de ideias e mobilização cidadã legítima.',
              recursosNecessarios: 'Projetor ou TV, papel para planejar uma ação social escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            }
          ]
        },
        {
          id: 6,
          nome: 'Projeto Final',
          descricao: 'Aplicação prática dos conceitos fundamentais de cidadania digital e investigação.',
          aulas: [
            {
              id: 136,
              titulo: 'Introdução ao Projeto e Definição de Temas',
              descricao: 'O professor explica o projeto integrado. Os alunos se reúnem e decidem o problema de segurança, exclusão ou comportamento digital que gostariam de pesquisar localmente.',
              ordem: 1,
              objetivo: 'Organizar grupos de trabalho e selecionar um problem digital ou de cidadania presente na comunidade dos estudantes.',
              recursosNecessarios: 'Quadro escolar, folhas de papel e caneta para rascunhos.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 137,
              titulo: 'Elaboração de Pesquisa de Opinião Coletiva',
              descricao: 'Os grupos formulam perguntas objetivas para investigar como as pessoas ao redor percebem golpes de internet, notícias falsas ou se possuem dificuldades de acesso.',
              ordem: 2,
              objetivo: 'Desenhar um questionário de pesquisa simples com poucas perguntas para ser aplicado com familiares ou vizinhos.',
              recursosNecessarios: 'Folha de papel para redigir as perguntas estruturadas.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 138,
              titulo: 'Compilando as Respostas e Planejando o Conteúdo',
              descricao: 'Os alunos trazem os questionários respondidos, discutem os dados e escolhem o formato do seu produto informativo (pode ser uma cartilha, panfleto ou cartaz).',
              ordem: 3,
              objetivo: 'Analisar as respostas coletadas na pesquisa de campo e rascunhar o material informativo de conscientização.',
              recursosNecessarios: 'Cadernos, folhas extras para rascunho de layouts.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 139,
              titulo: 'Confecção Física da Campanha de Conscientização',
              descricao: 'Trabalho em grupo focado na criação artística e textual das soluções de orientação digital a serem divulgadas na escola ou comunidade.',
              ordem: 4,
              objetivo: 'Produzir os cartazes ou livretos educativos baseando-se nos dados coletados.',
              recursosNecessarios: 'Papel cartolina ou sulfite, canetas coloridas, lápis, réguas.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 140,
              titulo: 'Apresentação da Campanha e Discussão Geral',
              descricao: 'Apresentação curta de cada grupo para a turma, demonstrando o que descobriram e distribuindo ou expondo os cartazes na sala de aula ou nos corredores.',
              ordem: 5,
              objetivo: 'Expor os resultados das investigações e debater as melhores formas de promover a cultura digital na escola.',
              recursosNecessarios: 'Quadro escolar ou fitas adesivas para fixar os cartazes gerados pelos alunos.',
              duracaoSugerida: '50 minutos',
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
              titulo: 'A Estrutura do PC: A Placa-Mãe e as Conexões Físicas',
              descricao: 'Uma explicação visual sobre onde os componentes do computador se encaixam e como as trilhas e os fios (barramentos) transportam energia e dados elétricos de um lugar para o outro.',
              ordem: 1,
              objetivo: 'Conhecer a placa-mãe como a central de interconexão física de todos os dispositivos do computador.',
              recursosNecessarios: 'Projetor ou TV para fotos de alta resolução de placas-mãe, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 202,
              titulo: 'A Força Bruta de Processamento: A CPU em Ação',
              descricao: 'Explicação de termos técnicos como "núcleos" (cores), velocidade em Gigahertz (GHz) e a importância do sistema de refrigeração (cooler) para manter o chip funcionando sem travar.',
              ordem: 2,
              objetivo: 'Entender a função profunda do processador e os fatores que definem o seu rendimento básico.',
              recursosNecessarios: 'Projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 203,
              titulo: 'Velozes e Permanentes: RAM vs. SSD vs. HD',
              descricao: 'Análise prática de como a transição de HDs para SSDs mudou a velocidade de inicialização do sistema e de aplicativos, mostrando a hierarquia e taxas de velocidade de cada memória.',
              ordem: 3,
              objetivo: 'Compreender a diferença de velocidade e funcionalidade entre os tipos de memórias no acesso diário de arquivos.',
              recursosNecessarios: 'Amostras ou fotos de HDs mecânicos e SSDs, projetor ou TV.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 204,
              titulo: 'O Processador de Imagens: A GPU',
              descricao: 'Explicação de como a placa gráfica dedicada alivia o processador central (CPU) cuidando exclusivamente da parte visual pesada (jogos, edição de vídeo, modelagem e interfaces complexas).',
              ordem: 4,
              objetivo: 'Compreender a diferença entre vídeo integrado e placa de vídeo dedicada (GPU) e sua relevância.',
              recursosNecessarios: 'Projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 205,
              titulo: 'O Equilíbrio da Fonte e da Energia no Sistema',
              descricao: 'Explicação sobre o papel da fonte de alimentação e como o mau funcionamento de um componente (gargalo de hardware) afeta todo o sistema, utilizando analogia de trânsito em estradas.',
              ordem: 5,
              objetivo: 'Compreender a importância do fornecimento estável de energia elétrica e a coordenação de dados entre componentes.',
              recursosNecessarios: 'Quadro escolar, projetor ou TV.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 206,
              titulo: 'Escolhendo o Computador Perfeito: Casos de Uso',
              descricao: 'Dinâmica de orçamento: em grupos, os alunos analisam catálogos fictícios para sugerir a melhor máquina para um estudante, um designer gráfico de baixo custo ou um escritório de vendas.',
              ordem: 6,
              objetivo: 'Selecionar configurações de hardware ideais para perfis variados de usuários a partir de uma verba fictícia.',
              recursosNecessarios: 'Tabelas de preços de hardware simuladas em papel, lápis e cadernos.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 207,
              titulo: 'Diagnósticos Básicos de Problemas de Hardware',
              descricao: 'Como detectar superaquecimento (cooler barulhento ou desliga sozinho), defeitos simples de memória RAM (apitos ao ligar), e problemas de cabo de energia ou conexões soltas.',
              ordem: 7,
              objetivo: 'Identificar defeitos físicos comuns nos computadores a partir de comportamentos anômalos.',
              recursosNecessarios: 'Quadro escolar, projetor ou TV.',
              duracaoSugerida: '50 minutos',
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
              id: 208,
              titulo: 'O Maestro Virtual: Introdução ao Sistema Operacional',
              descricao: 'O papel do SO em organizar a memória, decidir qual programa roda primeiro e garantir que os componentes físicos funcionem de forma coordenada sem conflitos.',
              ordem: 1,
              objetivo: 'Compreender o Sistema Operacional como o programa principal que traduz as ações do usuário em controle do hardware.',
              recursosNecessarios: 'Projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
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
              id: 215,
              titulo: 'Desvendando a Lógica: Os Quatro Pilares',
              descricao: 'Introdução teórica sobre como o raciocínio computacional ajuda seres humanos a planejar soluções sistemáticas para problemas de qualquer área do conhecimento humano.',
              ordem: 1,
              objetivo: 'Conhecer a definição e importância do Pensamento Computacional e seus quatro pilares estruturantes.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
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
              id: 222,
              titulo: 'Editor de Texto para Fins Acadêmicos',
              descricao: 'Estruturação de um documento: margens, espaçamentos, títulos, sumários e como referenciar fontes bibliográficas de forma limpa em processadores de texto.',
              ordem: 1,
              objetivo: 'Formatar relatórios e textos escolares seguindo diretrizes estruturais básicas de digitação (ABNT).',
              recursosNecessarios: 'Projetor ou TV com editor de texto aberto para demonstração das ferramentas.',
              duracaoSugerida: '50 minutos',
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
              id: 229,
              titulo: 'Comunicação Visual e Editores Gráficos Gratuitos',
              descricao: 'Fundamentos de design de cartaz: posicionamento de elementos, paleta de cores harmoniosa, seleção de imagens de boa qualidade e escrita de chamadas textuais curtas e chamativas.',
              ordem: 1,
              objetivo: 'Criar peças visuais básicas (cartazes e banners) utilizando ferramentas online e gratuitas de design.',
              recursosNecessarios: 'Projetor ou TV, celulares dos alunos (se permitido) ou atividade com recortes.',
              duracaoSugerida: '50 minutos',
              slides: []
            }
          ]
        },
        {
          id: 12,
          nome: 'Projeto Final',
          descricao: 'Resolução de problemas do cotidiano escolar aplicando lógica computacional.',
          aulas: [
            {
              id: 236,
              titulo: 'Proposição de Desafios da Rotina Escolar',
              descricao: 'Debate coletivo sobre gargalos na escola (organização da fila do refeitório, devolução de livros da biblioteca, horários de salas de estudos) para escolher o tema do projeto.',
              ordem: 1,
              objetivo: 'Mapear problemas do dia a dia da escola que possam ser otimizados através de processos lógicos ou ferramentas digitais simples.',
              recursosNecessarios: 'Quadro escolar, cadernos para anotações das sugestões.',
              duracaoSugerida: '50 minutos',
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
              slides: []
            },
            {
              id: 302,
              titulo: 'Como os Sistemas Aprendem: Machine Learning',
              descricao: 'Apresentação de como computadores analisam padrões e tomam decisões sem serem programados especificamente para isso, mostrando a importância dos dados de treino e verificação de erros.',
              ordem: 2,
              objetivo: 'Explicar conceitualmente como funciona o aprendizado de máquina com base em dados históricos.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            },
            {
              id: 303,
              titulo: 'A Era da IA Generativa e Grandes Modelos de Linguagem',
              descricao: 'Como as novas IAs conseguem criar redações ou imagens realistas. Os alunos aprenderão a dialogar com as IAs de forma rica e específica usando instruções detalhadas (prompts estruturados).',
              ordem: 3,
              objetivo: 'Reconhecer o funcionamento básico de modelos geradores de textos e imagens e aprender a redigir instruções eficazes (prompts).',
              recursosNecessarios: 'Celulares dos alunos (se permitido) ou projetor exibindo interações reais de IA.',
              duracaoSugerida: '50 minutos',
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
              id: 308,
              titulo: 'A Jornada do Software: Do Planejamento ao Lançamento',
              descricao: 'Uma explicação voltada à gestão de projetos. Os estudantes entenderão que programar é apenas uma das etapas da criação de um produto digital útil e funcional.',
              ordem: 1,
              objetivo: 'Conhecer o ciclo de vida do desenvolvimento de um programa (análise de problemas, design, programação, testes e sustentação).',
              recursosNecessarios: 'Projetor ou TV, quadro.',
              duracaoSugerida: '50 minutos',
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
              id: 315,
              titulo: 'Dados Pessoais: O Novo Ouro Digital',
              descricao: 'Por que redes sociais e serviços são oferecidos de graça? Os alunos entenderão que seus dados pessoais e perfis de hábitos de consumo são a mercadoria que financia o mundo digital de anúncios direcionados.',
              ordem: 1,
              objetivo: 'Reconhecer o valor estratégico e financeiro dos dados pessoais na economia contemporânea de dados.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
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
              id: 322,
              titulo: 'Pontes e Abismos: A Inclusão Digital no Brasil',
              descricao: 'Reflexão sobre as dificuldades enfrentadas por pessoas sem acesso a serviços online de saúde, matrículas e bancos. O estudante debaterá soluções coletivas locais de inclusão digital.',
              ordem: 1,
              objetivo: 'Debater o impacto social gerado pela ausência de computadores e internet de qualidade nas comunidades de baixa renda.',
              recursosNecessarios: 'Gráficos estatísticos de conectividade por regiões brasileiras.',
              duracaoSugerida: '50 minutos',
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
              id: 329,
              titulo: 'Carreiras do Código: Ciência da Computação vs. Engenharia de Software',
              descricao: 'Apresentação das matrizes curriculares de forma simples. A ciência da computação (foco em pesquisa científica, algoritmos complexos e lógica) contra a engenharia de software (foco em processos de criação de programas, arquitetura, testes e liderança).',
              ordem: 1,
              objetivo: 'Compreender as diferenças de formação acadêmica, campos de estudo e atividades profissionais entre essas duas graduações.',
              recursosNecessarios: 'Projetor ou TV, quadro escolar.',
              duracaoSugerida: '50 minutos',
              slides: []
            }
          ]
        },
        {
          id: 18,
          nome: 'Projeto Final',
          descricao: 'Modelagem, ética e prototipagem de uma solução digital para impacto social.',
          aulas: [
            {
              id: 336,
              titulo: 'Concepção de Projetos Sociais Tecnológicos',
              descricao: 'Formação dos times de trabalho no terceiro ano. Os estudantes decidem sobre qual questão local (como auxílio para idosos usarem celulares, doações de lixo eletrônico ou combate a golpes virtuais locais) irão desenvolver a ideia de projeto de impacto social.',
              ordem: 1,
              objetivo: 'Escolher um problema ético, ecológico ou de inclusão digital da comunidade local para propor uma solução de utilidade pública.',
              recursosNecessarios: 'Quadro escolar, folhas de papel e canetas.',
              duracaoSugerida: '50 minutos',
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
