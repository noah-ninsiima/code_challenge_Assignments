//prompt User to enter curent Year
let currentYear =prompt("Please Enter current year")
//convert input into number
currentYear=Number(currentYear);
    if(isNaN(currentYear)){
        console.log("Invalid input! Please enter numbers only.");
    }else{
        console.log("Current year is:", currentYear);
        let YearOfBirth =prompt(" Please Enter your year of birth")

        //convert input into number
        YearOfBirth=Number(YearOfBirth);
        if (isNaN(YearOfBirth)){
            console.log("Invalid input! Please enter numbers only.");
    }else{
          console.log("Your year of birth is:", YearOfBirth);
    //calculate the age
         let age =currentYear - YearOfBirth;
         console.log("Your age is:", age);

         
    //Determine age category

    if (age<0){
        console.log("You entered year of birth later than current year entered");
    }else if (age < 18) {
     console.log("You are a minor.");
    } else if (age >= 18 && age <= 36) {
     console.log("You are a youth.");
    } else {
      console.log("You are an elder.");
    }


    }
    
}



