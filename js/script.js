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
    if(localStorage.getItem('background') == null){
        changeBg(0);
    } else{
        changeBg(localStorage.getItem('background'));
    }
    if(localStorage.getItem('difficulty') == null){
        setDifficulty(2);
    } else{
        setDifficulty(localStorage.getItem('difficulty'));
    }
    menu();
    setTitle("Text n Dungeons [PT-BR] <i>v0.1</i>");
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
    var line1 = line("Um monstro de 2 metros de alturas, com corpo parcialmente de gelo aparece.");
    var line2 = line("Ele dá um rugido forte e feroz.");

    var btn1 = button("primary","playerTurn()","Continuar");

    document.getElementById("btn").innerHTML = btn1;
    document.getElementById("msg").innerHTML = line1 + line2;
}

function playerTurn(){
    
    setTitle("<i>O monstro</i> | Sua vez!");
    var talk = Math.floor(Math.random() * 3) + 1; //3 talks
    if(Fail == 1){
        switch(talk){
            case 1:
                var line1 = line("Você finalmente começa a se levantar.");
                break;
            case 2:
                var line1 = line("Você consegue se recompor.");
                break;
            case 3:
                var line1 = line("Você volta a posição de ataque inicial.");
                break;
        }
        
    } 
    
    switch(talk){
        case 1:
            var line2 = line("O que você fazer?");
            break;
        case 2:
            var line2 = line("O que pretende fazer?");
            break;
        case 3:
            var line2 = line("E agora?");
    }

    if(Fail == 1){
        document.getElementById("msg").innerHTML = line1 + line2;
    } else{
        document.getElementById("msg").innerHTML = line2;
    }

    var btn1 = button("danger","swordAttack()","Usar espada");
    if(ManaBar >= ManaCost){
    var btn2 = button("info","magicAttack()","Usar magia");
    } else{
        var btn2 = button("info","noMana()","User magia");
    }

    Fail = 0;
    document.getElementById("btn").innerHTML = btn1 + btn2;    
}

function enemyTurn(){
    setTitle("<i>O monstro</i> | Vez dele!");
    var type = Math.floor(Math.random() * 2) + 1; //1 - Punch / 2 - Magic
    var talk = Math.floor(Math.random() * 5) + 1; //5 talks
    if(Fail == 1){
        switch(talk){
            case 1:
                var line1 = line("O monstro ri do seu fracasso em tentar ataca-lo. Então, muda a feição para raivosa e corre para atacar");
                var line2 = line("Você ainda não se levantou, por isso não consegue desviar do ataque.");
                break;
            case 2:
                var line1 = line("- Fracote - disse o monstro ao ver seu erro.");
                var line2 = line("Ele corre para ataca-lo.");
                break;
            case 3:
                var line1 = line("- HAHAHAHA - riu o monstro");
                var line2 = line("Ele começa a correr em sua direção.");
                break;
            case 4:
                var line1 = line("- Um cego como você não deveria se aventurar sozinho pela floresta. - Disse o monstro em tom irônico.");
                var line2 = line("Ele se prepara para atacar.");
                break;
            case 5:
                var line1 = line("- Fraco. - Disse o monstro.");
                var line2 = line("Ele se prepara para atacar");
                break;
        }
        var btn1 = button("primary","enemyAttack(type, 0)","Continuar");
        document.getElementById("btn").innerHTML = btn1;
    }else{            
        switch(talk){
            case 1:
                var line1 = line("O monstro fica zangado");
                var line2 = line("e se prepara para um ataque");
                break;
            case 2:
                var line1 = line("O monstro ruge de dor.");
                var line2 = line("Mas não se deixa abalar, se preparando para um ataque."); 
                break;
            case 3:
                var line1 = line("Ele se zanga, vendo o sucesso de seu golpe.");
                var line2 = line("E começa a correr em sua direção, pronto para atacar.");  
                break;
            case 4:
                var line1 = line("O monstro ignora a dor causada pelo seu golpe");
                var line2 = line("e começa a andar em sua direção, com muita raiva.");
                break;
            case 5:
                var line1 = line("O monstro olha pra você, com expressão de raiva.");
                var line2 = line("Então, começa a andar em sua direção, se preparando para atacar.");        
                break;
                
            }
            
            var btn1 = button("warning","enemyAttack(type, 1)","Tentar desviar");
            var btn2 = button("primary","enemyAttack(type, 0)","Não fazer nada");
            document.getElementById("btn").innerHTML = btn1 + btn2;     
    }
    document.getElementById("msg").innerHTML = line1 + line2;
}

function swordAttack(){
    var dice = Math.floor(Math.random() * 20) + 1; //dice 20
    var talk = Math.floor(Math.random() * 3) + 1; //3 talks
    if(dice == 20){
        switch(talk){
            case 1:
                var line1 = line("Você se aproxima e dá um golpe crítico no monstro.");
                var line2 = line("Causando <b>"+ AtkCritical +"</b> de dano!");
                break;
            case 2:
                var line1 = line("Você pega sua espada e faz um corte profundo no monstro.");
                var line2 = line("Causando <b>"+ AtkCritical + "</b> de dano!");
                break;
            case 3:
                var line1 = line("Você perfura o monstro causando uma dor muito forte.");
                var line2 = line("Dando <b>"+ AtkCritical + "</b> de dano!");
                break;
        }
        enemy(-AtkCritical);
        alert("Golpe critico");
    } else if(dice >= 10 && dice <= 19){
        switch(talk){
            case 1:
                var line1 = line("Você se aproxima e dá um golpe forte no monstro.");
                var line2 = line("Causando <b>"+ AtkStrong +"</b> de dano!")
                break; 
            case 2:
                var line1 = line("Com sua espada você se aproxima e da um golpe forte.");
                var line2 = line("Causando <b>"+ AtkStrong + "</b> de dano!");
                break;
            case 3:
                var line1 = line("Você corre para cima dele e tenta perfura-lo, conseguindo lhe causar bastante dor.");
                var line2 = line("Causando <b>"+ AtkStrong + "</b> de dano!");
                break;
        }
        enemy(-AtkStrong);
    } else if(dice >= 3 && dice <= 9){
        switch(talk){
            case 1:
                var line1 = line("Você se aproxima e consegue dar um golpe fraco no monstro.");
                var line2 = line("Causando <b>"+ AtkWeak +"</b> de dano!");
                break;
            case 2:
                var line1 = line("Você corre ao redor do monstro e consegue dar um golpe fraco.");
                var line2 = line("Causando <b>"+ AtkWeak +"</b> de dano!");
                break;
            case 3:
                var line1 = line("Com cautela, você se aproxima do monstro e dá um golpe rápido");
                var line2 = line("Causando <b>"+ AtkWeak +"</b> de dano!");
                break;
        }
        enemy(-AtkWeak);
    } else{
        switch(talk){
            case  1:
                var line1 = line("Você se aproxima. Mas antes de atacar, você tropeça no chão.");
                var line2 = line("caindo na frente do monstro.");
                break;
            case 2:
                var line1 = line("Você corre para atacar. Mas acaba escorregando antes de completar o golpe");
                var line2 = line("Impedindo de se desviar do próximo golpe do monstro");
                break;
            case 3:
                var line1 = line("Você parte para cima do monstro. Mas erra o golpe.");
                var line2 = line("Causando um desequilibrio em você.");
        }
        alert("Ops! Golpe falho!");
        Fail = 1;
    }
    
    if(LifeBar <= 0){
        var btn1 = button("primary", "youLost()","Continuar");
    } else if(EnemyBar <= 0){
        var btn1 = button("primary", "youWin()","Continuar");
    } else{
        var btn1 = button("primary","enemyTurn()","Continuar");
    }

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1;
}

function magicAttack(){
    var dice = Math.floor(Math.random() * 20) + 1; //dice 20    
    var talk = Math.floor(Math.random() * 3) + 1; //3 talks

    if(dice == 20){
        switch(talk){
            case 1:
                var line1 = line("Você lança uma bola de fogo no monstro.");
                var line2 = line("Causando <b>"+ MagicCritical +"</b> de dano!!!.")
                break;
            case 2:
                var line1 = line("Com a magia de sua espada, você lança uma rajada de fogo no monstro!");
                var line2 = line("Causando <b>"+ MagicCritical +"</b> de dano!!!.")
                break;
            case 3:
                var line1 = line("Com sua espada coberta por chamas, você se aproxima e perfura o monstro.");
                var line2 = line("Causando <b>"+ MagicCritical +"</b> de dano!!!.")
                break;
        }
        enemy(-MagicCritical);
        mana(-ManaCost);
        alert("Golpe critico!");
    } else if(dice >= 10 && dice <= 19){
        switch(talk){
            case 1:
                var line1 = line("Você lança uma bola de fogo no monstro.");
                var line2 = line("Causando <b>"+ MagicStrong +"</b> de dano!");
                break;
            case 2:
                var line1 = line("Sua espada fica encoberta por chamas e você consegue dar um golpe no monstro.");
                var line2 = line("Causando <b>"+ MagicStrong +"</b> de dano!");
                break;
            case 3:
                var line1 = line("Você lança diversas bolas de fogo no monstro, com algumas acertando.");
                var line2 = line("Causando <b>"+ MagicStrong +"</b> de dano!");
                break;
        }
        enemy(-MagicStrong);
        mana(-ManaCost);
    } else if(dice >= 3 && dice <= 9){
        switch(talk){
            case 1:
                var line1 = line("Você lança uma bola de fogo no monstro, acertando-o de raspão.");
                var line2 = line("Causando <b>"+ MagicWeak +"</b> de dano!");
                break;
            case 2:
                var line1 = line("Você lança diversas bolas de fogo no monstro. Mas apenas uma consegue acertar.");
                var line2 = line("Causando <b>"+ MagicWeak +"</b> de dano!");
                break;
            case 3:
                var line1 = line("Sua espada fica em chamas e você tenta fazer um corte no monstro. Mas apenas consegue acertar de raspão!");
                var line2 = line("Causando <b>"+ MagicWeak +"</b> de dano!");
                break;
        }
        enemy(-MagicWeak);
        mana(-ManaCost);
    } else{
        switch(talk){
            case 1:
                var line1 = line("Você lança uma bola de fogo no monstro. Mas acaba errando.");
                var line2 = line("Não causando dano nenhum.");
                break;
            case 2:
                var line1 = line("Você deixa sua espada coberta por chamas, corre para acertar o monstro. Mas erra!");
                var line2 = line("Não causando dano nenhum..");
                break;
            case 3:
                var line1 = line("Você lança diversas bolas de fogo no monstro e acaba errando todas!");
                var line2 = line("Não causando dano nenhum.");
                break;
        }
        mana(-ManaCost);
        alert("Falha");
    }

    if(LifeBar <= 0){
        var btn1 = button("primary", "youLost()","Continuar");
    } else if(EnemyBar <= 0){
        var btn1 = button("primary", "youWin()","Continuar");
    } else{
        var btn1 = button("primary","enemyTurn()","Continuar");
    }

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1;
}

function noMana(){
    alert("Sem magia suficiente!");
}
function enemyAttack(type, deflect){
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
        var line1 = line("Ele tenta dar uma investida. Mas você consegue desviar, saindo do caminho do golpe");
    } else{
        if(type == 1){
            if(dice == 20){
                
                if(deflect == 1){
                    var line1 = line("Você tenta sair do caminho, porém não foi suficiente. Ele consegue dar um soco muito forte em você, causando <b>"+ EnemyCritical +"</b> de dano!");
                } else{
                    var line1 = line("Ele consegue dar um soco muito forte em você, causando <b>"+ EnemyCritical +"</b> de dano!");
                }
                life(-EnemyCritical);
                alert("Golpe critico");

            } else if(dice >= 10 && dice <= 19){
                
                if(deflect == 1){
                    var line1 = line("Você tenta sair do caminho, porém não foi suficiente. Ele consegue dar um soco forte em você, causando <b>"+ EnemyStrong +"</b> de dano!");
                } else{
                    var line1 = line("Ele consegue dar um soco forte em você, causando <b>"+ EnemyStrong +"</b> de dano!");
                }
                life(-EnemyStrong);

            } else if(dice >= 3 && dice <= 9){

                if(deflect == 1){
                    var line1 = line("Você tenta sair do caminho, porém não foi suficiente. Ele dá um chute em você, causando <b>"+ EnemyWeak +"</b> de dano!");
                } else{
                    var line1 = line("Ele dá um chute em você, causando <b>"+ EnemyWeak +"</b> de dano!");
                }
                life(-EnemyWeak);

            } else{
                if(deflect == 1){
                    var line1 = line("Você tenta sair do caminho no momento que ele tenta dar um chute com você, fazendo ele errar por pouco!");
                } else{
                    var line1 = line("Ele tenta dar um chute, porém erra.");
                }
                alert("Falha");
            }
        } else {
            if(dice == 20){
                if(deflect == 1){
                    var line1 = line("Ele dá um passo atrás e cospe várias pedras de gelo em você, mesmo tentando desviar, todas acertam, causando <b>"+ EnemyMagicCritical +"</b> de dano!!!.");
                } else{
                    var line1 = line("Ele dá um passo atrás e cospe várias pedras de gelo em você, com todas acertando. causando <b>"+ EnemyMagicCritical +"</b> de dano!!!.");
                }
                life(-EnemyMagicCritical);
                alert("Dano critico");
            } else if(dice >= 10 && dice <= 19){
                if(deflect == 1){
                    var line1 = line("Ele dá um passo atrás e cospe várias pedras de gelo em você, mesmo tentando desviar, algumas acertam, causando <b>"+ EnemyMagicStrong +"</b> dano.");
                } else{
                    var line1 = line("Ele dá um passo atrás e cospe várias pedras de gelo em você, acertando algumas, causando <b>"+ EnemyMagicStrong +"</b> dano.");
                }
                life(-EnemyMagicStrong );
            } else if(dice >= 3 && dice <= 9){
                if(deflect == 1){
                    var line1 = line("Ele chega próximo de você, cria uma pedra de gelo com as mãos e lança em você, acertando-o de raspão, causando bem pouco dano.");
                } else{
                    var line1 = line("Ele chega próximo de você, cria uma pedra de gelo com as mãos e lança em você, acertando-o de raspão, causando bem pouco dano.");
                }
                life(-MagicWeak);
            } else{
                var line1 = line("Ele chega próximo de você, cria uma pedra de gelo com as mãos e lança em você, errando por pouco.");
            }
        }
    }

    if(LifeBar <= 0){
        var btn1 = button("primary", "youLost()","Continuar");
    } else if(EnemyBar <= 0){
        var btn1 = button("primary", "youWin()","Continuar");
    } else{
        var btn1 = button("primary","playerTurn()","Continuar");
    }
    
    document.getElementById("msg").innerHTML = line1;
    document.getElementById("btn").innerHTML = btn1;
}

function youWin(){
    alert("Você venceu!");
    var line1 = line("O monstro cai para trás, derrotado por você.");
    var line2 = line("<i>Obrigado por jogar!</i>");

    var btn1 = button("primary","startPage()","Reiniciar");
    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1;
}
function youLost(){
    alert("Você perdeu!");
    var line1 = line("Você cai para trás, morto pelo monstro.");
    var line2 = line("<i>Obrigado por jogar!</i>");

    var btn1 = button("primary","startPage()","Reiniciar");
    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1;
}