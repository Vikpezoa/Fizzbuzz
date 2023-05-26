let number = 1;

for(let i=1; i<=100; i++) {
    if(number % 3 === 0 && number % 5 !== 0)
    {
        console.log("Fizz");
    }
    else if(number % 5 === 0 && number % 3 !== 0) 
    {
        console.log("Buzz");
    }
    else if(number % 3 === 0 && number % 5 === 0) 
    {
        console.log("FizzBuzz");
    }
    else {
        console.log(number);
    }
  number++;
}