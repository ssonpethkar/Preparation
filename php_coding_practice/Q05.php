<?php
// To find the position of the value 40 in an array using a built-in function in PHP

$num = [10, 20, 30, 40, 50];

// Use array_search to find the position of 40
$position = array_search(40, $num);

// Output the position
echo $position;  // This will print 3

// To find the position of the value 40 in an array without using a built-in function in PHP
$num = [10, 20, 30, 40, 50];
$valueToFind = 40;
$position = -1; // Initialize to -1 to indicate that the value is not found

// Loop through the array
for ($i = 0; $i < count($num); $i++) {
    if ($num[$i] == $valueToFind) {
        $position = $i;
        break; // Stop the loop once the value is found
    }
}

// Output the position
echo $position;  // This will print 3

?>