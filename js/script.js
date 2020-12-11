// Pré commands
function createDivs(){
    return "<div class='d-flex justify-content-start mb-4'><div class='msg_cotainer'>";
}
function closeDivs(){
    return "</div></div>";
}
function button(theme, func, txt){
    return "<button type='button' class='btn btn-"+ theme +" rounded mx-1' onclick='"+ func +"()'>"+ txt+"</button>";
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

    var btn1 = button("success","play","Jogar");
    var btn2 = button("warning", "optionPage","Opções");

    document.getElementById("msg").innerHTML = line1 + line2;
    document.getElementById("btn").innerHTML = btn1 + btn2;
}

function play(){

    var title = "<i>O monstro</i>";

    var line1 = createDivs() + "Você é um aventureiro com uma <b>espada</b> capaz de lançar projeteis em chamas." + closeDivs();
    var line2 = createDivs() + "Em uma de suas aventuras, você estava caminhando pelo bosque quando de repente..." + closeDivs();
    var line3 = createDivs() + "um monstro de 2 metros de alturas, com corpo parcialmente de pedra aparece." + closeDivs();
    var line3 = createDivs() + "Ele dá um rugido forte e feroz. O que você vai fazer?." + closeDivs();

    var btn1 = button("danger","scene1_sword","Usar espada");
    var btn2 = button("primary", "scene1","Usar magia[-20]");

    document.getElementById("title").innerHTML = title;
    document.getElementById("msg").innerHTML = line1 + line2 + line3;
    document.getElementById("btn").innerHTML = btn1 + btn2;
}
