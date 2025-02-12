/*dark mode*/
let BoutonDark= document.querySelector("#dark");
let Page= document.querySelector("body");
let Top = document. querySelector("header");
let Traits = document.querySelector(".tra") ;/*cration de variable qui appele ici la class tra dans le DOM pour ensuite l'utiliser dans mon code */
let TopLeft = document.querySelector(".traits");
let filtre = document.querySelector(".filtre");
let sideBar = document.querySelector(".Depliable");
let boosters = document.querySelectorAll(".booster");

BoutonDark.addEventListener ("click",function(){ /*Lorsque le bouton darkmode est cliquer  */
   boosters.forEach((booster) => {
      booster.classList.toggle('dark-filtre'); 
  });
Page.classList.toggle('dark-back');/*on ajoute des class css a chaque element afin de changer l'image du background et la couleur des text */
Top.classList.toggle('dark-haut');
TopLeft.classList.toggle('haut-gauche-dark');/*meme principe partout  */
sideBar.classList.toggle('dark-side-bar'); 
});


let MenuMobile =document.querySelector(".tra"); /* Bouton avec les 3 traits  */
let Depliant = document.querySelector(".Depliable");/*Menu depliant */

MenuMobile.addEventListener ("click",function(){ /* lorsque qu'on click sur les 3 traits  */
   Depliant.classList.toggle("menu-visible");/*On rajoute au menu depliant une class ccs lui permetant de passer l'opacité a 1 et changer sa position */
})

/*Simulation booster pokemon */
let boutonBooster = document.querySelector(".bouton-ouverture-booster");
let cartes = document.querySelectorAll(".carte");

boutonBooster.addEventListener("click",function(){
   
let aleatoire =Math.random();
let rarete ;

if(aleatoire > 0.3){
rarete = "Commun-carte"
}
else if (aleatoire<0.3 && aleatoire>0.1) {
rarete = "Full-Art-carte"
}
else {
rarete = "Rare-carte"
}

cartes.forEach((carte) => {
   carte.classList.add('disapear'); 
   
});


let cartesFiltrees = document.querySelectorAll(`.carte.Commun-carte`);
    let carteTiree = cartesFiltrees[Math.floor(Math.random() * cartesFiltrees.length)];
    
        carteTiree.classList.remove('disapear');
        



        let cartesFiltrees2 = document.querySelectorAll(`.carte.${rarete}`);
    let carteTiree2 = cartesFiltrees2[Math.floor(Math.random() * cartesFiltrees2.length)];
        carteTiree2.classList.remove('disapear');
        console.log(carteTiree2)

        
        let cartesFiltrees3 = document.querySelectorAll(`.carte.Commun-carte`);
    let carteTiree3 = cartesFiltrees3[Math.floor(Math.random() * cartesFiltrees3.length)];
    carteTiree3.classList.remove('disapear');
    console.log(carteTiree3)

    /*permet de regler un bug dans lequel les cartes tiré sont les meme donc il y a une carte en moins dans le booster */
    if (carteTiree === carteTiree2 || carteTiree === carteTiree3 || carteTiree2 === carteTiree3){ /*verifie si une des cartes est identique en les comparant  */
      
      cartes.forEach((carte) => {
         carte.classList.add('disapear'); /*fait disparaitre tout les cartes  */
         
      });
      let carteTiree = cartesFiltrees[Math.floor(Math.random() * cartesFiltrees.length)]; /*genere un indice aleatoire d'un nombre entier grace au floore qui arrondie */
          carteTiree.classList.remove('disapear');

          
          let carteTiree2 = cartesFiltrees2[Math.floor(Math.random() * cartesFiltrees2.length)];
        carteTiree2.classList.remove('disapear');

        let carteTiree3 = cartesFiltrees3[Math.floor(Math.random() * cartesFiltrees3.length)];
    carteTiree3.classList.remove('disapear');
          

    if (carteTiree === carteTiree2 || carteTiree === carteTiree3 || carteTiree2 === carteTiree3){
      
      cartes.forEach((carte) => {
         carte.classList.add('disapear'); 
         
      });
      let carteTiree = cartesFiltrees[Math.floor(Math.random() * cartesFiltrees.length)];
          carteTiree.classList.remove('disapear');

          
          let carteTiree2 = cartesFiltrees2[Math.floor(Math.random() * cartesFiltrees2.length)];
        carteTiree2.classList.remove('disapear');

        let carteTiree3 = cartesFiltrees3[Math.floor(Math.random() * cartesFiltrees3.length)];
    carteTiree3.classList.remove('disapear');
          

    }


    }

   
    console.log(carteTiree)
})




cartes.forEach((carte) => {
   carte.classList.add('disapear'); 
});



/*Favoris*/


document.querySelectorAll('.carte').forEach(carte => {
   const nonFavoris = carte.querySelector('.non-favoris img'); /*Pour chaque carte on selectionne l'image de la class non-favoris */

   nonFavoris.addEventListener('click', function() { /*Lorsqu'on click sur un coeur  */
       
       if (nonFavoris.getAttribute('src') === 'image/coeur-vide.png') {/*Si le src de ma class nonFavoris est l'image de coeur vide */
           nonFavoris.setAttribute('src', 'image/coeur-plein.png'); /*Alors je modifie le src de ma class par une image de coeur plein   */
           nonFavoris.classList.add('opaciterMax'); /*et je met l'opacité au max pour que celui ci ne soit pas affecter par le hover */
       } else {
           nonFavoris.setAttribute('src', 'image/coeur-vide.png');  /*sinon je remplace le src par une image de coeur vide */
           nonFavoris.classList.remove('opaciterMax');/*j'enleve l'opacité au max par default pour que le coeur vide apparait seulement quand on passe au dessus d'une carte */
       }
   });
});