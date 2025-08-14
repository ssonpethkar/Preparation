var a = '12'
console.log(a* 12);
console.log(a ** 12);
// o/p : 
// 144
// 8916100448256

function test() {
    salary = 1200
    console.log(salary);
}

test()
// o/p : 1200

function test1() {
    console.log(test1.abc);
    
}

test1()
test1.abc = 900
test1.abc = 800
test1()
// o/p : 
// undefined
// 800

console.log({}== {}); //false
// console.log({}==={}); // false


console.log(null == undefined); // true
console.log(null === undefined); // false

// flatten array 



let arr = [
    [1,2],
    [3,4,5],
    [5,6,7,[8,3],5],
    [10,11]
]