// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array

let array = [];
let index = 0;

for(let i=1 ; i <= 100 ; i++){
  if(i % 11 == 0){
    array[index] = i;
    index++;
    }
}

console.log(array);