let sentenceString = "JavaScript is amazing!";
console.log(sentenceString);

let count = 0;
console.log(count);

let i = 0;
while(i < sentenceString.length){
    let letterPicked = sentenceString[i];
    console.log("letter on the line", i, "is", letterPicked);
    if (letterPicked=== "a"){
        count= count + 1;
        console.log(" 'a' found, Count is now",count);
    }
        i =i+1;

}
console.log("Total letter 'a's found:",count);
