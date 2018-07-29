<?php

    if(isset($_POST['valor1']) && !empty($_POST['valor1']))  {
        $valor1 = $_POST['valor1'];
        for($x =0;$x <= 10;$x++){
            echo $valor1 * $x;
            echo"<br>";
        }
    }


?>