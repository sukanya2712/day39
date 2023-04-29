// Write a Program to generate a birth month of 50 individuals between the year 92 & 93. 
// Find all the individuals having birthdays in the same month. Store it to finally print.

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;
let map = new Map();

for(let i=0 ; i < 50 ; i++){
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    switch(birthMonth){
        case 1:
            count1++
            map.set("January",count1)
            break
        case 2:
            count2++
            map.set("February",count2)
            break
        case 3:
            count3++
            map.set("March",count3)
            break
        case 4:
            count4++
            map.set("April",count4)
            break
        case 5:
            count5++
            map.set("May",count5)
            break
        case 6:
            count6++
            map.set("June",count6)
            break
        case 7:
            count7++
            map.set("July",count7)
            break
        case 8:
            count8++
            map.set("August",count8)
            break
        case 9:
            count9++
            map.set("September",count9)
            break
        case 10:
            count10++
            map.set("October",count10)
            break
        case 11:
            count11++
            map.set("November",count11)
            break
        case 12:
            count12++
            map.set("December",count12)
            break                                            
    }
}

for(let [key,value] of map){
    console.log(key+ " - " +value)
}