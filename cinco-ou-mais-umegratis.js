

function solucao(precos) {
    //seu codigo aqui
    let valor = 0;
    if(precos.length >= 5){
        let minimo = Math.min(...precos)
        for (let i = 0; i < precos.length; i++){
            valor = valor + precos[i];
        }
        console.log(valor - minimo);
        
    }
    else{
        for (let i = 0; i < precos.length; i++){
            valor = valor + precos[i];  
    }
        console.log(valor)
    
}}


function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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