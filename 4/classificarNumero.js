function classificarNumero(numero) {
    let parOuImpar = numero % 2 === 0 ? 'par' : 'impar';
    let positivoOuNegativo = '';
    
    if (numero>0) {
        positivoOuNegativo = 'positivo';   
    }   else if (numero <0) {
        positivoOuNegativo = 'negativo';
    }   else {
        positivoOuNegativo = 'neutro'
    }

    return `O número ${numero} é ${parOuImpar} e ${positivoOuNegativo}.`;
}

//Exemplo
const numero = -5;
console.log(classificarNumero(numero));