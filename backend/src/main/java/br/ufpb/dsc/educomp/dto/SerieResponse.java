package br.ufpb.dsc.educomp.dto;

import java.util.List;

public record SerieResponse(
    Long id,
    String nome,
    List<ModuloResponse> modulos
) {}
