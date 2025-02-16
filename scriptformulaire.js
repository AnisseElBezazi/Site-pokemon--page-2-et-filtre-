let BoutonDark= document.querySelector("#dark");
let Page= document.querySelector("body");
let Top = document. querySelector("header")
let Traits = document.querySelector(".tra")
let TopLeft = document.querySelector(".traits")
let filtre = document.querySelector(".filtre")
let sideBar = document.querySelector(".Depliable")


BoutonDark.addEventListener ("click",function(){
Page.classList.toggle('dark-back');
Top.classList.toggle('dark-haut');
TopLeft.classList.toggle('haut-gauche-dark');
sideBar.classList.toggle('dark-side-bar');
});




let form = document.querySelector("form");
   let variableemail= document.querySelector("#email"); /*Selectionne l'élement de mon id email et le met dans un variable nommé variablemail*/
   let variablePseudo= document.querySelector("#pseudo");/*meme principe */
   let variablePassword= document.querySelector("#password");
   let variablePassword2= document.querySelector("#password2");
   let ListeErreur = document.querySelector(".message-error ul");
   let SuccesMessage =document.querySelector(".message-succes ul");
form.addEventListener("submit",function(event){ 
    ListeErreur.innerHTML ='';
    SuccesMessage.innerHTML ='';
    Valid = true ;
    
    if (variablePseudo.value.trim().length<6){  /*verifie si le pseudo a moins de 6 caracter */
        variablePseudo.classList.remove("succes"); /*retire la classe succes a pseudo dans le html */
        variablePseudo.classList.add("error");/*ajoute la classe error a pseudo dans le html afin de modifier le css */
       ListeErreur.innerHTML += "<li>le pseudo doit comporter au moins 6 caractere<br></li>";
    }
    else{
        variablePseudo.classList.remove("error");/*retire la classe error a pseudo dans le html */
        variablePseudo.classList.add("succes");/*ajoute la classe succes a pseudo dans le html afin de modifier le css */
    }

    if(variableemail.value.trim()===""){  /*verifie si le mail est vide */
        variableemail.classList.remove("succes");
        variableemail.classList.add("error");
        ListeErreur.innerHTML += "<li>L'email est vide<br></li>";
    }
    else{
        variableemail.classList.remove("error");
        variableemail.classList.add("succes");
    }

    if (variablePassword.value.trim().length<8){  /*verifie si le mots de passe a au moins de 8 caracter */
        variablePassword.classList.remove("succes");
        variablePassword.classList.add("error");
        ListeErreur.innerHTML += "<li>Votre mots de passe doit contenir au moins 8 caracter<br></li>";
    }
    else{
        variablePassword.classList.remove("error");
        variablePassword.classList.add("succes");
    }

    if (variablePassword.value.trim() !== variablePassword2.value.trim()){  /*verifie si le mots de passeest identique */
        variablePassword2.classList.remove("succes");
        variablePassword2.classList.add("error");
        ListeErreur.innerHTML += "<li>Le mots de passe n'est pas identique<br></li>";
    }
    else{
        variablePassword2.classList.remove("error");
        variablePassword2.classList.add("succes");
    }
    if (variablePassword.value.trim() !==variablePassword2.value.trim() || variablePassword.value.trim().length<8 || variableemail.value.trim()==="" || variablePseudo.value.trim().length<6 ) {
        Valid= false  /*verifie si une condition est fausse*/
    }
    
    if (Valid==true) {
        SuccesMessage.innerHTML += "<li>Le fomulaire a ete remplie avec succes !<br></li>"; /*Rajoute une ligne dans le html dans le <ul> de la division message-succes*/
    }
    event.preventDefault();
})


/*sideBar*/

let MenuMobile =document.querySelector(".tra") /* Bouton avec les 3 traits  */
let Depliant = document.querySelector(".Depliable")/*Menu depliant */

MenuMobile.addEventListener ("click",function(){ /* lorsque qu'on click sur les 3 traits  */
   Depliant.classList.toggle("menu-visible");/*On rajoute au menu depliant une class ccs lui permetant de passer l'opacité a 1 et changer sa position */
})