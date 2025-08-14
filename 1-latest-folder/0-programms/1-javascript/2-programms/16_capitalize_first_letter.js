let str = "this is swati"

let capitalizeFirst = str.split(" ")
    .map((char) => char.charAt(0).toUpperCase()+ char.slice(1))
    .join(" ")

console.log(capitalizeFirst);


