package br.ufpb.dsc.educomp.dto;

public record SlideResponse(
    Long id,
    String titulo,
    String conteudo,
    String imagemUrl,
    Integer ordem,
    String objetivo,
    Integer tempoEstimado,
    String sugestaoExplicacao,
    String perguntasSugeridas,
    String curiosidades,
    String errosComuns,
    String materiaisComplementares
) {}
