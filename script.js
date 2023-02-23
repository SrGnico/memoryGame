let cardOne = "0";
let cardTwo = "0";


function flipCard(x){


    if (x.dataset.flipped === "false" && x.dataset.discovered === "false"){
        x.dataset.flipped = "true"
      
             if (cardOne === "0"){
             x.dataset.checking = "true";
             createCardOne(x.dataset.id);
            } else  setTimeout(() => {{
                    x.dataset.checking = "true";
                    createCardTwo(x.dataset.id);
                }       
            },500);
    
        }

    function createCardOne(cardIdOne){
        cardOne = cardIdOne;
        return;

    }

    function createCardTwo(cardIdTwo){
        cardTwo = cardIdTwo;
        if(cardOne === cardTwo){
            let entireCards = document.querySelectorAll('.carta[data-checking="true"]');
            
            for(var i = 0; i < entireCards.length; i++){
                entireCards[i].dataset.checking = "false";
                entireCards[i].dataset.discovered = "true";
                cardOne = "0";
                cardTwo = "0";

            }

        } else{
            let entireCards = document.querySelectorAll('.carta[data-checking="true"]');
            
            for(var i = 0; i < entireCards.length; i++){
                entireCards[i].dataset.checking = "false";
                entireCards[i].dataset.x = "true";
                entireCards[i].dataset.flipped = "false"
                cardOne = "0";
                cardTwo = "0";
            }
        }
    }


}




const crearCartas = (ev) =>{
    ev.preventDefault();

    let cuantas = document.querySelector('input[name="cantidad"]:checked').value;
    let selector =document.querySelector('.selector[data-selected]');
    let cuatro = ['1','2','1','2'];
    let ocho = ['1','2','3','4','1','2','3','4'];
    let diecises = ['1','2','3','4','5','6','7','8','1','2','3','4','5','6','7','8']
    let treientaYDos = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
    let ids;
    let contenedor =  document.querySelector(".contenedor");
    selector.dataset.selected = "true"

    for( let i = 0; i < cuantas; i++){
     const cartas = document.createElement('div');
     cartas.className = 'carta'
     cartas.setAttribute("data-flipped","false");
     cartas.setAttribute("data-discovered","false");
     cartas.setAttribute("data-id","0");
     cartas.setAttribute("data-x","false");
     cartas.setAttribute("onclick","flipCard(this)");

      const frontCard = document.createElement("div");
      frontCard.className = "frontCard";
     cartas.appendChild(frontCard);


     contenedor.appendChild(cartas);

}

    let size = document.querySelectorAll(".carta");
    switch (cuantas){
        case "4":
            ids = cuatro;
            shuffleIds();
            for( let i = 0; i < size.length; i++){
                size[i].dataset.id = ids[i] ;
            }
            break;

        case "8":
            ids = ocho;
            shuffleIds();
            for( let i = 0; i < size.length; i++){
                size[i].dataset.id = ids[i] ;
            }
            break;

        case "16":
            ids = diecises;
            shuffleIds();
            contenedor.style.gridTemplateColumns = "repeat(8, 1fr)";

         for( let i = 0; i < size.length; i++){
            size[i].style.width = "280px";
            size[i].dataset.id = ids[i] ;
        }
            break;

        case "32":
            ids = treientaYDos;
            shuffleIds();
            contenedor.style.gridTemplateColumns = "repeat(8, 1fr)";
            contenedor.style.gridTemplateRows = "repeat(4, 1fr)";

            for( let i = 0; i < size.length; i++){
                size[i].style.width = "280px";
                size[i].style.height = "280px";
                size[i].dataset.id = ids[i] ;
        }
            break;
} 


function shuffleIds(){
    let i,j,k;
    for (i = ids.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = ids[i - 1];
       ids[i - 1] = ids[j];
       ids[j] = k;


    }}

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', crearCartas);});  