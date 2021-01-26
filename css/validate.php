<?php 

    if(isset($_GET['submit'])){
        $result1 = $_GET['num1'];
        $result2 = $_GET['num2'];
        $operator = $_GET['operator'];

    }

    switch ($operator) {
        case 'none':
          echo "select an operator<br>";
        break;
					
        case 'add':
           echo $result1 + $result2;
        break;
                
        case 'subtract':
            echo $result1 - $result2;
        break;
					
        case 'multiply':
            echo $result1 * $result2;
        break;

        case 'divide':
            echo $result1 / $result2;
        break;
					
					
					
        }



			?>