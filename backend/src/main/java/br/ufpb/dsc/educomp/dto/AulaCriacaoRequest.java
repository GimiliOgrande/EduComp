package br.ufpb.dsc.educomp.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.List;

public record AulaCriacaoRequest(
    @NotBlank(message = "O título da aula é obrigatório")
    String titulo,

    String descricao,

    @NotNull(message = "A ordem da aula é obrigatória")
    Integer ordem,

    String objetivo,
    String recursosNecessarios,
    String duracaoSugerida,
    List<String> competencias,
    List<String> habilidades
) {}
