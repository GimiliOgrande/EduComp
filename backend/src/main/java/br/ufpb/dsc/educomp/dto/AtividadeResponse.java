package br.ufpb.dsc.educomp.dto;

public record AtividadeResponse(
    Long id,
    String titulo,
    String descricao,
    String arquivoUrl
) {}
