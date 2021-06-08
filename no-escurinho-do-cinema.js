

function solucao(obj) {

    if(obj.temIngresso == true){
      if(obj.idade >= obj.censura || obj.estaComPais == true){
          if(obj.idade < 18 || obj.temCarteirinha == true){
            console.log('MEIA');
  
          }
          else{
            console.log('INTEIRA');
          }
  
      }
      else{
         console.log('ACESSO NEGADO');
      }
    }
    else{
      console.log('ACESSO NEGADO');
    }
      
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
  