<!-- $ is a variable 
    $$ is variable of varible. its treat as a reference variable and value is used as a variable  -->
<!-- Difference between $ and $$ -->
<?php
    $name = "Swati";
    $$name = "IN Parali";
    echo $name;
    echo $$name;
    echo $name ." ". $Swati;
?>


<!--is PHP supports nested class  -->
<!-- No, Php doesn't support nested class but its supports anonymous class

Nested class refers to a class defined inside anpther class. this is also called as inner class -->

anonymous class => Anonymous class is a class that is defined without a name. It is used when we don't need
ex . 
return new class{

}

