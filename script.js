let boutonTous = document.querySelector (".tab1");
let boutonCommun = document.querySelector (".tab2");
let boutonFA = document.querySelector (".tab3");
let boutonRare = document.querySelector (".tab4");
let tabs = document.querySelectorAll (".tab");
let CartesCommun = document.querySelectorAll (".Commun-carte");
let CartesRare = document.querySelectorAll (".Rare-carte");
let CartesFA = document.querySelectorAll(".Full-Art-carte");

// filtre commun 
boutonCommun.addEventListener ("click",function(){
    tabs.forEach((tab) => {
        tab.classList.remove('active-filtre');
    });
    CartesRare.forEach((CarteRare) => {
        CarteRare.classList.add('disapear');
    });  
    CartesCommun.forEach((CartesCommun) => {
        CartesCommun.classList.remove('disapear');
    });  
    CartesFA.forEach((CarteFA) => {
        CarteFA.classList.add('disapear');
    });
    boutonCommun.classList.add('active-filtre');
    });

   // filtre Rare
    boutonRare.addEventListener ("click",function(){
        tabs.forEach((tab) => {
            tab.classList.remove('active-filtre');
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
    tab.classList.remove('active-filtre');
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
       tab.classList.remove('active-filtre');
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
let Top = document. querySelector(".haut")
let Traits = document.querySelector(".tra")
let TopLeft = document.querySelector(".traits")


BoutonDark.addEventListener ("click",function(){
Page.classList.toggle('dark-body');
Top.classList.toggle('dark-haut');
TopLeft.classList.toggle('haut-gauche-dark');
});


let indexcarte = 0; /* n'est pas vraiment affecter a une carte*/
function slider_de_carte() {
   const cartes= document.querySelectorAll('.carte'); /* creation d'une liste */
    const totalCartes=cartes.length;    
    const deplacement=-indexcarte *530 ;
    document.querySelector('.cartes').style.transform = `translateX(${deplacement}px)`;

    cartes.forEach((carte) => {
        carte.classList.remove('active');
    });
        cartes[indexcarte+1].classList.add('active'); /* l'indexcarte est utilser ici pour naviguer dans la Nodeliste cartes*/
        
    }

function moveSlide(direction){
const cartes=document.querySelectorAll('.carte');
  const totalCartes=cartes.length -1;
    indexcarte= (indexcarte+direction+totalCartes)%totalCartes; //(calcul le reste, met a jour l'index pour avoir un slider circulaire  
    slider_de_carte();
}






