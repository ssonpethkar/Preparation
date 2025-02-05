
<?php
// findout 2nd value in array without using built in funct
$num = [10, 20, 30, 40, 50];

//using built in fun Use array_slice to get the second element
$secondValue = array_slice($num, 1, 1)[0];
echo $secondValue; // Output: 20

//without built in func Access the second value
$secondValue = $num[1];

// Output the value
echo $secondValue;  // This will print 20

?>