package br.ufpb.dsc.educomp.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;

public record PerguntaRequest(
    Long id,

    @NotBlank(message = "O enunciado da pergunta é obrigatório")
    String enunciado,

    Integer ordem,

    @NotEmpty(message = "A pergunta deve ter pelo menos uma alternativa")
    List<AlternativaRequest> alternativas
) {}
