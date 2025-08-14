<!-- check the count without using default methods  -->
<?php
$num = [10,20,30,40,50];

// default method
echo count($num);
echo "</br>";
$count = 0;
foreach ($num as $item) {
    # code...
    $count++;
}
echo $count;
?>