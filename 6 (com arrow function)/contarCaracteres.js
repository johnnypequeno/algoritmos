const contarCaracteres = (texto) => texto.length;

function contarCaracteresSemLength (texto) {
    let quantidade = 0
    for (let i = 0; texto[i] !== undefined; i++) {
        quantidade++;
    } 
    return quantidade;
}

// Exemplo
const exemplo = "Olá, mundo!";

const quantidadeComLength = contarCaracteres (exemplo);
console.log(`(Com length) A quantidade de caracteres na string "${exemplo}" é: ${quantidadeComLength}`);

const quantidadeSemLength = contarCaracteresSemLength (exemplo);
console.log (`(Sem length) A quantidade de caracteres na string é "${exemplo}" é: ${quantidadeSemLength}`);
