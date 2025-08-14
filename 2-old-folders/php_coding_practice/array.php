<?php
// 1. Find the Maximum Value in an Array

// With Built-in Function:
$numbers = [15, 22, 8, 19, 31, 6];
$maxValue = max($numbers);
echo "Maximum value: $maxValue\n"; // Output: 31

// Without Built-in Function:
$numbers = [15, 22, 8, 19, 31, 6];
$maxValue = $numbers[0];
foreach ($numbers as $number) {
    if ($number > $maxValue) {
        $maxValue = $number;
    }
}

echo "Maximum value: $maxValue\n"; // Output: 31

// ****************
// 2. Reverse a String

// With Built-in Function:
$string = "Interview";
$reversedString = strrev($string);
echo "Reversed string: $reversedString\n"; // Output: weivretnI


// Without Built-in Function:
$string = "Interview";
$reversedString = '';
$length = strlen($string);

for ($i = $length - 1; $i >= 0; $i--) {
    $reversedString .= $string[$i];
}

echo "Reversed string: $reversedString\n"; // Output: weivretnI

// *****************************************
// 3. Find the Frequency of Each Element in an Array

// With Built-in Function:

$letters = ["a", "b", "a", "c", "b", "a"];

$frequency = array_count_values($letters);

print_r($frequency);
// Output:
// Array
// (
//     [a] => 3
//     [b] => 2
//     [c] => 1
// )

// Without Built-in Function:
$letters = ["a", "b", "a", "c", "b", "a"];
$frequency = [];

foreach ($letters as $letter) {
    if (isset($frequency[$letter])) {
        $frequency[$letter]++;
    } else {
        $frequency[$letter] = 1;
    }
}

print_r($frequency);
// Output:
// Array
// (
//     [a] => 3
//     [b] => 2
//     [c] => 1
// )


// ***********************************************
// 4. Check if an Array Contains a Specific Value
    
// With Built-in Function:
$fruits = ["apple", "banana", "cherry", "date"];
$search = "cherry";

$containsValue = in_array($search, $fruits);

echo $containsValue ? "true\n" : "false\n"; // Output: true

// Without Built-in Function:
$fruits = ["apple", "banana", "cherry", "date"];
$search = "cherry";
$containsValue = false;
foreach ($fruits as $fruit) {
    if ($fruit == $search) {
        $containsValue = true;
        break;
    }
}
echo $containsValue ? "true\n" : "false\n"; // Output: true

// ****************************************
// 5. Sort an Array in Ascending Order

// With Built-in Function:
$numbers = [3, 1, 4, 1, 5, 9, 2, 6];
sort($numbers);
print_r($numbers);
// Output:
// Array
// (
//     [0] => 1
//     [1] => 1
//     [2] => 2
//     [3] => 3
//     [4] => 4
//     [5] => 5
//     [6] => 6
//     [7] => 9
// )

// Without Built-in Function:
$numbers = [3, 1, 4, 1, 5, 9, 2, 6];
$length = count($numbers);

for ($i = 0; $i < $length - 1; $i++) {
    for ($j = 0; $j < $length - $i - 1; $j++) {
        if ($numbers[$j] > $numbers[$j + 1]) {
            // Swap the elements
            $temp = $numbers[$j];
            $numbers[$j] = $numbers[$j + 1];
            $numbers[$j + 1] = $temp;
        }
    }
}

print_r($numbers);
// Output:
// Array
// (
//     [0] => 1
//     [1] => 1
//     [2] => 2
//     [3] => 3
//     [4] => 4
//     [5] => 5
//     [6] => 6
//     [7] => 9
// )

// *****************************************
// 6. Capitalize the First Letter of Each Word in a String

// With Built-in Function:
$string = "this is a test sentence.";
$capitalizedString = ucwords($string);
echo "Result: $capitalizedString\n"; // Output: This Is A Test Sentence.

// Without Built-in Function:
$string = "this is a test sentence.";
$words = explode(' ', $string);
$capitalizedString = '';

foreach ($words as $word) {
    $capitalizedString .= strtoupper($word[0]) . substr($word, 1) . ' ';
}

$capitalizedString = trim($capitalizedString);

echo "Result: $capitalizedString\n"; // Output: This Is A Test Sentence.



// ************************************************************
// 7. Merge Two Arrays and Remove Duplicates

// With Built-in Function:
$array1 = [1, 2, 3, 4];
$array2 = [3, 4, 5, 6];

$mergedArray = array_unique(array_merge($array1, $array2));

print_r($mergedArray);
// Output:
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
//     [3] => 4
//     [4] => 5
//     [5] => 6
// )

// Without Built-in Function:
$array1 = [1, 2, 3, 4];
$array2 = [3, 4, 5, 6];
$mergedArray = [];

foreach ($array1 as $value) {
    if (!in_array($value, $mergedArray)) {
        $mergedArray[] = $value;
    }
}

foreach ($array2 as $value) {
    if (!in_array($value, $mergedArray)) {
        $mergedArray[] = $value;
    }
}

print_r($mergedArray);
// Output:
// Array
// (
//     [0] => 1
//     [1] => 2
//     [2] => 3
//     [3] => 4
//     [4] => 5
//     [5] => 6
// )


// ***************************************
// 8. Find the Position of a Value in an Array

// With Built-in Function:
$array = [10, 20, 30, 40, 50];
$search = 40;
$position = array_search($search, $array);
echo "Position: $position\n"; // Output: 3


// Without Built-in Function:
$array = [10, 20, 30, 40, 50];
$search = 40;
$position = -1;

for ($i = 0; $i < count($array); $i++) {
    if ($array[$i] == $search) {
        $position = $i;
        break;
    }
}

echo "Position: $position\n"; // Output: 3


?>