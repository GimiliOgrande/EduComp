package br.ufpb.dsc.educomp.config;

import br.ufpb.dsc.educomp.domain.*;
import br.ufpb.dsc.educomp.repository.AulaRepository;
import br.ufpb.dsc.educomp.service.CurriculumSeederService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class CurriculumSeeder implements CommandLineRunner {

    private final AulaRepository aulaRepository;
    private final CurriculumSeederService curriculumSeederService;
    private final ObjectMapper objectMapper;

    public CurriculumSeeder(AulaRepository aulaRepository, 
                            CurriculumSeederService curriculumSeederService, 
                            ObjectMapper objectMapper) {
        this.aulaRepository = aulaRepository;
        this.curriculumSeederService = curriculumSeederService;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        List<Aula> aulas = aulaRepository.findAll();
        System.out.println("[Seeder] Iniciando povoamento pedagógico de " + aulas.size() + " aulas...");

        // 1. Carregar slides customizados do arquivo JSON
        Map<Long, List<SeedSlide>> customSlidesMap = new HashMap<>();
        try {
            ClassPathResource resource = new ClassPathResource("curriculum_content.json");
            if (resource.exists()) {
                try (InputStream is = resource.getInputStream()) {
                    List<SeedAula> seedAulas = objectMapper.readValue(is, new TypeReference<List<SeedAula>>() {});
                    for (SeedAula seedAula : seedAulas) {
                        customSlidesMap.put(seedAula.aulaId, seedAula.slides);
                    }
                    System.out.println("[Seeder] Carregados dados específicos de slides para " + customSlidesMap.size() + " aulas do JSON.");
                }
            } else {
                System.out.println("[Seeder] Aviso: curriculum_content.json não encontrado no classpath. Usando fallback dinâmico.");
            }
        } catch (Exception e) {
            System.err.println("[Seeder] Erro ao ler curriculum_content.json: " + e.getMessage());
        }

        int countAulasPovoadas = 0;
        for (Aula aula : aulas) {
            try {
                // Chamar o serviço externo transacional para evitar erros de lazy initialization (no Session)
                curriculumSeederService.povoarESalvarAulaTransacional(aula.getId(), customSlidesMap.get(aula.getId()));
                countAulasPovoadas++;
                if (countAulasPovoadas % 10 == 0 || countAulasPovoadas == aulas.size()) {
                    System.out.println("[Seeder] Progresso: " + countAulasPovoadas + "/" + aulas.size() + " aulas processadas com sucesso.");
                }
            } catch (Exception e) {
                System.err.println("[Seeder] Erro ao povoar aula ID " + aula.getId() + ": " + e.getMessage());
            }
        }

        System.out.println("[Seeder] Sucesso! Currículo de slides e quizzes foi totalmente atualizado no banco.");
    }

    // Classes DTO para leitura do Jackson
    public static class SeedSlide {
        public String titulo;
        public String conteudo;
        public Integer ordem;
        public String objetivo;
        public Integer tempoEstimado;
        public String sugestaoExplicacao;
        public String perguntasSugeridas;
        public String curiosidades;
        public String errosComuns;
        public String materiaisComplementares;
    }

    public static class SeedAula {
        public Long aulaId;
        public List<SeedSlide> slides;
    }
}
