let inputNom=document.querySelector('#nom');
let inputLogin = document.querySelector('#login');
inputNom.addEventListener('keyup',function(event)
{
    console.log('Touche nom relâchée');
    let afficheNom=document.querySelector('#affiche-nom');
    afficheNom.textContent=inputNom.value;
    let erreur=document.querySelector('#erreur-nom');
    let te = /^[a-zA-Z' ]+$/.test(inputNom.value);
    let s = inputNom.value;
    s = s.toLowerCase();
    s = s.replace(/[^a-z]/g, "-")
    inputLogin.value = s;
    if(te===true){erreur.style.opacity=0;}
    else{erreur.style.opacity=1;}

});

let inputMail = document.querySelector("#mail");
inputMail.addEventListener('keyup', function (event){
    console.log("Touche mail relâchée");
    let e = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputMail.value);
    let errmail = document.querySelector("#erreur-mail")
    if(e === true){errmail.style.opacity=0;}
    else {errmail.style.opacity=1;}
})

let inputPass = document.querySelector("#pass");
inputPass.addEventListener('keyup', function (event){
    console.log("Touche mot de passe relâchée");
    let c = inputPass.value;
    let erreurmdp = document.querySelector("#erreur-pass");
    if(c.length<6){erreurmdp.style.opacity=1;}
    else {erreurmdp.style.opacity=0;}
});

let inputConfi = document.querySelector("#confi")
inputConfi.addEventListener('keyup', function (event){
    console.log("Touche confirmation relâchée");
    let d = inputConfi.value;
    let erreurconfi = document.querySelector("#erreur-confi")
    if(inputPass.value===d){erreurconfi.style.opacity=0;}
    else {erreurconfi.style.opacity=1;}
});

//let erreur = document.querySelector("#erreur-login");
//if(inputLogin.value.length >= 1){erreur.style.opacity=0;}
//else{erreur.style.opacity=1;}


