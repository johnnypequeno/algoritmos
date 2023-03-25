function calcularAreaRetangulo(largura,altura){
    const area= largura * altura;
    return area;

}

//Exemplo de uso de função
const largura = 10;
const altura = 5;

const area = calcularAreaRetangulo (largura, altura);
console.log (`A área do retângulo de largura ${largura}cm e altura ${altura}cm é: ${calcularAreaRetangulo(largura, altura)}cm`);