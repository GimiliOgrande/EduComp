package br.ufpb.dsc.educomp.dto;

import java.util.List;

public record PerguntaResponse(
    Long id,
    String enunciado,
    Integer ordem,
    List<AlternativaResponse> alternativas
) {}
