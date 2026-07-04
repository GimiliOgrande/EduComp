package br.ufpb.dsc.educomp.dto;

import java.util.List;

public record QuizResponse(
    Long id,
    String titulo,
    List<PerguntaResponse> perguntas
) {}
