"use strict";
let tr = document.querySelector('#valider');
console.log(tr);


let body=document.querySelector('body');

function recup(e){
    e.preventDefault(); /*empecher le refresh auto*/
    let nom=document.getElementById('nom').value;
    console.log(nom);
    let mdp=document.getElementById('mdp').value;
    console.log(mdp);
    let mail=document.getElementById('mail').value;
    console.log(mail);

    let radiogenre=document.querySelectorAll('input[name="genre"]')
    let genre = ""
    for(let i = 0; i< radiogenre.length; i++) {
        if(radiogenre[i].checked){
            genre= radiogenre[i].value
            break;
        }
    }
    console.log(genre)

    /* recup données liste pays */
    let select=document.querySelector('#liste');
    let selectValue=select.value;
    console.log(selectValue);

    /* recup données du genre */
    let genreHomme = document.getElementById("h");
    let genreFemme = document.getElementById("f");
    let genreError = document.getElementById("genreError");

    if (!genreHomme.checked && !genreFemme.checked) {
        genreError.textContent = "Veuillez sélectionner un genre.";
        genreError.classList.add("error");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        genreError.textContent = "";
        genreError.classList.remove("error");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }
    
    const newsletter = document.querySelector('#abonnement'); // donne true si la case est cochée et false si elle ne l'est pas
    console.log(newsletter.checked);

    let motDePasseError=document.getElementById("motDePasseError");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;


    if (!regex.test(!mdp)) {
        motDePasseError.textContent = "Le mot de passe ne respecte pas les critères requis.";
        motDePasseError.classList.add("error");
        mdp.classList.add("error-input");
        body.classList.add("error");
    } else {
        motDePasseError.textContent = "";
        motDePasseError.classList.remove("error");
        mdp.classList.remove("error-input");
        body.classList.remove("error");
    }

} //le code pour le mot de passe ne marche pas et je comprend pas pourquoi mais il ne reconnait pas ma variable motDePasseError et le "textcontent", du coup il n'y a pas de message d'erreur ou de restriction pour le mot de passe mais au moins j'arrive à récupérer la donnée.
tr.addEventListener("click",recup)

let bt=document.querySelector('button'); //darkmode
console.log(bt);

let interrupteur=0; 
function backgroundC(){
    let body=document.querySelector('body');
    if  (interrupteur==0){
        body.style.background='darkslategrey';
        interrupteur=1;
        body.style.color='white';
    }else{
        body.style.background='white';
        body.style.color='black';
        interrupteur=0;
    
    }
}
bt.addEventListener("click",backgroundC);

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
    console.log("menu ouvert");
}

