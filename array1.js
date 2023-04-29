// Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let numbers= [];
for(var i=0 ; i<10 ; i++){
    let number = Math.floor(Math.random()*999);
    numbers.push(number);
}
console.log(numbers);

let largestNumber = 0;
let secondLargestNumber = 0;
let smallestNumber = numbers[9];
let secondSmallestNumber = numbers[0];

for(number of numbers){
    
  if(number > largestNumber){
    secondLargestNumber = largestNumber;
    largestNumber = number;
  } else if(number > secondLargestNumber && number != largestNumber){
    secondLargestNumber = number;
  }
  
  if(number < smallestNumber){
    secondSmallestNumber = smallestNumber;
    smallestNumber = number;
  } else if(number < secondSmallestNumber && number != smallestNumber){
        secondSmallestNumber = number;
  }
}

console.log("Largest element is => ",largestNumber);
console.log("Second largest element is => ",secondLargestNumber);
console.log("Smallest element is => ",smallestNumber);
console.log("Second smallest element is => ",secondSmallestNumber);