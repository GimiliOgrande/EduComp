package br.ufpb.dsc.educomp.config;

import br.ufpb.dsc.educomp.domain.*;
import br.ufpb.dsc.educomp.repository.AulaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Component
public class CurriculumSeeder implements CommandLineRunner {

    private final AulaRepository aulaRepository;

    public CurriculumSeeder(AulaRepository aulaRepository) {
        this.aulaRepository = aulaRepository;
    }

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        List<Aula> aulas = aulaRepository.findAll();
        System.out.println("[Seeder] Verificando sementes de conteúdo para " + aulas.size() + " aulas...");

        int countAulasPovoadas = 0;
        for (Aula aula : aulas) {
            // Verificar se a aula já possui slides ou quiz cadastrado
            if ((aula.getSlides() == null || aula.getSlides().isEmpty()) && aula.getQuiz() == null) {
                povoarAula(aula);
                aulaRepository.save(aula);
                countAulasPovoadas++;
            }
        }

        if (countAulasPovoadas > 0) {
            System.out.println("[Seeder] Sucesso! " + countAulasPovoadas + " aulas foram povoadas com slides, assistentes pedagógicos e quizzes.");
        } else {
            System.out.println("[Seeder] Nenhuma aula precisou ser povoada. Banco de dados já atualizado.");
        }
    }

    private void povoarAula(Aula aula) {
        // 1. Criar Slides
        List<Slide> slides = new ArrayList<>();
        
        // Slide 1: Introdução
        slides.add(Slide.builder()
                .aula(aula)
                .titulo("Apresentação & Objetivos")
                .conteudo("Bem-vindos à aula de hoje: **" + aula.getTitulo() + "**.\n\nNesta etapa, vamos explorar como esta aula se conecta com o nosso cotidiano e quais as metas de aprendizado que alcançaremos juntos.")
                .ordem(1)
                .objetivo("Introduzir a temática geral e motivar o engajamento inicial da turma.")
                .tempoEstimado(5)
                .sugestaoExplicacao("Acolha os alunos, leia o título da aula e comente brevemente sobre a importância prática do tema no cotidiano deles.")
                .perguntasSugeridas("O que vocês esperam aprender sobre esse assunto hoje?")
                .curiosidades("A computação moderna está presente em mais de 90% das nossas ações cotidianas, desde colocar o celular para despertar até a logística do ônibus escolar.")
                .errosComuns("Achar que a computação serve apenas para quem quer trabalhar programando. Todos nós precisamos entender de cultura digital.")
                .materiaisComplementares("Roteiro do Professor do EduComp para o Ensino Médio.")
                .build());

        // Slide 2: Quebra-gelo
        slides.add(Slide.builder()
                .aula(aula)
                .titulo("Desafio Quebra-Gelo!")
                .conteudo("Vamos começar com um desafio rápido de raciocínio relacionado a **" + aula.getTitulo() + "**. \n\nObserve o cenário proposto pelo professor e discuta com seus colegas em duplas.")
                .ordem(2)
                .objetivo("Despertar a curiosidade e ativar conhecimentos prévios de forma lúdica.")
                .tempoEstimado(5)
                .sugestaoExplicacao("Apresente uma pergunta provocativa ou mostre um cenário no quadro/computador para fazer os alunos pensarem.")
                .perguntasSugeridas("Qual a relação desse quebra-gelo com o que estudamos na semana passada?")
                .curiosidades("Nosso cérebro aprende muito mais rápido quando tentamos resolver um enigma antes de ver a explicação teórica.")
                .errosComuns("Ficar com medo de errar a resposta do quebra-gelo. O objetivo é participar e interagir, não acertar de primeira.")
                .build());

        // Slide 3: Conceito Chave
        slides.add(Slide.builder()
                .aula(aula)
                .titulo("Compreendendo o Conceito")
                .conteudo("Aqui está a essência de **" + aula.getTitulo() + "**:\n\n" + aula.getDescricao() + "\n\nPara facilitar, pense na analogia do cotidiano que o professor irá explicar.")
                .ordem(3)
                .objetivo("Apresentar a teoria e os conceitos técnicos de forma clara e acessível.")
                .tempoEstimado(10)
                .sugestaoExplicacao("Explique o conceito base da aula utilizando analogias simples (ex: cozinha, carro, esportes) conectando com redes sociais ou celulares.")
                .perguntasSugeridas("Vocês já viram esse conceito sendo aplicado em algum aplicativo ou site que usam todos os dias?")
                .curiosidades("A maioria das grandes invenções da computação nasceu tentando imitar processos naturais ou humanos simples.")
                .errosComuns("Confundir a ferramenta física (celular/computador) com o conceito abstrato que a faz funcionar.")
                .build());

        // Slide 4: Atividade Prática
        slides.add(Slide.builder()
                .aula(aula)
                .titulo("Mão na Massa: Atividade Prática")
                .conteudo("Agora é com vocês! Em grupos de 3 a 5 alunos, vamos realizar uma atividade desplugada utilizando papel e caneta.\n\nSiga as instruções e colabore com seu time para construir a solução do desafio proposto.")
                .ordem(4)
                .objetivo("Aplicar o conhecimento adquirido em um desafio cooperativo prático e desplugado.")
                .tempoEstimado(10)
                .sugestaoExplicacao("Divida a turma em grupos, distribua folhas e oriente-os no desenvolvimento da tarefa prática de modelagem ou lógica.")
                .perguntasSugeridas("Quais dificuldades vocês encontraram ao tentar explicar a solução para o seu grupo?")
                .curiosidades("Grandes engenheiros de software planejam seus sistemas inteiros no papel ou em quadros brancos antes de digitar qualquer linha de código.")
                .errosComuns("Deixar apenas um aluno fazer todo o trabalho do grupo. Todos devem palpitar e construir juntos.")
                .build());

        // Slide 5: Reflexão & Fechamento
        slides.add(Slide.builder()
                .aula(aula)
                .titulo("Fechamento & Reflexão Social")
                .conteudo("O que aprendemos hoje sobre **" + aula.getTitulo() + "**?\n\n* A tecnologia não é neutra: ela afeta a sociedade, o meio ambiente e as nossas vidas.\n* Compreender o mundo digital nos torna cidadãos mais críticos e preparados para o futuro.")
                .ordem(5)
                .objetivo("Consolidar o aprendizado e estimular a consciência social e ética.")
                .tempoEstimado(5)
                .sugestaoExplicacao("Faça uma síntese rápida dos pontos discutidos e instigue uma reflexão ética sobre a tecnologia estudada.")
                .perguntasSugeridas("Como o conhecimento de hoje pode ajudar vocês a usarem a internet ou a tecnologia de forma mais produtiva ou segura?")
                .curiosidades("A computação é considerada a nova alfabetização. Quem entende de tecnologia deixa de ser apenas consumidor para se tornar criador.")
                .errosComuns("Achar que a aula acabou e não prestar atenção no resumo final, que conecta todas as partes.")
                .build());

        // Modificação crucial para evitar orphan removal exception do Hibernate
        if (aula.getSlides() == null) {
            aula.setSlides(slides);
        } else {
            aula.getSlides().clear();
            aula.getSlides().addAll(slides);
        }

        // 2. Criar Quiz com 4 perguntas temáticas ajustadas ao título
        Quiz quiz = new Quiz();
        quiz.setAula(aula);
        quiz.setTitulo("Quiz de Fixação: " + aula.getTitulo());

        List<Pergunta> perguntas = new ArrayList<>();
        
        // Pergunta 1
        Pergunta p1 = new Pergunta();
        p1.setQuiz(quiz);
        p1.setEnunciado("Sobre a aula de hoje ('" + aula.getTitulo() + "'), qual alternativa descreve corretamente o seu objetivo principal?");
        p1.setOrdem(1);
        
        List<Alternativa> alt1 = new ArrayList<>();
        alt1.add(new Alternativa(null, p1, "Compreender e aplicar os conceitos práticos de " + aula.getTitulo() + " no nosso cotidiano digital.", true, 1));
        alt1.add(new Alternativa(null, p1, "Decorar códigos complexos em inglês para criar sistemas operacionais.", false, 2));
        alt1.add(new Alternativa(null, p1, "Aprender a formatar o celular e instalar antivírus pirateados.", false, 3));
        alt1.add(new Alternativa(null, p1, "Apenas navegar em redes sociais e assistir vídeos sem propósitos educativos.", false, 4));
        p1.setAlternativas(alt1);
        perguntas.add(p1);

        // Pergunta 2
        Pergunta p2 = new Pergunta();
        p2.setQuiz(quiz);
        p2.setEnunciado("Por que a temática abordada em '" + aula.getTitulo() + "' é importante para os estudantes do Ensino Médio?");
        p2.setOrdem(2);

        List<Alternativa> alt2 = new ArrayList<>();
        alt2.add(new Alternativa(null, p2, "Porque nos ajuda a desenvolver pensamento crítico e lógico para resolver problemas complexos da sociedade.", true, 1));
        alt2.add(new Alternativa(null, p2, "Porque é necessário para poder jogar videogame durante as aulas escolares.", false, 2));
        alt2.add(new Alternativa(null, p2, "Porque o computador faz tudo sozinho e não precisamos pensar ao usá-lo.", false, 3));
        alt2.add(new Alternativa(null, p2, "Porque apenas cientistas renomados devem entender de tecnologia.", false, 4));
        p2.setAlternativas(alt2);
        perguntas.add(p2);

        // Pergunta 3
        Pergunta p3 = new Pergunta();
        p3.setQuiz(quiz);
        p3.setEnunciado("Ao falar de '" + aula.getTitulo() + "', qual é um erro ou mito conceitual comum que devemos evitar?");
        p3.setOrdem(3);

        List<Alternativa> alt3 = new ArrayList<>();
        alt3.add(new Alternativa(null, p3, "Acreditar que tecnologia é mágica ou que não exige planejamento e ética humana.", true, 1));
        alt3.add(new Alternativa(null, p3, "Saber que computadores usam código binário para processar dados de energia.", false, 2));
        alt3.add(new Alternativa(null, p3, "Reconhecer que hardware e software dependem um do outro para funcionar.", false, 3));
        alt3.add(new Alternativa(null, p3, "Entender que algoritmos são instruções sequenciais passo a passo.", false, 4));
        p3.setAlternativas(alt3);
        perguntas.add(p3);

        // Pergunta 4
        Pergunta p4 = new Pergunta();
        p4.setQuiz(quiz);
        p4.setEnunciado("Qual a melhor postura ética ao aplicar as noções de '" + aula.getTitulo() + "' nas redes sociais?");
        p4.setOrdem(4);

        List<Alternativa> alt4 = new ArrayList<>();
        alt4.add(new Alternativa(null, p4, "Respeitar a autoria das produções, proteger dados privados e combater notícias falsas.", true, 1));
        alt4.add(new Alternativa(null, p4, "Compartilhar links suspeitos sem verificar a veracidade da fonte.", false, 2));
        alt4.add(new Alternativa(null, p4, "Utilizar a mesma senha fraca em todas as plataformas para não esquecer.", false, 3));
        alt4.add(new Alternativa(null, p4, "Copiar textos de sites alheios sem citar os autores (plágio).", false, 4));
        p4.setAlternativas(alt4);
        perguntas.add(p4);

        quiz.setPerguntas(perguntas);
        aula.setQuiz(quiz);
    }
}
