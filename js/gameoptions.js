// Variaveis global
// Player Default: Normal
var MaxLife = 100;
var MaxMana = 100;
var LifeBar = 0;
var ManaBar = 0;
var ManaCost = 20;
// Sword
var AtkCritical = 25; //d20
var AtkStrong = 20; //d19-10
var AtkWeak = 10; //d9-3
// Fire Magic
var MagicCritical = 30; //d20
var MagicStrong = 25; //d19-10
var MagicWeak = 15; //d9-2

var Fail = 0; //when player gets d1-2

// Enemy Default: Normal
var MaxEnemy = 100;
var EnemyBar = 0;
// Common Attack
var EnemyCritical = 25; //d20
var EnemyStrong = 20; //d19-10
var EnemyWeak = 10; //d9-2
// Ice Magic
var EnemyMagicCritical = 30; //d20
var EnemyMagicStrong = 25; //d19-10
var EnemyMagicWeak = 15; //d9-2

var Difficulty = "Normal";

function optionPage(){
    
    setTitle("Opções de jogo");
    
    var tooltipEasy = "Player: HP: 200 | Atk: 15~30 | Magic: 20~40 /// Inimigo: HP: 100 | Atk: 13~20 | Magic: 15~25";
    var tooltipNormal = "Player: HP: 100 | Atk: 10~25 | Magic: 15~30 /// Inimigo: HP: 100 | Atk: 10~25 | Magic: 15~30";
    var tooltipHard = "Player: HP: 100 | Atk: 7~20 | Magic: 10~25 /// Inimigo: HP: 150 | Atk: 13~30 | Magic: 18~35";

    var line1 = createDivs() + "Tema: <button type='button' class='btn btn-secondary rounded mx-1' onclick='changeBg(1)'>Claro</button> /<button type='button' class='btn btn-dark rounded mx-1' onclick='changeBg(0)'>Escuro</button>" + closeDivs();
    var line2 = createDivs() + "Dificuldade ("+ Difficulty +"): <button type='button' class='btn btn-primary rounded mx-1' onclick='setDifficulty(1)' data-toggle='tooltipEasy' title='"+ tooltipEasy +"'>Fácil</button> / <button type='button' class='btn btn-success rounded mx-1' onclick='setDifficulty(2)' data-toggle='tooltipNormal' title='"+ tooltipNormal +"'>Normal</button> / <button type='button' class='btn btn-danger rounded mx-1' onclick='setDifficulty(3)' data-toggle='tooltipHard' title='"+ tooltipHard +"'>Difícil</button>" + closeDivs();


    var btn1 = button("danger","menu()","Voltar");

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1;

}

$(document).ready(function(){
    $('[data-toggle="tooltipEasy"]').tooltip();   
    $('[data-toggle="tooltipNormal"]').tooltip();
    $('[data-toggle="tooltipHard"]').tooltip();      
  });

function changeBg(x){
    if(x == 1){
        document.getElementById("main").className = "bg-secondary";
    } else{
        document.getElementById("main").className = "bg-dark";
    }
}

function setDifficulty(x){
    if(x == 1){ //Easy
        setPlayer(200, 200, 10, 30, 25, 15, 40, 30, 20);
        setEnemy(100, 20, 18, 13, 25, 20, 15);
        Difficulty = "Fácil";
    } else if(x == 2){
        setPlayer(100, 100, 20, 25, 20, 10, 30, 25, 15);
        setEnemy(100, 25, 20, 10, 30, 25, 15);
        Difficulty = "Normal";
    } else if(x == 3){
        setPlayer(100, 100, 25, 20, 15, 7, 25, 18, 10);
        setEnemy(150, 30, 20, 13, 35, 25, 18);
        Difficulty = "Difícil";
    }
    life(200);
    mana(200);
    enemy(150);
    optionPage();
}

function setPlayer(hp, mp, mc, atkc, atks, atkw, magc, mags, magw){
    MaxLife = hp;
    MaxMana = mp;
    ManaCost = mc;

    AtkCritical = atkc;
    AtkStrong = atks;
    AtkWeak = atkw;

    MagicCritical = magc;
    MagicStrong = mags;
    MagicWeak = magw;
}
function setEnemy(hp, atkc, atks, atkw, magc, mags, magw){
    MaxEnemy = hp;
    enemyBar = MaxEnemy;

    EnemyCritical = atkc;
    EnemyStrong = atks;
    EnemyWeak = atkw;

    MagicCritical = magc;
    MagicStrong = mags;
    MagicWeak = magw;
}

function life(Damage){
    LifeBar = LifeBar + (Damage);
    if(LifeBar > MaxLife){
        LifeBar = MaxLife;
    }
    if(LifeBar <= 0){
        alert("Game Over");
        startPage();
    }
    document.getElementById("life").innerHTML = "<div class='progress-bar progress-bar-striped progress-bar-animated bg-success' role='progressbar' aria-valuenow='"+ LifeBar +"' aria-valuemin='0' aria-valuemax='"+ MaxLife +"' style='width: "+ LifeBar +"%'>"+LifeBar +"/"+ MaxLife +"</div>";
}
function mana(x){
    ManaBar = ManaBar + (x);
    if(ManaBar > MaxMana){
        ManaBar = MaxMana;
    }
    document.getElementById("mana").innerHTML = "<div class='progress-bar progress-bar-striped progress-bar-animated bg-primary' role='progressbar' aria-valuenow='"+ ManaBar +"' aria-valuemin='0' aria-valuemax='"+ MaxMana +"' style='width: "+ ManaBar +"%'>"+ ManaBar +"/"+ MaxMana +"</div>";
}

function enemy(Damage){
    EnemyBar = EnemyBar + (Damage);
    if(EnemyBar > MaxEnemy){
        EnemyBar = MaxEnemy;
    }
    if(EnemyBar <= 0){
        alert("Você venceu");
        startPage();
    }
    document.getElementById("enemy").innerHTML = "<div class='progress-bar progress-bar-striped progress-bar-animated bg-danger' role='progressbar' aria-valuenow='"+ EnemyBar +"' aria-valuemin='0' aria-valuemax='"+ MaxEnemy +"' style='width: "+ EnemyBar +"%'>"+ EnemyBar +"/"+ MaxEnemy +"</div>";
}