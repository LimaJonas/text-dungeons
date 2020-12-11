// Pré commands
function createDivs(){
    return "<div class='d-flex justify-content-start mb-4'><div class='msg_cotainer'>";
}
function closeDivs(){
    return "</div></div>";
}
function line(txt){
    return createDivs() + txt + closeDivs();
}
function button(theme, func, txt){
    return "<button type='button' class='btn btn-"+ theme +" rounded mx-1' onclick='"+ func +"'>"+ txt+"</button>";
}
function setTitle(txt){
    document.getElementById("title").innerHTML = txt;
}

//On start page
function startPage(){
    setTitle("Text n Dungeons Demo v<i>0.1</i>");
    changeBg(0);
    life(200);
    mana(200);
    enemy(150);
    menu();
}

function menu(){

    var line1 = createDivs() + "Bem vindo ao Chats & Dungeons" + closeDivs();
    var line2 = createDivs() + "Ainda em desenvolvimento<br><i>PC recomendavel</i>" + closeDivs();

    var btn1 = button("success","play()","Jogar");
    var btn2 = button("warning", "optionPage()","Opções");

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1 + btn2;
}

function play(){
    
    setTitle("<i>O monstro</i>");

    var line1 = line("Você é um aventureiro com uma <b>espada</b> capaz de lançar projeteis em chamas.");
    var line2 = line("Em uma de suas aventuras, você estava caminhando pelo bosque quando de repente...");

    var btn1 = button("primary","scene1()","Continuar");    
    
    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1;
    
}

function scene1(){
    var line1 = line("Um monstro de 2 metros de alturas, com corpo parcialmente congelado aparece.");
    var line2 = line("Ele dá um rugido forte e feroz. O que você vai fazer?");

    var btn1 = button("danger","scene1_attack(1)","Usar espada");
    
    if(ManaBar >= ManaCost){
        var btn2 = button("primary", "scene1_attack(2)","Usar magia");
        document.getElementById("btn").innerHTML = btn1 + btn2;
    } else{
        document.getElementById("btn").innerHTML = btn1;
    }
    document.getElementById("msg").innerHTML = line1 + line2;
    

}

function scene1_attack(type){ 
    // 1 - Sword / 2 - Magic
    var dice = Math.floor(Math.random() * 20) + 1; //dice 20
    if(type == 1){
        if(dice == 20){
            var line1 = line("Você se aproxima e dá um golpe crítico no monstro, causando <b>"+ AtkCritical +"</b> de dano!");
            enemy(-AtkCritical);
            alert("Golpe critico");
        } else if(dice >= 10 && dice <= 19){
            var line1 = line("Você se aproxima e dá um golpe forte no monstro, causando <b>"+ AtkStrong +"</b> de dano!");
            enemy(-AtkStrong);
        } else if(dice >= 3 && dice <= 9){
            var line1 = line("Você se aproxima e consegue dar um golpe fraco no monstro, causando <b>"+ AtkWeak +"</b> de dano!");
            enemy(-AtkWeak);
        } else{
            var line1 = line("Você se aproxima. Mas antes de atacar tropeça no chão, caindo na frente do monstro.");
            alert("Falha");
            Fail = 1;
        }
    } else {
        if(dice == 20){
            var line1 = line("Você lança uma bola de fogo no monstro, causando <b>"+ MagicCritical +"</b> de dano!!!.");
            enemy(-MagicCritical);
            mana(-ManaCost);
            alert("Dano critico");
        } else if(dice >= 10 && dice <= 19){
            var line1 = line("Você lança uma bola de fogo no monstro, causando bastante dano.");
            enemy(-MagicStrong);
            mana(-ManaCost);
        } else if(dice >= 3 && dice <= 9){
            var line1 = line("Você lança uma bola de fogo no monstro, acertando-o de raspão, causando bem pouco dano.");
            enemy(-MagicWeak);
            mana(-ManaCost);
        } else{
            var line1 = line("Você lança uma bola de fogo no monstro. Mas acaba errando.");
            mana(-ManaCost);
            alert("Falha");
        }
    }

    var btn1 = button("primary","scene2()","Continuar");

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("btn").innerHTML = btn1;
}
function scene2(){
    var type = Math.floor(Math.random() * 2) + 1; //1 - Punch / 2 - Magic
    switch(Fail){
        case 1:
            var line1 = line("O monstro ri do seu fracasso em tentar ataca-lo.");
            var line2 = line("Então, muda a feição para raivosa e corre para atacar");
            var line3 = line("Você ainda não se levantou, por isso não consegue desviar do ataque.");

            var btn1 = button("primary","scene2_attack(type, 0)","Continuar");
            
            document.getElementById("msg").innerHTML = line1 + line2 + line3;
            document.getElementById("btn").innerHTML = btn1;     
            break;
        case 0:
            var line1 = line("O monstro fica zangado e se prepara para um ataque");

            var btn1 = button("warning","scene2_attack(type, 1)","Tentar desviar");
            var btn2 = button("primary","scene2_attack(type, 0)","Continuar");

            document.getElementById("msg").innerHTML = line1;
            document.getElementById("btn").innerHTML = btn1 + btn2;     
            break;
    }
}

function scene2_attack(type, deflect){
    // 1 - Punch / 2 - Magic
    var dice = Math.floor(Math.random() * 20) + 1; //dice 20
    switch (deflect){
        case 1:
            var dicePlayer = Math.floor(Math.random() * 20) + 1; //Need 19 or 20
            break;
        case 0:
            var dicePlayer = 0;
    }
    if(dicePlayer >= 19){

    } else{
        if(type == 1){
            if(dice == 20){
                var line1 = line("Ele consegue dar um soco muito forte em você, causando <b>"+ EnemyCritical +"</b> de dano!");
                life(-EnemyCritical);
                alert("Golpe critico");
            } else if(dice >= 10 && dice <= 19){
                var line1 = line("Ele consegue dar um soco forte em você, causando <b>"+ EnemyStrong +"</b> de dano!");
                life(-EnemyStrong);
            } else if(dice >= 3 && dice <= 9){
                var line1 = line("Ele dá um chute em você, causando <b>"+ EnemyWeak +"</b> de dano!");
                enemy(-EnemyWeak);
            } else{
                var line1 = line("Ele tenta dar um chute, porém erra.");
                alert("Falha");
            }
        } else {
            if(dice == 20){
                var line1 = line("Ele dá um passo atrás e cospe várias pedras de gelo em você, com todas acertando. causando <b>"+ EnemyMagicCritical +"</b> de dano!!!.");
                life(-EnemyMagicCritical);
                alert("Dano critico");
            } else if(dice >= 10 && dice <= 19){
                var line1 = line("Ele dá um passo atrás e cospe várias pedras de gelo em você, acertando algumas. Causando <b>"+ EnemyMagicStrong +"</b> dano.");
                life(-EnemyMagicStrong );
            } else if(dice >= 3 && dice <= 9){
                var line1 = line("Ele chega próximo de você, cria uma pedra de gelo com as mãos e lança em você, acertando-o de raspão, causando bem pouco dano.");
                life(-MagicWeak);
            } else{
                var line1 = line("Ele chega próximo de você, cria uma pedra de gelo com as mãos e lança em você, errando por pouco.");
            }
        }
    }

    Fail = 0;

    var btn1 = button("primary","scene3()","Continuar");

    document.getElementById("msg").innerHTML = line1;
    document.getElementById("btn").innerHTML = btn1;
}

