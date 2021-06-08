

function solucao(produtos) {
	//seu codigo aqui
    let cont = 0;
    let total = 0;
    
    for( let i = 0; i < produtos.length; i++){
        total = total + produtos[i].preco;
        if(produtos[i].preco > 10000){
            cont = cont + produtos[i].preco;
        }
    }
   
    console.log({totalTop: cont, percentual: (cont/total)});
}

function processData(input) {
	solucao(JSON.parse(input));
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
