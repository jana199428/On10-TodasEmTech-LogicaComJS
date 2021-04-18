// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

// Contruindo as caixinhas de comando

let reultado=0;
let codigodoproduto = prompt('Insira o codigo do produto')
let quantidade = prompt('Insira a quantidade do produto')

//Incerindo os dados da Tabela


if(codigodoproduto==='1'){

    resultado = quantidade*4
    
} 

if(codigodoproduto==='2'){

    resultado = quantidade*4.5

} 

if(codigodoproduto==='3'){

    resultado = quantidade*5

} 

if(codigodoproduto==='4'){

    resultado = quantidade*2

} 

if(codigodoproduto==='5'){

    resultado = quantidade*1.5

} 


// Replicando no consoller 

console.log(`Total: R$ ${resultado}`)



