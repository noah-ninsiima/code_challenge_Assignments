
//program that takes a string and capitalizes the first letter of each word.

let sentenceInput = "ministry of public service";
let eachword = sentenceInput.trim().split(" ");
let capitaliseWords = eachword.map(function(eachword)
{ return eachword[0].toUpperCase() + eachword.slice(1);

});
let sentenceOutput = capitaliseWords.join(" ");

//step by step aproach in the console 
console.log(sentenceInput);
console.log(eachword);
console.log(capitaliseWords);
console.log(sentenceOutput);
