

function solucao(tempo, distancia) {
	//seu codigo aqui
    let preco = null;
    if(tempo < 5){
        preco = 600;
    }
    else if(tempo >=5 && tempo < 60){
        preco = 100*(tempo + (0.5 * distancia));
        
    }
    else if( tempo >= 60){
        if(distancia < 100){
            preco = (2*distancia)*100;
        }
        else{
            preco = (1.5*distancia)*100;
        }
        
    }
     console.log(preco)   
        
    
    

}

function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
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