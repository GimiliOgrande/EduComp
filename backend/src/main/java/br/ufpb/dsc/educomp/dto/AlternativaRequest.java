package br.ufpb.dsc.educomp.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AlternativaRequest(
    Long id,

    @NotBlank(message = "O texto da alternativa é obrigatório")
    String texto,

    @NotNull(message = "O status de corretude da alternativa é obrigatório")
    Boolean correta,

    Integer ordem
) {}
