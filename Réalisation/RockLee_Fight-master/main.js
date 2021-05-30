//===Fonction pour changer le Background image
// function terrain(){
//     var Terrains = ['url("images/arene.jpg")', 'url("images/terrain_de_Konoha.png")', 'url("images/terrain_de_Suna.png")'];
//     var EcranJeu = document.querySelector('.ecranjeu')
//     var Background_Terrains = Terrains[Math.floor(Math.random() * 3)];
//     EcranJeu.style.backgroundImage = Background_Terrains;
// }
//===Fonction pour musique
var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}
//pour revenir a "Play";
controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});
//===========================================Fonction pour le jeu
//bouton rejouer 
var Rejouer = document.getElementById('rejouer')
Rejouer.style.display = 'none'; //il ne s'affiche pas
//declarer les boutons 
var Boutons = document.querySelectorAll('button')
//déclare variable fond ecran 
var EcranJeu = document.querySelector('.ecranjeu')
//declare les variable des images
var Gaara_start = document.querySelector('.Gaara_start')
var Rocklee_start = document.querySelector('.Rocklee_start')
//declarer la div de vie et de nom
var vies_joueurs = document.querySelectorAll('.vies_joueurs')
//declare les variable des scores 
var Gaara_scoreSpan = document.getElementById('Gaara_score')
var Rocklee_scoreSpan = document.getElementById('Rocklee_score')
//declare les variable des resultats scores 
var Gaara_score = 5
var Rocklee_score = 5
//pour afficher mon score de départ
Rocklee_scoreSpan.textContent = Rocklee_score
Gaara_scoreSpan.textContent = Gaara_score
//déclarer le tableau d'élément [0,1]
var images_optionGaara = ['attaquer', 'defendre']
var images_optionRocklee = ['attaquer', 'defendre']
//j'ai donné le parametre à Gaarachoice de (i) puis concatener les images 'images/' + la var du tableur + png
//variable de GAARA (ordi)
var Gaara_choice = (g) =>{
     Gaara_start.src = 'images/gaara/' + images_optionGaara[g] + '.png'
     Gaara_start.value = images_optionGaara[g]
 }
//variable ROCKLEE (joueur)
var Rocklee_choice = (r) =>{
    Rocklee_start.src = 'images/rocklee/' + images_optionRocklee[r] + '.png'
    Rocklee_start.value = images_optionRocklee[r]
    compareSkills()
}
//math.floor =  arrondir le math.random qui est normalement à virgule
function attaquer() {
     Gaara_choice(Math.floor(Math.random() * 2))
     Rocklee_choice(0)
     setTimeout(backtoposition, 1000); //(fonction, miliseconde) 
 }
function defendre() {
    Gaara_choice(Math.floor(Math.random() * 2))
    Rocklee_choice(1)
    setTimeout(backtoposition, 1000);
 }
 function backtoposition() {
    Gaara_start.src = 'images/gaara/gaara1.png'
    Rocklee_start.src = 'images/rocklee/rocklee1.png'
 }
  
// //Modèle de coeurs
// const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
// const coeurPlein = '<ion-icon name="heart"></ion-icon>';
//FOnction pour comparer les skills des joueurs
var compareSkills = () => {
    if(Rocklee_start.value == 'attaquer'){
        if(Gaara_start.value == 'defendre'){
            Rocklee_score -= 1 //si rock lee attaque et que gaara se defend, rock lee perd 1 point
        }
        else if (Gaara_start.value == 'attaquer'){
            Gaara_score -= 1 //si les deux joueurs attaquent en meme temps ils perdent 1 point
            Rocklee_score -= 1
        }
    }
    if(Rocklee_start.value == 'defendre'){
        if(Gaara_start.value == 'defendre'){
            Gaara_score += 0 // si les deux joueurs se defendent ils ne se passe rien
            Rocklee_score += 0 
        }
        else if (Gaara_start.value == 'attaquer'){
            Gaara_score -= 1 //si rock lee se defend et gaara attaque, gaara perd 1 point
        }
    }
    //Remettre pour actualiser les scores à chaque attaque
    Rocklee_scoreSpan.textContent = Rocklee_score
    Gaara_scoreSpan.textContent = Gaara_score
    //déclaration si scrore atteint 0 alors il perd
    if(Gaara_score == 0 || Rocklee_score == 0){
        GameOver()
    }
}

//déclarer fonction GameOver
function GameOver() {
    Gaara_start.style.visibility = 'hidden'; //pour que l'image s'efface tout en gardant l'espace de la div
    Rocklee_start.style.visibility = 'hidden'; //pour que l'image s'efface tout en gardant l'espace de la div
    for(i = 0; i < vies_joueurs.length; i++) { //on a fait une boucle car il y'a plusieur class du meme nom 'vies_joueurs'
        let divVies = vies_joueurs[i];
        divVies.style.visibility = 'hidden'; 
    } 
    for(i = 0; i < Boutons.length; i++) { //on a fait une boucle car il y'a plusieur type du meme nom 'boutons'
        let BoutonsAll = Boutons[i];
        BoutonsAll.disabled = true; //enlever leurs fonctionnement (on ne pourra plus cliquer sur les boutons)
    } 
    if (Rocklee_score == 0) {
        EcranJeu.classList.add("youloose"); //on a créer une class dans le CSS et on l'affiche au score 0
    } else {
        EcranJeu.classList.add("youwin");
    }
    Rejouer.style.display = 'block'; 
    Rejouer.disabled = false; // le bouton 'rejouer' est activer et visible
    Rejouer.addEventListener('click', NewGame) //ce qui declance une nouvelle fonction rejouer qui remet tout a zero
}
//declarer nouvelle partie et remettre toute nos variable en visible (elles etaient caché pour la fonction GameOver)
function NewGame() {
    Gaara_score = 5
    Rocklee_score = 5
    Rocklee_scoreSpan.textContent = Rocklee_score
    Gaara_scoreSpan.textContent = Gaara_score
    Gaara_start.style.visibility = 'visible'; 
    Rocklee_start.style.visibility = 'visible';
    for(i = 0; i < vies_joueurs.length; i++) { 
        let divVies = vies_joueurs[i];
        divVies.style.visibility = 'visible';
    } 
    for(i = 0; i < Boutons.length; i++) { 
        let BoutonsAll = Boutons[i];
        BoutonsAll.disabled = false;
    } 
    EcranJeu.classList.remove("youloose", "youwin"); //on enleve les background loose et win pour remettre le fond de base
    Rejouer.style.display = 'none'; //on fait disparaitre le bouton rejouer
}