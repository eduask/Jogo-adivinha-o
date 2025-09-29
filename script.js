let sort = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;
let vitorias = 0; 


let saida = document.getElementById("output");
let chancesDisplay = document.getElementById("chances");
let placarDisplay = document.getElementById("placar"); 
let input = document.getElementById("input");
let btnChutar = document.getElementById("btn");


chancesDisplay.innerHTML = "Tentativas: " + tentativas;
placarDisplay.innerHTML = "Vitórias: " + vitorias;

function clique() {
    let valor = input.value;


    if (valor === "") {
        saida.innerHTML = "Por favor, digite um número.";
        return;
    }

    valor = parseInt(valor); 

    if (valor >= 1 && valor <= 100) {
        if (valor === sort) {
            saida.innerHTML = "🎉 Acertou! 🎉";
            vitorias++;
            placarDisplay.innerHTML = "Vitórias: " + vitorias; 
            btnChutar.disabled = true; 
        } else if (valor < sort) {
            saida.innerHTML = "O número sorteado é maior ⬆️";
        } else {
            saida.innerHTML = "O número sorteado é menor ⬇️";
        }
    } else {
        saida.innerHTML = "Digite um número entre 1 e 100.";
    }

    if (valor !== sort) {
        tentativas--;
        chancesDisplay.innerHTML = "Tentativas: " + tentativas;
    }

    if (tentativas < 1 && valor !== sort) {
        btnChutar.disabled = true;
        saida.innerHTML = "Acabaram as tentativas. O número era: " + sort;
    }
}

function novo() {
    sort = Math.floor(Math.random() * 100) + 1;
    tentativas = 5;
    chancesDisplay.innerHTML = "Tentativas: " + tentativas;
    btnChutar.disabled = false;
    saida.innerHTML = "";
    input.value = "";
}
