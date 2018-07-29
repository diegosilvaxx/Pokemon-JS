//comentario js

function calcular() {
    var valor1 = document.getElementById('valor1').value;

    for(x =0;x <=10;x++){
        var area = document.getElementById('mensagem');
        area.innerHTML += "<br>" + valor1 * x;
    }
    document.getElementById("valor1").value = "";
    document.getElementById("valor1").focus();

}

/*     <nav>
        <div class="navint">
            <div class="navleft">
                <img src="_imagem/qt-logo.png">
            </div>
            <div class="navright">
                <ul>
                    <li>Calculadora</li>

                </ul>
            </div>
        </div>
    </nav>
    <div class="container">

        <div class="containerint">
            <div class="containercenter">
                <form method="POST">
                    Digite o numero que gostaria de saber a tabuada:
                    <input type="text" name="valor1" id="valor1" autofocus>
                    <input type="submit" value="Enviar Dados"">
                </form>
                <?php
                include_once("recebedor.php");
                ?>
            </div>
        </div>
        <div class="containerint">
            <div class="containercenter" id="mensagem">
            Tabuada no Java Script:
                <button onclick="calcular()">Calcular</button>
                <button onclick="window.location.href = window.location.href">Limpar a Tela</button>

            </div>
        </div>
    </div> */

function apertoMouse(){
    console.log("apertou o mouse");
}

function soltouomouse(){
    console.log("soltou o mouse");
}

function passouCima(){
    console.log("passou por cima");
}

function saiudecima(){
    console.log("mouse saiu e cima");
}

function moveuomouse(){
    console.log("moveu o mouse");
}
function botaodireito(){
    console.log("clicou no botao");

    return false;
}

function mudafoto1(){
    document.getElementById('foto').innerHTML = "<img src=\"_imagem/qt-logo.png\">";
}
function mudafoto2(){
    document.getElementById('foto').innerHTML = "<img src=\"_imagem/skype_PNG5.png\">";
}
function mudafoto3(){
    document.getElementById('foto').innerHTML = "<img src=\"_imagem/3c0cc3eef5c5e2869aa35d6720fadecf.png \">";
}

function principal(){
    document.getElementById('foto').innerHTML = "<img src=\"_imagem/qt-logo.png\">";
}

function apertouTecla(event){
    if(event.keyCode == 13){
    console.log("apertou enter" );
    }else{
        console.log("apertou outra tecla");
    }
}

function carregou(){
    //alert("pagina carregada");
}

function mudouOpcao(objeto) {
    alert("selecionou "+ objeto.value);
}

function focou() {
    console.log("focou no campo 1");
}

function desfocou(){
    console.log("desfocou no campo 1");
}


function enviou(){
    alert("enviou os dados");
}

function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 1300);
    var p2 = Math.floor(Math.random() * 400);
    var v1 = Math.floor(Math.random() * 20);
    bola.setAttribute("style", "left:"+p1+"px;"+"top:"+p2+"px; margin-top:200px;"+"background-image: url('_imagem/"+v1+".png')");


    bola.setAttribute("onclick","estourar(this)");
    document.body.appendChild(bola);
}

var contador = 0

function estourar(objeto){
    document.body.removeChild(objeto);
    document.getElementById('placar').innerHTML = contador +=1;

}




function iniciarJogo(){
    setInterval(addBola,1000);
}

function zerarPlacar() {
    contador = 0;
    document.getElementById('placar').innerHTML = contador;
}

function contato() {
    alert("Criador: Diego Borges  Cel: (16)981043644");
}

function ComoJogar(){
    alert("Click em cima dos pokemon que aparecer na tela para poder capturar!");
}






















































