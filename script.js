let cartasClicadas= [];
let jogadas = 0;

botarJogo()

function botarJogo(){
    let listaCartas = [];
    for(let p = 0; p < 7; p++){
        listaCartas.push(`<li class="carta" onclick ="escolher(this)">
        <div class="cartaFrente" identifier="cartaFrente">
            <img src="imagens/front.png">  
        </div>
        <div class="cartaVirada" identifier="cartaVirada>
            <img src="imagens/parrot${p}.gif">
        </div>
        </li>`);
    }
    let numeroDeCartas = prompt("Escolha entre 4 e 14 e que seja par");
    const jogo = document.querySelector("ul");
    jogo.innerHTML = "";
    jogadas = 0;
    let arranjo= [];
    if(numeroDeCartas >= 4 && numeroDeCartas <= 14 && numeroDeCartas%2 == 0){
        jogo.style.gridTemplateColumns = `repeat(${numeroDeCartas/2}, 1fr)`;

        for(let i = 0; i < numeroDeCartas/2; i++){ 
          arranjo.push(listaCartas[i]);
          arranjo.push(listaCartas[i]);
        }
        arranjo.sort(shuffle);
        for(let j = 0; j < numeroDeCartas; j++){
        jogo.innerHTML += arranjo[j];
        }
        
    }
    else{
        botarJogo();
    }
}

function shuffle() { 
	return Math.random() - 0.5; 
}

function escolher(carta){
    jogadas++;
    carta.classList.add("selecionada");
    carta.classList.add("desabilitada");
    cartasClicadas.push(carta);
    if(cartasClicadas.length === 2){
        desabilitarCartas();
        if(cartasClicadas[0].innerHTML === cartasClicadas[1].innerHTML){
            cartasIdenticas();
        }
        else{
            setTimeout(cartasDiferentes, 2000);
        }
    }
    let pontoS = document.querySelectorAll(".ponto");
    let conjuntoCartas = document.querySelectorAll(".carta");
    if(pontos.length === conjuntoCartas.lenght){
        setTimeout(fim, 500);
    }
}
function cartasIdenticas(){
    liberarCartas();
    cartasClicadas[0].classList.add("ponto");
    cartasClicadas[1].classList.add("ponto");
    cartasClicadas[0].classList.remove("selecionada");
    cartasClicadas[1].classList.remove("selecionada");
    cartasClicadas = [];

}

function cartasDiferentes(){
    liberarCartas();
    cartasClicadas[0].classList.remove("selecionada");
    cartasClicadas[1].classList.remove("selecionada");
    cartasClicadas = [];
}

function liberarCartas(){
    let conjuntoCartas = document.querySelectorAll(".carta");
    for(let i = 0; i < conjuntoCartas.length; i++){
        conjuntoCartas[i].classList.add("desabilitada");
    }
}

function desabilitarCartas(){
    let conjuntoCartas = document.querySelectorAll(".carta");
    for(let i = 0; i < conjuntoCartas.length; i++){
        conjuntoCartas[i].classList.add("desabilitada");
    }

}
function fim(){
    alert(`Você ganhou em ${jogadas} jogadas`);
    
}
