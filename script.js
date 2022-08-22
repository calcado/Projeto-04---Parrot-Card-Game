const listaCartas = [];
const numeroCartas = prompt("Quantas cartas você gostaria de jogar?");
const listaImagens=[
    "./imagens/bobrossparrot.gif",
    "./imagens/bobrossparrot.gif",
    "./imagens/explodyparrot.gif",
    "./imagens/explodyparrot.gif",
    "./imagens/fiestaparrot.gif",
    "./imagens/fiestaparrot.gif",
    "./imagens/metalparrot.gif",
    "./imagens/metalparrot.gif",
    "./imagens/revertitparrot.gif",
    "./imagens/revertitparrot.gif",
    "./imagens/tripletsparrot.gif",
    "./imagens/tripletsparrot.gif",
    "./imagens/unicornparrot.gif",
    "./imagens/unicornparrot.gif"

]

let numberCartas = Number(numeroCartas);
const ul = document.querySelector(".listaCartas")
while(numberCartas < 4 || numberCartas >14 ||isNaN(numberCartas) || Number % 2 === 1){
  let numberCartas = Number(prompt("Quantas cartas você gostaria de jogar?"));
  
    
    
}
for (i = 0; i < numberCartas; i++) {
    ul.innerHTML += `<li class="carta" onclick="viraCarta"(this)><div><img src="./imagens/front.png" class="frenteCarta"></div><div></div></li>`
}4

// function viraCarta(this){
//     const carta = document.querySelector('.frenteCarta');
//      carta.classList.toggle('.virada');

// }


// <img src="${listaImagens[i]}"></img>


// for (i = 0; i < numberCartas; i++) {
//     ul.innerHTML += `<li class="carta" onclick="viraCarta"(this)><div><img src="./imagens/front.png" class="frenteCarta"></div><div class="cartaVirada"><img src="${listaImagens[i]}"</div></li>`
//     function viraCarta(this){
//         alert('oi')}
// }  


//     const carta = document.querySelector(".frenteCarta");
//     carta.classList.toggle('cartaVirada');
// }
//     if(cartaClicada===cartaClicada2){
//         function()
//     }
// }

// function checarCarta(){

// }












    // (`
    // //         <li class="carta" onclick="viraCarta(this)">
    // //         <div class="frenteCarta">
    // //                 <img src="./imagens/front.png class="frenteCarta"></div>
    // //                 <div class="cartaVirada">
    // //                 <img src="" >
    // //             </div>
    // //         </li> `)

    

// let contador = 0;
// while(contador<numberCartas){
//         lista = document.querySelector(".listaCartas")
//         lista.innerHTML =+ `
//         <li class="carta" onclick="viraCarta(this)">
//         <div class="frenteCarta">
//                 <img src="./imagens/front.png class="frenteCarta"></div>
//                 <div class="cartaVirada">
//                 <img src="" >
//             </div>
//         </li> `    
        
//     }
    

// function virarCarta(){


//}
//function checaCarta(){
// if(cartaClicada === )     

//} 
// function fimDeJogo(){

// }








    //     return(prompt("Quantas cartas você gostaria de jogar?"))

// }

// function virarCarta(){
//     const elemento = querySelector('.cartaFrente');
//      img.src=""
// }