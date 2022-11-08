var prompt = require('prompt-sync')();

function sorteioarnumero(){
    
let numero = parseInt(Math.random()  * 1000); 
return numero;
  
}

 function main(){
    try{
        let a = sorteioarnumero();
        console.log('um numero já foi sorteado')
        let resp = ''
        let rodada = 10
        let jogada = 0
        
        for (let i = 1 ; i <= rodada ; i++){
            console.log('jogada' + i + ', insira um valor');
            let jg = prompt(Number());
            if (jg == a){
                resp = 'wow'
                i = 10
            } 

            else if (jg > a ){
                resp = 'menor '
            }

            else if (jg < a )
            {
                resp = 'maior '
            }
          
            else if( rodada > 10){
                resp = 'lose'
        }     

        if (resp != 'wow'){
            resp = 'lose' 
        }

        else if(resp = 'wow'){
            resp = resp
        } 
        console.log(resp);
    }
    }
    catch(err){
        console.log(err.message);
    } 
 }

let g = main();
console.log(g);
  







      
 


  


