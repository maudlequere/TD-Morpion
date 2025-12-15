// ligne haut Cases

const ligneHautCase1 = document.querySelector("#ligne-haut .case-1");
const ligneHautCase2 = document.querySelector("#ligne-haut .case-2");
const ligneHautCase3 = document.querySelector("#ligne-haut .case-3");

ligneHautCase1.addEventListener("click",tourDeJeu);
ligneHautCase2.addEventListener("click",tourDeJeu);
ligneHautCase3.addEventListener("click",tourDeJeu);

// ligne Milieu Cases

const ligneMilieuCase1 = document.querySelector("#ligne-milieu .case-1");
const ligneMilieuCase2 = document.querySelector("#ligne-milieu .case-2");
const ligneMilieuCase3 = document.querySelector("#ligne-milieu .case-3");

ligneMilieuCase1.addEventListener("click",tourDeJeu);
ligneMilieuCase2.addEventListener("click",tourDeJeu);
ligneMilieuCase3.addEventListener("click",tourDeJeu);

// ligne Bas Cases

const ligneBasCase1 = document.querySelector("#ligne-bas .case-1");
const ligneBasCase2 = document.querySelector("#ligne-bas .case-2");
const ligneBasCase3 = document.querySelector("#ligne-bas .case-3");

ligneBasCase1.addEventListener("click",tourDeJeu);
ligneBasCase2.addEventListener("click",tourDeJeu);
ligneBasCase3.addEventListener("click",tourDeJeu);

// marquage du joueur qui joue et score joueurs

const aQuiLeTour = document.querySelector("header p");
const scoreJoueur1 = document.querySelector("#action #score .joueur-1 span");
let total1 = 0;
scoreJoueur1.textContent = total1
const scoreJoueur2 = document.querySelector("#action #score .joueur-2 span");
let total2 = 0;
scoreJoueur2.textContent = total2

// continuer ou arrêter
const rejouer = document.querySelector(".rejouer");
const reinitialiser = document.querySelector(".reinitialiser");

// Fonction pour déterminer le gagnant
function quiGagnant(ligne){
    const toutesLesCases = document.querySelectorAll("td");
    function enleverListener(){
        for (const element of toutesLesCases){
            element.removeEventListener("click",tourDeJeu);
        }
    }
    if(ligne.textContent=="🍄"){
        aQuiLeTour.textContent="Le joueur 1 a gagné";
        console.log(`Joueur 1 vainqueur`);
        alert(`Joueur 1 vainqueur`);
        total1 = total1 + 1;
        scoreJoueur1.textContent = `${total1}`;
        enleverListener();
    }
    else{
        aQuiLeTour.textContent="Le joueur 2 a gagné";
        console.log(`Joueur 2 vainqueur`);
        alert(`Joueur 2 vainqueur`);
        total2 = total2 + 1;
        scoreJoueur2.textContent = `${total2}`;
        enleverListener();
        }
}

function verificationGagnant(){
     // Pour les lignes
    if (ligneBasCase1.textContent == ligneBasCase2.textContent && ligneBasCase2.textContent==ligneBasCase3.textContent && ligneBasCase1.textContent!=""){
       quiGagnant(ligneBasCase1);
    }
    if (ligneMilieuCase1.textContent == ligneMilieuCase2.textContent && ligneMilieuCase2.textContent==ligneMilieuCase3.textContent && ligneMilieuCase1.textContent!=""){
        quiGagnant(ligneMilieuCase1);
    }
    if (ligneHautCase1.textContent == ligneHautCase2.textContent && ligneHautCase2.textContent==ligneHautCase3.textContent && ligneHautCase1.textContent!=""){
       quiGagnant(ligneHautCase1);
     }

    // Pour les colonnes 
    if (ligneBasCase1.textContent==ligneHautCase1.textContent && ligneHautCase1.textContent==ligneMilieuCase1.textContent && ligneBasCase1.textContent!=""){
        quiGagnant(ligneBasCase1);
    }
    if (ligneBasCase2.textContent==ligneHautCase2.textContent && ligneHautCase2.textContent==ligneMilieuCase2.textContent && ligneBasCase2.textContent!=""){
        quiGagnant(ligneBasCase2);
    }
    if (ligneBasCase3.textContent==ligneHautCase3.textContent && ligneHautCase3.textContent==ligneMilieuCase3.textContent && ligneBasCase3.textContent!=""){
        quiGagnant(ligneBasCase3);
    }
    // Pour les diagonales
    if (ligneHautCase1.textContent==ligneMilieuCase2.textContent && ligneMilieuCase2.textContent==ligneBasCase3.textContent && ligneHautCase1.textContent!=""){
        quiGagnant(ligneHautCase1);
    }
    if (ligneHautCase3.textContent==ligneMilieuCase2.textContent && ligneMilieuCase2.textContent==ligneBasCase1.textContent && ligneHautCase3.textContent!=""){
        quiGagnant(ligneHautCase3);
    }
}

// Mise en place du jeu

let joueur1 = "True";
let tour = 0;
aQuiLeTour.textContent ="A toi de jouer: 🍄";
let jouer = "True"
const tableau = document.querySelector("table");

function tourDeJeu(event){
    if (joueur1 == "True") {
        tour = tour + 1;
        joueur1 = "False";
        const croix = document.createElement("p");
        croix.textContent = "🍄";
        croix.classList.add("symbole");
        event.target.append(croix);
        event.target.removeEventListener("click",tourDeJeu);   
        console.log(`Tour du joueur 1 : ${tour}`);
        aQuiLeTour.textContent ="A toi de jouer: 🍁";
        verificationGagnant()
    }
    else {
        tour = tour + 1;
        joueur1 = "True";
        const cercle = document.createElement("p");
        cercle.textContent = "🍁";
        cercle.classList.add("symbole");
        event.target.append(cercle);
        event.target.removeEventListener("click",tourDeJeu);
        console.log(`Tour du joueur 2 : ${tour}`);
        aQuiLeTour.textContent ="A toi de jouer: 🍄";
        verificationGagnant()
    }
    if (tour == 9){
        aQuiLeTour.textContent ="La partie est nulle !";
        console.log("fin de partie"); 
    }

    rejouer.addEventListener("click",recommencer);
    reinitialiser.addEventListener("click",function(){total1=0;total2=0;recommencer();console.log("score réinitialisé");
    });
}

// fonction pour recommencer la partie

function recommencer(){
    scoreJoueur1.textContent = total1; 
    scoreJoueur2.textContent=total2;
    ligneHautCase1.addEventListener("click",tourDeJeu);
    ligneHautCase2.addEventListener("click",tourDeJeu);
    ligneHautCase3.addEventListener("click",tourDeJeu);
    ligneMilieuCase1.addEventListener("click",tourDeJeu);
    ligneMilieuCase2.addEventListener("click",tourDeJeu);
    ligneMilieuCase3.addEventListener("click",tourDeJeu);
    ligneBasCase1.addEventListener("click",tourDeJeu);
    ligneBasCase2.addEventListener("click",tourDeJeu);
    ligneBasCase3.addEventListener("click",tourDeJeu);
    const symbole = document.querySelectorAll("td p");
    for (const element of symbole) {
        element.remove()
    }  
    joueur1 = "True";
    tour = 0;
    aQuiLeTour.textContent ="A toi de jouer: 🍄";
}
