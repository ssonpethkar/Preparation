
// <!-- flatten array : with inbuilt function -->

var arr1 = [1,2,3,[4,5,4],[5,0,[3,2,1]]]
var flattenArr = arr1.flat(Infinity)
console.log(flattenArr)

// <!-- o/p :
// [
//   1, 2, 3, 4, 5,
//   4, 5, 0, 3, 2,
//   1
// ] -->



// ----------------------------------------------------------------------------------------------------------------------------


// <!-- flatten array : without inbuilt function with recursion-->

var arr2 = [1,2,3,[4,5,4],[5,0,[3,2,1]]]

function deepFlatten(arr2){
    var result = []
    // <!-- using for loop -->
    // <!-- for(var i=0; i<arr2.length; i++){
    //     // console.log(arr2[i])
    //     // console.log(typeof(arr2[i]))
    //     if (Array.isArray(arr2[i])){
    //         console.log(arr2[i])
    //         result= result.concat(deepFlatten(arr2[i]))
    //     }else {
    //         // console.log(arr2[i])
    //        result.push(arr2[i])
    //     }
    // } -->

    // <!-- using for each loop -->

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

// <!-- using reduce function + recursion -->

function flattenWithReduce(arr2){
    return arr2.reduce((acc,val)=>{
        return acc.concat(Array.isArray(val)? flattenWithReduce(val) : val)
    },[])
}

console.log(flattenWithReduce(arr2))




