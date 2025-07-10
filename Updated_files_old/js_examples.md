<!-- closure : Closure is a javascript function that can accessed outer function variable in their inner function if the outer function has finished the execution  -->

function outerFunc(){
    var count = 0;
    return function innerFun(){
        count++;
        console.log(count);
    }
}

var counter = outerFunc()
counter() 
counter()
counter()
// o/p : 
1
2
3

function createCounter(){
    var count = 0; 
    return {
        increment: function(){
            count++
            console.log("incremented count : "+ count)
        },
        decrement: function(){
            count--;
            console.log("Decremented count: "+ count)
        },
        getCount: function(){
            console.log("Count : "+ count)
        }
        getCount1: function(){
            console.log("Count : "+ count)
            return count;
        }
    }
}

var counterN = createCounter()
counterN.increment() 
counterN.increment() 
console.log(counterN.getCount()) 
console.log(counterN.getCount1())
counterN.decrement()

<!-- o/p : -->
<!-- incremented count : 1
incremented count : 2
Count : 2
undefined
Count : 2
2
Decremented count: 1 -->

---------------------------------------------------------------------------------------------------------------------

 <!-- currying breaks down a function that takes multiple parameter into chain function that each take one parameter  -->

<!-- normal function  -->
function sum(a,b){
    return a+b ;
}
console.log(sum(3,10));

<!-- CURRIED FUNCTION -->
function curriedFunc(a){
    return function(b){
        return a+b;
    }
}

console.log(curriedFunc(2)(3))

--------------------------------------------------------------------------------------------------------------------------

<!-- flatten array : with inbuilt function -->

var arr1 = [1,2,3,[4,5,4],[5,0,[3,2,1]]]
var flattenArr = arr1.flat(Infinity)
console.log(flattenArr)

<!-- o/p :
[
  1, 2, 3, 4, 5,
  4, 5, 0, 3, 2,
  1
] -->

<!-- flatten array : without inbuilt function with recursion-->

var arr2 = [1,2,3,[4,5,4],[5,0,[3,2,1]]]

function deepFlatten(arr2){
    var result = []
    <!-- using for loop -->
    <!-- for(var i=0; i<arr2.length; i++){
        // console.log(arr2[i])
        // console.log(typeof(arr2[i]))
        if (Array.isArray(arr2[i])){
            console.log(arr2[i])
            result= result.concat(deepFlatten(arr2[i]))
        }else {
            // console.log(arr2[i])
           result.push(arr2[i])
        }
    } -->

    <!-- using for each loop -->

    arr2.forEach((item)=>{
        if(Array.isArray(item)){
            // console.log(item)
            result = result.concat(flattenWithForEach(item))
        }else{
            // console.log(item)
            result = result.push(item)
        }
    })

    console.log(result)
    return result;
}

deepFlatten(arr2)

<!-- using reduce function + recursion -->

function flattenWithReduce(arr2){
    return arr2.reduce((acc,val)=>{
        return acc.concat(Array.isArray(val)? flattenWithReduce(val) : val)
    },[])
}

console.log(flattenWithReduce(arr2))



----------------------------------------------------------------------------------------------------------------------------

<!-- // reverse a string  -->

var name = 'hello'

var splitString = name.split('');
console.log(splitString)

var reverseString= splitString.reverse()
console.log(reverseString)

var joinReverseString = reverseString.join('')
console.log(joinReverseString)

<!-- o/p :
[ 'h', 'e', 'l', 'l', 'o' ]
[ 'o', 'l', 'l', 'e', 'h' ]
olleh
 -->

var reverseName = name.spilt('').reverse().join('')
console.log(reverseName)
<!-- o/p : olleh -->
--------------------------------------------------------------------------------------------------------------------------------

