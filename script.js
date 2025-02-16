let boutonTous = document.querySelector (".tab1");
let boutonCommun = document.querySelector (".tab2");
let boutonFA = document.querySelector (".tab3"); /*Creation de 4 variable distinct pour chaque bouton filtre  */
let boutonRare = document.querySelector (".tab4");
let tabs = document.querySelectorAll (".tab");
let CartesCommun = document.querySelectorAll (".Commun-carte");
let CartesRare = document.querySelectorAll (".Rare-carte"); /*Creation de 3 Node liste qui appele tout les division qui ont la class entre parenthese  */
let CartesFA = document.querySelectorAll(".Full-Art-carte");

// filtre commun 
boutonCommun.addEventListener ("click",function(){
    tabs.forEach((tab) => {
        tab.classList.remove('active-filtre'); /*retire la class active a tout les bouton pour enlever le fond bleu*/
    });
    CartesRare.forEach((CarteRare) => {
        CarteRare.classList.add('disapear'); /*Rajoute une class avec un display none a toutes les cartes rare */
    });  
    CartesCommun.forEach((CartesCommun) => {
        CartesCommun.classList.remove('disapear'); /*Enleve la class ajoutant le display none a toute les cartes commune situer dans une Nodelist */
    });  
    CartesFA.forEach((CarteFA) => {
        CarteFA.classList.add('disapear'); /*Rajoute une class avec un display none a toutes les cartes rare */
    });
    boutonCommun.classList.add('active-filtre');/*Met une class active sur le bouton commun afin de lui mettre un fond bleu  */
    });

   // filtre Rare
    boutonRare.addEventListener ("click",function(){
        tabs.forEach((tab) => {
            tab.classList.remove('active-filtre'); /*Meme principe que pour les cartes commune sauf qu'on enleve le display none au cartes rare  */
        });
        CartesRare.forEach((CarteRare) => {
            CarteRare.classList.remove('disapear');
        }); 
         CartesCommun.forEach((CartesCommun) => {
            CartesCommun.classList.add('disapear');
        });  
        CartesFA.forEach((CarteFA) => {
            CarteFA.classList.add('disapear');
        });
        boutonRare.classList.add('active-filtre');
        });

 // filtre Full art
boutonFA.addEventListener ("click",function(){
 tabs.forEach((tab) => {
    tab.classList.remove('active-filtre'); /*Meme principe que pour les cartes commune sauf qu'on enleve le display none au Full-Arts  */
 });
 CartesRare.forEach((CarteRare) => {
    CarteRare.classList.add('disapear');
}); 
 CartesCommun.forEach((CartesCommun) => {
    CartesCommun.classList.add('disapear');
});
CartesFA.forEach((CarteFA) => {
    CarteFA.classList.remove('disapear');
});  
 boutonFA.classList.add('active-filtre');
});
    
   boutonTous.addEventListener ("click",function(){
    tabs.forEach((tab) => {
       tab.classList.remove('active-filtre');/*Meme principe que pour les cartes commune sauf qu'on enleve le display none a tout les cartes */
    });
    CartesRare.forEach((CarteRare) => {
        CarteRare.classList.remove('disapear');
    });  
    CartesCommun.forEach((CartesCommun) => {
        CartesCommun.classList.remove('disapear');
    });  
    CartesFA.forEach((CarteFA) => {
        CarteFA.classList.remove('disapear');
    }); 
    boutonTous.classList.add('active-filtre');
   });
        
       



/*dark mode*/
let BoutonDark= document.querySelector("#dark");
let Page= document.querySelector("body");
let Top = document. querySelector("header");
let Traits = document.querySelector(".tra");/*cration de variable qui appele ici la class tra dans le DOM pour ensuite l'utiliser dans mon code */
let TopLeft = document.querySelector(".traits");
let filtre = document.querySelector(".filtre");
let sideBar = document.querySelector(".Depliable");


BoutonDark.addEventListener ("click",function(){ /*Lorsque le bouton darkmode est cliquer  */
Page.classList.toggle('dark-back');/*on ajoute des class css a chaque element afin de changer l'image du background et la couleur des text */
Top.classList.toggle('dark-haut');
filtre.classList.toggle('dark-filtre'); 
TopLeft.classList.toggle('haut-gauche-dark');/*meme principe partout  */
sideBar.classList.toggle('dark-side-bar'); 
});

/*Slider*/

let indexcarte = 0; /* n'est pas vraiment affecter a une carte*/
function slider_de_carte() {
   const cartes= document.querySelectorAll('.carte'); /* creation d'une liste */
    const totalCartes=cartes.length;    
    const deplacement=-indexcarte *530 ; /*ici on calcule de deplacement necessaire avec une valeur negatif car l'index des carte est toujours positif et qu'on souhaite deplacer la carte vers la gauche   */
    document.querySelector('.cartes').style.transform = `translateX(${deplacement}px)`; /*change le style css pour deplacer les carte du slider de leur taille (500px + le gap entre elles ici 30) */
}
function moveSlide(direction){/*Parametre direction est soit -1 pour la gauche  soit 1 pour la droite */
const cartes=document.querySelectorAll('.carte'); /*Creation d'une Nodelist avec toutes les cartes  */
  const totalCartes=cartes.length -1; /*Le total de Cartes est ici egal au nombre de carte present dans la Nodelist crée precedement (-1 car c'est un slider de 3 cartes et il va trops loins sinon) */
    indexcarte= (indexcarte+direction+totalCartes)%totalCartes; /*(calcul le reste, met a jour l'index pour avoir un slider circulaire*/  
    slider_de_carte();/*appele la fonction slider pour deplacer les carte selon l'index calculer   */
}

/*sideBar*/

let MenuMobile =document.querySelector(".tra") /* Bouton avec les 3 traits  */
let Depliant = document.querySelector(".Depliable")/*Menu depliant */

MenuMobile.addEventListener ("click",function(){ /* lorsque qu'on click sur les 3 traits  */
   Depliant.classList.toggle("menu-visible");/*On rajoute au menu depliant une class ccs lui permetant de passer l'opacité a 1 et changer sa position */
})

/*Modal echange*/
let PageEchange = document.querySelector(".echange-body") /*Page pour echanger dans le DOM */
let boutonEchange =document.querySelector(".echange-bouton")/*Bouton echanger en bas a droite du DOM */
let Croix = document.querySelector(".croix")/*Croix presente en haut a droite de ma page echanger dans le DOM */

boutonEchange.addEventListener('click', function() {/*Lorsque on click sur le bouton echanger */
    PageEchange.classList.add("apear")/*ajout d'une class CSS qui pour seul but d'ajouter un display Block */
});

Croix.addEventListener('click', function() {/*Lorsque on click sur la croix */
    PageEchange.classList.remove("apear");/*retire une class CSS qui pour seul but d'ajouter un display Block */
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


/*Stats carte */

let pickachu = document.querySelector(".pikachu")
let pagePickachu =  document.querySelector(".pickachu-page")

pickachu.addEventListener('click',function(){

pagePickachu.classList.remove("disapear")
})

pagePickachu.addEventListener('click',function(){

    pagePickachu.classList.add("disapear")
    })