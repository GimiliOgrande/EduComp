package br.ufpb.dsc.educomp.exception;

public record ErroResposta(
    int status,
    String erro,
    String mensagem,
    long timestamp
) {
    public ErroResposta(int status, String erro, String mensagem) {
        this(status, erro, mensagem, System.currentTimeMillis());
    }
}
