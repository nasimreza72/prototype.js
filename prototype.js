Array.prototype.sum = function () {
    let sum = 0;
    for (let i =0; i < this.length; i++) {
        sum+= this[i];
    }
    return sum;
}

let arr = [2,6,8];
console.log(arr.sum());


//Task: add a method to string class using prototype
//method name should be capitalizeWords
// this method should capitalize first letter of each word on the string

let str = "i am a string";
//str.capitalizeWords() // => " I Am A String"



String.prototype.capitalizeWords = function () {
    let capitalizeWords = this.split(" ");
    for ( let i=0; i<capitalizeWords.length; i++) {
        capitalizeWords[i] = capitalizeWords[i].charAt(0).toUpperCase() + capitalizeWords[i].slice(1);
    }
}

let sentence = "i am a string";
console.log(sentence.capitalizeWords());
