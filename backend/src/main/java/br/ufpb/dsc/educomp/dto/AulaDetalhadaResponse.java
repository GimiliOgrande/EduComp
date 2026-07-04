package br.ufpb.dsc.educomp.dto;

import java.util.List;

public record AulaDetalhadaResponse(
    Long id,
    String titulo,
    String descricao,
    Integer ordem,
    String objetivo,
    String recursosNecessarios,
    String duracaoSugerida,
    List<SlideResponse> slides,
    QuizResponse quiz,
    List<AtividadeResponse> atividades,
    List<VideoResponse> videos,
    List<String> competencias,
    List<String> habilidades
) {}
