

function solucao(joao, andre) {
    // Escreva seu codigo aqui
    if(joao == andre){
        console.log('EMPATE');
    }
    if(joao == 'PEDRA' && andre == 'PAPEL'){
        console.log('ANDRE');
    }
    else if(joao == 'PEDRA' && andre =='TESOURA'){
        console.log('JOAO');
    }
    else if(joao == 'PAPEL' && andre == 'PEDRA'){
        console.log('JOAO');
    }
    else if(joao == 'PAPEL' && andre == 'TESOURA'){
        console.log('ANDRE');
    }
    else if(joao == 'TESOURA' && andre == 'PEDRA'){
        console.log('ANDRE');
    }
    else if(joao == 'TESOURA' && andre == 'PAPEL'){
        console.log('JOAO');
    }
}


function processData(input) {
  const pairs = input.trim().split(" ");
  const j = pairs[0];
  const a = pairs[1];
  solucao(j, a);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
