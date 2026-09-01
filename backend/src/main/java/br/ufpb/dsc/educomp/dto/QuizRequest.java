package br.ufpb.dsc.educomp.dto;

import jakarta.validation.constraints.NotBlank;
import java.util.List;

public record QuizRequest(
    @NotBlank(message = "O título do quiz é obrigatório")
    String titulo,

    List<PerguntaRequest> perguntas
) {}
