// Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for minimum times

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let map = new Map();

while(count1 != 11 && count2 != 11 && count3 != 11 && count4 != 11 && count5 != 11 && count6 != 11){
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    switch(diceRoll){
        case 0: count1++
        break
        
        case 1: count2++
        break

        case 2: count3++
        break

        case 3: count4++
        break

        case 4: count5++
        break

        case 5: count6++
        break
    }
}

map.set(1,count1);
map.set(2,count2);
map.set(3,count3);
map.set(4,count4);
map.set(5,count5);
map.set(6,count6);

for(let i=1 ; i <= map.size ; i++){
    console.log(i+" "+map.get(i))
}

maximum = 0;
minimum = 10;
for(let k of map.values()){
    if(minimum > k){
        minimum = k
    }
    if(k > maximum){
        maximum = k
    }
}

for(let [key,value] of map){
    if(value == maximum){
        console.log("Number that repeated maximum times is " +key+ " and it was repeated for " +value+ " times.")
    }
    if(value == minimum){
        console.log("Number that repeated minimum times is " +key+ " and it was repeated for " +value+ " times.")
    }
}