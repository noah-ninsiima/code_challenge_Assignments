function fizzBuzz(stringOne, stringTwo){
    if(typeof stringOne !=='string' && typeof stringTwo !== 'string'){
        return "Both Inputs should be strings";
    }
    else{
        let combinedStringLength = stringOne.length + stringTwo.length;

        if(combinedStringLength % 3 === 0 && combinedStringLength % 5 === 0){
            return "FizzBuzz";
        }
        else if(combinedStringLength % 3 === 0 ){
            return "Fizz";
        }
        else if(combinedStringLength % 5 === 0 ){
            return "Buzz";
        }
        else{
            return "combined length is not divissible by either 3 or 5";
        }
    }
}

    let result = fizzBuzz('Noah', 'Ninsiimaaaa');
    console.log(result)

// 
//