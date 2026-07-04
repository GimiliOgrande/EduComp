package br.ufpb.dsc.educomp.dto;

public record AlternativaResponse(
    Long id,
    String texto,
    Boolean correta,
    Integer ordem
) {}
