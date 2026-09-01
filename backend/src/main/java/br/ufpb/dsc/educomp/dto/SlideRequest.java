package br.ufpb.dsc.educomp.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record SlideRequest(
    @NotBlank(message = "O título do slide é obrigatório")
    String titulo,

    @NotBlank(message = "O conteúdo do slide é obrigatório")
    String conteudo,

    String imagemUrl,
    String balaoTexto,

    @NotNull(message = "A ordem do slide é obrigatória")
    Integer ordem,

    String objetivo,
    Integer tempoEstimado,
    String sugestaoExplicacao,
    String perguntasSugeridas,
    String curiosidades,
    String errosComuns,
    String materiaisComplementares
) {}
