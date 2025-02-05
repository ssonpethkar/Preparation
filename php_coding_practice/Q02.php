<?php
$a = 10; 
echo - --$a;
// echo true+true;
?>

<!-- o/p : -9 -->

<?php
echo true+true; 
// 1+1
?>
<!-- o/p : 2 -->

<?php
function test(){
    return 10 ; 
    echo "apple";
}

echo test();
?>
<!-- o/p : 10 -->

<?php
$x = 10;
echo $x++;
?>
<!-- o/p : 10 (The output of this script will be 10, because echo uses the value of $x before it is incremented.)-->


<?php
$x = 10;
echo ++$x;
?>
<!-- o/p : 11 (The output of this script will be 11, because echo uses
 the value of $x after it is incremented.)
