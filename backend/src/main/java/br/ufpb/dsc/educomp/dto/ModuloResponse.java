package br.ufpb.dsc.educomp.dto;

import java.util.List;

public record ModuloResponse(
    Long id,
    String nome,
    String descricao,
    List<AulaResumidaResponse> aulas
) {}
