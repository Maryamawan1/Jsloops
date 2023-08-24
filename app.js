
// 1. Sum all the array elements by using a loop. [5,3,4]; output = 12
// 2. reverse an array by using looop. [5,3,4] , [4,3,5]
// 3. Make a table of the given number with for loop.
// 4. Find the largest number in an array by using loop.
// 5. Find the smallest number in an array by using loop.


//1.Sum all the array elements by using a loop.

let array = [5, 3, 4]

let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("1.\The sum of the array is:", sum);

//3. Make a table of the given number with for loop:
          
console.log("2.table of given number:");
let number = 2;


for(let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}


// 4.Find the largest number in an array:


let array2=[10,27,3,60,50];
let largest =array2[0];
for (let i = 1;i<array2.length; i++) {
if(array2[i]>largest){
    largest=array2[i];
}
  
}
console.log("3.largest number:",largest);

// 5. Find the smallest number in an array.
let array3=[10,27,3,60,50];
let smallest =array3[0];
for (let i = 1;i<array3.length; i++) {
if(array3[i]<smallest ){
    smallest=array3[i];
}
  
}
console.log("4.smallest number:",smallest);


  
  
  
  
  
  
  