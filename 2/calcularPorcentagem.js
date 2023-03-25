function calcularPorcentagem(numerador, denominador) {
    if (denominador === 0) {
    console.log ('Erro: Denominador não pode ser zero.');
    return;
    }

    const fracao = numerador / denominador;
    const porcentagem = fracao * 100;

    return porcentagem;
}

// Exemplo de uso da função
const numerador = 3;
const denominador = 4;

console.log(`A porcentagem de ${numerador}/${denominador} é: ${calcularPorcentagem(numerador, denominador)}%`);
