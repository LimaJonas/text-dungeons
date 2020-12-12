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
    var tooltipEasy = "Player: HP/MP: 120 | Atk: 13~27 | Magic: 18~35 /// Inimigo: HP: 100 | Atk: 13~25 | Magic: 15~27";
    var tooltipNormal = "Player: HP/MP: 100 | Atk: 10~25 | Magic: 15~30 /// Inimigo: HP: 120 | Atk: 13~27 | Magic: 17~35";
    var tooltipHard = "Player: HP/MP: 90 | Atk: 7~20 | Magic: 13~27 /// Inimigo: HP: 150 | Atk: 15~30 | Magic: 17~37";

    var line1 = line("Tema: <button type='button' class='btn btn-secondary rounded mx-1' onclick='changeBg(1)'>Claro</button> /<button type='button' class='btn btn-dark rounded mx-1' onclick='changeBg(0)'>Escuro</button>");
    var line2 = line("Dificuldade ("+ Difficulty +"): <button type='button' class='btn btn-primary rounded mx-1' data-toggle='modal' data-target='#easyModal'>Fácil</button> / <button type='button' class='btn btn-success rounded mx-1' data-toggle='modal' data-target='#normalModal'>Normal</button> / <button type='button' class='btn btn-danger rounded mx-1' data-toggle='modal' data-target='#hardModal'>Difícil</button>");

    var btn1 = button("danger","menu()","Voltar");

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1;

}

function changeBg(x){
    localStorage.setItem("background", x);
    if(x == 1){
        document.getElementById("main").className = "bg-secondary";
    } else{
        document.getElementById("main").className = "bg-dark";
    }
}

function setDifficulty(x){
    localStorage.setItem("difficulty", x);
    if(x == 1){ //Easy
        // names: hp,mp,mc,atkc,atks,atw,magc,mags,magw
        setPlayer(120, 120, 15, 27, 20, 13, 35, 25, 18);
        setEnemy(100, 25, 18, 13, 27, 20, 15);
        Difficulty = "Fácil";
    } else if(x == 2){ //Normal
        setPlayer(100, 100, 20, 25, 15, 10, 30, 23, 15);
        setEnemy(120, 27, 20, 13, 38, 25, 17);
        Difficulty = "Normal";
    } else if(x == 3){ //Hard
        setPlayer(90, 90, 20, 20, 15, 7, 27, 20, 13);
        setEnemy(150, 30, 23, 15, 37, 25, 17);
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
    EnemyBar = MaxEnemy;

    EnemyCritical = atkc;
    EnemyStrong = atks;
    EnemyWeak = atkw;

    MagicCritical = magc;
    MagicStrong = mags;
    MagicWeak = magw;
}

function life(Damage){
    LifeBar = LifeBar + (Damage);
    var width = (LifeBar * 100) / MaxLife;
    if(LifeBar > MaxLife){
        LifeBar = MaxLife;
    }
    if(LifeBar <= 0){
        LifeBar = 0;
        
    }
    if(LifeBar > 30){
        document.getElementById("life").innerHTML = "<div class='progress-bar progress-bar-striped progress-bar-animated bg-success' role='progressbar' aria-valuenow='"+ LifeBar +"' aria-valuemin='0' aria-valuemax='"+ MaxLife +"' style='width: "+ width +"%'>"+LifeBar +"/"+ MaxLife +"</div>";
    } else{
        document.getElementById("life").innerHTML = "<div class='progress-bar progress-bar-striped progress-bar-animated bg-danger' role='progressbar' aria-valuenow='"+ LifeBar +"' aria-valuemin='0' aria-valuemax='"+ MaxLife +"' style='width: "+ LifeBar +"%'>"+LifeBar +"/"+ MaxLife +"</div>";

    }
}
function mana(x){
    ManaBar = ManaBar + (x);
    var width = (ManaBar * 100) / MaxMana;

    if(ManaBar > MaxMana){
        ManaBar = MaxMana;
    }
    document.getElementById("mana").innerHTML = "<div class='progress-bar progress-bar-striped progress-bar-animated bg-primary' role='progressbar' aria-valuenow='"+ ManaBar +"' aria-valuemin='0' aria-valuemax='"+ MaxMana +"' style='width: "+ width +"%'>"+ ManaBar +"/"+ MaxMana +"</div>";
}

function enemy(Damage){
    EnemyBar = EnemyBar + (Damage);
    var width = (EnemyBar * 100) / MaxEnemy;

    if(EnemyBar > MaxEnemy){
        EnemyBar = MaxEnemy;
    }
    if(EnemyBar <= 0){
        EnemyBar = 0;
    }
    document.getElementById("enemy").innerHTML = "<div class='progress-bar progress-bar-striped progress-bar-animated bg-dark' role='progressbar' aria-valuenow='"+ EnemyBar +"' aria-valuemin='0' aria-valuemax='"+ MaxEnemy +"' style='width: "+ width +"%'>"+ EnemyBar +"/"+ MaxEnemy +"</div>";
}