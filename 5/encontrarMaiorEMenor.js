function encontrarMaiorEMenor (lista) {
    if (lista.length === 0) {
        console.log ('Erro: A lista está vazia.')
        return;
    }

    let maior = lista[0];
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista [i] > maior) {
            maior = lista [i];
        }
        if (lista [i] < menor) {
            menor = lista [i];
        }
    }

    return { maior: maior, menor: menor };
}

//Exemplo
const numeros  = [34, 12, 56, 2, 17, 90, 5];
const resultado = encontrarMaiorEMenor(numeros);

console.log (`O maior número da lista é: ${resultado.maior}`);
console.log (`O menor número da lista é: ${resultado.menor}`);
