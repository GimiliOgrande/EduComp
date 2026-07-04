package br.ufpb.dsc.educomp.dto;

public record LoginResponse(
    String token,
    ProfessorResponse professor
) {}
