package br.ufpb.dsc.educomp.dto;

import java.util.List;

public record CursoResponse(
    Long id,
    String nome,
    String descricao,
    List<SerieResponse> series
) {}
