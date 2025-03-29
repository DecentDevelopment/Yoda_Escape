/* Vie et Forcce */


window.addEventListener('load',()=>{
const Carac = document.getElementById("Carac");

document.getElementById("force_output").textContent = 'Force : '+(50-Carac.value);
document.getElementById("vie_output").textContent = 'Vie : '+(50+parseInt(Carac.value));

Carac.addEventListener("input", function () {
    document.getElementById("force_output").textContent = 'Force : '+(50-Carac.value);
    document.getElementById("vie_output").textContent = 'Vie : '+(50+parseInt(Carac.value));
});

});




/* Création d'une variable contenant les caractéristiques du personnage */

var perso = {
  force : 50,
  vie : 50,
};

/*Skin*/

yodaSkin = 'pixel-yoda-vert-a0.png'
a1 = new Image; a1.src = 'pixel-yoda-vert-a0.png'; 
a2 = new Image; a2.src = 'pixel-yoda-rouge-a0.png';


function im(image) {
  yodaSkin = eval(image + ".src");
  document.getElementById('skin-view').src = yodaSkin
  document.getElementById('skin').src = yodaSkin
}


/*Animation ... */





/* L'image de base a été crée avec Tiled, sur une base de 16 pixels
de côté par tuile, et sur une carte de 10x10 tuiles*/

const BASE_TILE = 16;
const XTILE = 10;
const YTILE = 10;

/* Calculs des constantes nécessaires pour l'utilisation du contexte */
const canvas = document.getElementById("dungeon");
const ctx = canvas.getContext("2d");

const CTX_WIDTH = canvas.width;
const CTX_HEIGHT = canvas.height;
const SCALEX = CTX_WIDTH/XTILE;
const SCALEY = CTX_HEIGHT/YTILE;

ctx.fillStyle = "black";
ctx.fillRect(0,0, CTX_WIDTH, CTX_HEIGHT);

/* Fonction de chargement d'une image, basée sur une promesse */
const loadImage = (url) => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', (err) => reject(err));
    img.src = url;
  });

/* fonction traçant la carte et le personnage dans le canvas, avec le brouillard */
function draw(cx, cy){
ctx.reset();

ctx.fillStyle = "#171929";
ctx.fillRect(0,0, CTX_WIDTH, CTX_HEIGHT);

loadImage("Dungeon.png").then(
img1 => {
    loadImage(yodaSkin).then(
        img2 => {
            ctx.beginPath();
            ctx.arc(SCALEX*(cx+0.5), SCALEY*(cy+0.5), SCALEX*2, 0, 6.28, false); //draw the circle
            ctx.clip(); //call the clip method so the next render is clipped in last path
            ctx.stroke();
            ctx.closePath();
            
            
            ctx.drawImage(img1,0,0, CTX_WIDTH, CTX_HEIGHT);
            ctx.drawImage(img2,SCALEX*cx,SCALEY*cy, SCALEX, SCALEY);
            ctx.beginPath();
            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 4;
            ctx.arc(SCALEX*(cx+0.5), SCALEY*(cy+0.5), SCALEX*2-2, 0, 6.28, false); 
            ctx.stroke();
            ctx.closePath();

        }
    )
}
);
};


/*Bouton*/


let buttonStart = document.body.querySelector('button');
	buttonStart.addEventListener('click',hideMain)

function hideMain(){
	document.getElementById('main').style.display = 'None';
	document.getElementById('level').style.display = 'flex';
	document.getElementById('info').style.display = 'None';
    document.getElementById('sabre').style.display = 'None';
    document.getElementById('game-over').style.display = 'None';
    document.getElementById('win').style.display = 'None';

  perso.vie =  document.getElementById("vie").textContent = (50+parseInt(Carac.value));
  perso.force = document.getElementById("force").textContent = (50-Carac.value);

  levels = generate_levels();
  set_level(0);
}

let buttonHome = document.getElementById('icon-1');
	buttonHome.addEventListener('click',showMain)

function showMain(){
	document.getElementById('main').style.display = 'block';
	document.getElementById('level').style.display = 'None';
	document.getElementById('info').style.display = 'None';
    document.getElementById('sabre').style.display = 'None';
    document.getElementById('game-over').style.display = 'None';
    document.getElementById('win').style.display = 'None';

  levels = generate_levels();
  set_level(0);
}

let buttonInfo = document.getElementById('icon-2');
	buttonInfo.addEventListener('click',showInfo)

function showInfo(){
	document.getElementById('main').style.display = 'None';
	document.getElementById('level').style.display = 'None';
	document.getElementById('info').style.display = 'block';

  levels = generate_levels();
  set_level(0);
}

/* Création d'une variable contenant les différents éléments du jeu */

let levels = new Map();



/* Niveau */


function generate_levels(){
    levels.set(666,{
        x : -10,
        y : -10,
        action : [['reset',10]],
        monster : null,
        text : ["La force n'était pas avec toi aujourd'hui, réessaye une nouvelle fois."],
        choices : [["Recommencer", 0]]

        });

    levels.set(0,{
        x : 4.9,
        y : 9,
        action : null,
        monster : null,
        text : ["Bienvenue dans l'Exécutor, le vaisseau de Dark Vador. Yoda tu as "+perso.force+" de force et "+perso.vie+" points de vie.",
        " Tu te trouves dans une cellule surveillée par un stormtrooper, tu dois t'échapper de cette cellule.",
        " Que veux-tu faire ?"],
        choices : [["Utiliser la persuasion de force sur le stormtrooper pour qu'il te laisse sortir.", 1],
                ["Menacer le stormtrooper de le jeter au Sarlacc si il ne vous laisse pas sortir immédiatement.", 2]],
        });
		
		
        levels.set(2,{
        x : 4.9,
        y : 9,
        action : [['perte_vie', 20]],
        monster : null,
        text : ["Le stormtrooper n'a pas trop aimer ta menace et t'a donc légèrement corriger. Vous avez perdu 20 de vie. Mieux vaut ne pas le menacer une nouvelle fois."],
        choices : [["Essayer autre chose.", 3]],
        });
		
		
		    levels.set(3,{
        x : 4.9,
        y : 9,
        action : null,
        monster : null,
        text : ["Bienvenue dans l'Exécutor, le vaisseau de Dark Vador. Yoda tu as "+perso.force+" de force et "+perso.vie+" points de vie.",
        " Tu te trouves dans une cellule surveillée par un stormtrooper, tu dois t'échapper de cette cellule.",
        " Que veux-tu faire ?"],
        choices : [["Utiliser la persuasion de force sur le stormtrooper pour qu'il te laisse sortir.", 1]],
        });
		
		

    levels.set(1,{
        x : 4.9,
        y : 6.65,
        action : null,
        monster : null,
        text : ['Bravo vous vous êtes échappé de votre cellule! Maintenant trouvez votre sabre laser. Devant vous il y a 3 portes, choisissez bien quelle porte vous voulez ouvrir.',
        " Que veux tu faire ?"],
        choices : [["Ouvrir la porte de gauche", 4],
                ["Ouvrir la porte du milieu", 666],
                ["Ouvrir la porte de droite", 5]], 
        });
		
    levels.set(5,{
        x : 6.25,
        y : 4.8,
        action : null,
        monster : null,
        text : ["Devant toi se trouve un flacon avec un liquide à l'intérieur, veux-tu le boire ?"],
        choices : [["Boire une gorgée", 6],
                    ["Boire tout le flacon", 666],
                ["Sortir", 1]]
        });

        levels.set(6,{
            x : 6.25,
            y : 4.8,
            action : [['gain_force', 20]],
            monster : null,
            text : ["Vous vous sentez plus fort !"],
            choices : [["Sortir", 1],
                        ["Boire tout le flacon", 666]]
            });
		


    levels.set(4,{
        x : 2,
        y : 5.4,
        action : [['sabre', 10]],
        monster : null,
        text : ["Super tu as récupéré ton sabre, mais attends... Oh non, la porte derrière toi c'est fermé",
        " Que veux tu faire ?"],
        choices : [["Jouer avec son sabre", 7],
                    ["Ouvrir la porte", 8]]
        });

        levels.set(7,{
            x : 2,
            y : 5.4,
            action : [['perte_vie', 10]],
            monster : null,
            text : ["Aie, vous vous êtes blessé !"],
            choices : [["Ouvrir la porte", 8]]
            });
		
		
    levels.set(8,{
        x : 2,
        y : 3,
        action : null,
        monster : null,
        text : ["Oh oh, un Rancor se trouve juste devant toi, comment vas-tu faire pour t'en sortir ?"],
        choices : [["L'affronter vaillament à l'aide de votre sabre", 9],
                    ["Tenter de le calmer", 10]] 
        });

        levels.set(9,{
            x : 2,
            y : 3,
            action : [['perte_vie', 10]],
            monster : null,
            text : ["Bien joué tu l'a vaincu, maintenant tu n'a qu'une seule issue face à toi."],
            choices : [["Ouvrir la sombre porte", 13]]
            });

            levels.set(10,{
                x : 2,
                y : 3,
                action : [['perte_force', 30]],
                monster : null,
                text : ["Cela n'a pas fonctionné ! Il a eu le temps d'avaler votre sabre !"],
                choices : [["Combattre avec la Force", 11],
                            ["Esquiver l'attaque du Rancor",666]]
                });

                levels.set(11,{
                    x : 2,
                    y : 3,
                    action : [['perte_vie', 10]],
                    monster : null,
                    text : ["Bien joué tu l'a vaincu, maintenant tu n'a qu'une seule issue face à toi."],
                    choices : [["Ouvrir la sombre porte", 13]]
                    });


    levels.set(13,{
        x : 2.8,
        y : 1.2,
        action : null,
        monster : null,
        text : final_boss(),
        choices : [["Fuire pour essayer d'échapper au Seigneur Vador.", 666],
                    ["Tu l'affrontes en utilisant la force.", 14],
                    ["Tu l'affrontes avec de nouvelles techniques de combat.", 666]] 
        });
		
		
	levels.set(14,{
        x : 2.8,
        y : 1.2,
        action : null,
        monster : null,
        text : ['Bravo tu as tué Dark Vador'],
        choices : [["Continuer.", 15]],
        });
	

    levels.set(15,{
        x : 2.8,
        y : 1.2,
        action : [['win',10]],
        monster : null,
        text : ["Bravo tu as survécu et a trouvé la capsule de sauvetage pour s'échapper du vaisseau."],
        choices : null,
        });


    return levels;
}


/* Utilisation des niveaux */

function set_level(n){
    if (n==8){
        levels = generate_levels();
    }    
    
    if (levels.has(n)){
        
        level = levels.get(n);
        if (level.action != null){
            do_things(level.action);
        }
        if ((n!=666) && ((perso.vie<=0)||(perso.force<=0))){
            set_level(666);
        }
        draw(level.x,level.y);
        fill_text(level.text);
        fill_choices(level.choices);
        document.getElementById("force").innerText = perso.force;
        document.getElementById("vie").innerText = perso.vie;
    }
    else{
        document.getElementById("text").innerHTML = "<p>Unknown level</p>";
        document.getElementById("choices").replaceChildren();
        
    }
    
}


function fill_text(texts){

    let n = texts.length;
    let txt_zone = document.getElementById("txt_zone");
    txt_zone.replaceChildren();

    for(var i=0; i<n; i=i+1){
        let new_p = txt_zone.appendChild(document.createElement("p"));
        new_p.innerText = texts[i];
    }
};

function fill_choices(choices){
    let n = choices.length;
    let choices_zone = document.getElementById("choices");
    choices_zone.replaceChildren();
    for(var i=0; i<n; i=i+1){
        let new_p = choices_zone.appendChild(document.createElement("p"));
        let new_b = new_p.appendChild(document.createElement("button"));
        new_b.innerText = choices[i][0];
        new_b.id="tolevel_"+choices[i][1];
        let target=choices[i][1];
        
        new_b.onclick = () => {

            set_level(target);};
    }

};

function do_things(todo){

    for (var i =0; i<todo.length; i=i+1){
        switch (todo[i][0]){
            case "perte_vie":
                perso.vie -= todo[i][1];
                break;
            case "gain_vie" :
                perso.vie += todo[i][1];
                break;
            case "perte_force" :
                perso.force -= todo[i][1];
                break;
            case "gain_force" :
                perso.force += todo[i][1];
                break;
            case 'sabre' :
                document.getElementById('sabre').style.display = 'flex';
                break;
            case 'reset' :             
                gameOver();
                break;
                case 'win' :             
                win();
                break;
            
        }
        
        
    }

}


function final_boss(){
    if (perso.force<50){
        return ['Tu approches terrifié, Devant toi se trouve Dark Vador !»',
    'Que fais-tu ?']   
    }else{
        return ['Tu approches, confiant. Devant toi se trouve Dark Vador !',
    'Que fais-tu ?']
    }
}

function gameOver(){
    document.getElementById('sabre').style.display = 'None';
    document.getElementById('game-over').style.display = 'block';   
}

function win(){
    document.getElementById('sabre').style.display = 'None';
    document.getElementById('win').style.display = 'block';   
}

let buttonHome2 = document.getElementById('go-button-menu');
	buttonHome2.addEventListener('click',showMain)

let buttonStart2 = document.getElementById('go-button-recom');
	buttonStart2.addEventListener('click',hideMain)


    let buttonHome3 = document.getElementById('win-button-menu');
	buttonHome3.addEventListener('click',showMain)

let buttonStart3 = document.getElementById('win-button-recom');
	buttonStart3.addEventListener('click',hideMain)

