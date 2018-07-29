<html>
<head>
    <meta charset="UTF-8">
    <title>PHP Basico</title>
    <meta name="viewport" content="width=device-width,user-scalable=0">
    <link rel="stylesheet" href="_template/stilo.css" type="text/css">
    <script type="text/javascript" src="_js/js.js"></script>

</head>
<body onload="iniciarJogo()">
<nav>
    <div class="navint">
        <div class="navleft">
            <img src="_imagem/logo.png">
        </div>
        <div class="navright">
            <ul>
                <li onclick="zerarPlacar()">Zerar Placar</li>
                <li onclick="ComoJogar()">Como Jogar</li>
                <li onclick="contato()">Contato</li>
            </ul>
        </div>
    </div>
</nav>
<div class="placarint">
    <div class="placar">
        <div class="placarimg">
            <img src="_imagem/Pokebola.png" style="width: 50px; height: 50px; margin-top: 5px; margin-left: 10px;">
        </div>
        <div id="placar" style="margin-right: 10px;text-align: center; font-size: 50px; display: flex">0</div>
    </div>
</div>

</body>
</html>
