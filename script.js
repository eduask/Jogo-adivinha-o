
let sort = Math.floor(Math.random()*100)+1;
console.log(sort)
let tentativas = 5
document.getElementById("chances").innerHTML = "Tentativas:" + tentativas;
let saida = document.getElementById("output");
function clique(){
    //entrada
    let valor = document.getElementById("input").value;

    if(valor >= 0 && valor <=100){
        if(valor == sort){
            saida.innerHTML = "Acertou";
        } if(valor < sort){
            saida.innerHTML = "O valor digitado é menor";
        } if(valor > sort){
            saida.innerHTML = "O valor digitado é maior";
        }
    } else{
        saida.innerHTML = "Está fora do intervalo";
    }
    tentativas--;
    document.getElementById("chances").innerHTML = "Tentativas:" + tentativas;
    if (tentativas < 1){
        document.getElementById("btn").disabled = true;
        saida.innerHTML = "Acabaram as tentativas, o número sorteado era: " + sort;
    }
}

function novo(){
    sort = Math.floor(Math.random()*100)+1;
    tentativas = 5;
    document.getElementById("chances").innerHTML = "Tentativas:" + tentativas;
     document.getElementById("btn").disabled = false;
     saida.innerHTML = ""
}
    