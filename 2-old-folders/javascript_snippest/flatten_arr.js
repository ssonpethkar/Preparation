// without in built function
var a1 = [1,2,3,4,[5,6], 7, [8,9]]
var temp = []

function flatarr(arr, temp){
    for(var i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flatarr(arr[i], temp)
        }else{
            temp.push(arr[i])
        }
    }
    
}

flatarr(a1, temp)
console.log(temp)


// with in built function
var a1 = [1,2,3,4,[5,6], 7,8]
var flatarr1 = a1.flat();
console.log(flatarr1);



function check() {
    let x = y = 0;
    x++;
    return x;
  }
  
check();
console.log(typeof x); // => output undefined
console.log(typeof y); // => output number
// What happens here?
// let x = y = 0;
// x is declared with let, meaning it is block-scoped to the function.
// y is not declared with let, var, or const, so JavaScript implicitly creates y as a global variable (if not in strict mode).