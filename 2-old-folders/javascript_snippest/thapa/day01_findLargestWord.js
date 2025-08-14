//   Find largest words that takes a string as input and returns longest word in the string



const findLargestWord = (str) => {
    if (str.trim().lentgth === 0) {
        return false;
    }
    words = str.trim().split(" ");
    console.log(words);
    

    // 1. last word is largest word{(a.length - b.length) - its giving in desc order]
    // words = words.sort((a,b) => a.length - b.length);
    // console.log(words);
    // return words.at(-1) // at(-1) is used to fetch last element

    // 2. 1st word is largest word{(b.length - a.length) - its giving in asc order]
    // words = words.sort((a,b) => b.length - a.length);
    // console.log(words);
    // return words[0]; // to fech 1st word

    // 3. using reduce method 
    // return words.reduce(
    //     (accum,curWord) => (curWord.length > accum.length ? curWord : accum), 
    //     ""
    // );

    // 4. using for loop 
    // let largest = "";

    // for (let word of words) {
    //     if (word.length > largest.length) {
    //         largest = word;
    //     }
    // }
    // return largest;

    // 5. using map() + Math.max()
    // const maxLength = Math.max(...words.map(word => word.length));
    // return words.find(word => word.length === maxLength);
    
    // 6. shortest one liner 
    const findLargestWord = str => str.trim().split(" ").reduce((a, b) => a.length > b.length ? a : b, "");
    

}

// input
console.log(
    findLargestWord("Watch thapa Technical javascript course on youtube")
);
