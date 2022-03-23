



let nombre_juste = Math.random()*10;
nombre_juste = Math.ceil(nombre_juste);
let nbCoup = 0;

// Pour tricher : 
console.log(nombre_juste);


// Récupérer la saisie utilisateur 
let formulaire = document.devinette;
let essai = document.getElementById(`essai`);

// Variable pour la div erreur
let afficherErreur = document.getElementById(`erreur`);

// EVENT = Vérifier la saisie de l'utilisateur avant submit
essai.addEventListener(`keyup`, function(e){

    //On enlève les espaces
    let saisieUser = this.value.trim();

    // Saisie empty, saisie autre qu'un nombre, saisie convertie en number, saisie différent de entier
    if(saisieUser === `` || isNaN(saisieUser) || parseInt(saisieUser) < 1 || parseInt(saisieUser) > 10 
    // || !Number.isInteger(saisieUser)
    ){

        // La div erreur apparait
        afficherErreur.removeAttribute(`hidden`);
        afficherErreur.className = `erreur-saisie`;
        this.style.borderColor = 'red';
        this.style.borderStyle = `solid double`;
        

    }else{
        console.log(`Si vous regardez ici c'est que vous trichez...`);
    }
});

// EVENT = Vérifier la saisie de l'utilisateur après submit
formulaire.addEventListener(`submit`, function(event) {

    event.preventDefault();
    nbCoup++;

    // Créer la div réponse
    let divReponse = document.createElement(`div`);
    divReponse.setAttribute(`id`, `reponse`);

    // Placer la div réponse
    let divContainer = document.getElementById(`container`);
    divContainer.appendChild(divReponse);


    if (essai.value < nombre_juste) {

        divReponse.className = `essaye-encore`;
        divReponse.innerText = `Coup n°${nbCoup}, vous avez tenté le nombre ${essai.value} mais c'est plus grand`;

    } else if (essai.value > nombre_juste) {
        divReponse.className = `essaye-encore`;
        divReponse.innerText = `Coup n°${nbCoup}, vous avez tenté le nombre ${essai.value} mais c'est plus petit`;

    } else {
        divReponse.className = `bravo`;
        divReponse.innerText = `Bravo vous avez réussi à trouver ${nombre_juste} en ${nbCoup} coups`;
    }
});