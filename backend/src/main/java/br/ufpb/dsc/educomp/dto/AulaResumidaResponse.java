package br.ufpb.dsc.educomp.dto;

public record AulaResumidaResponse(
    Long id,
    String titulo,
    String descricao,
    Integer ordem,
    String objetivo,
    String recursosNecessarios,
    String duracaoSugerida
) {}
