let arr = [3,7,5,6,2,1,8];


arr.sort((a, b) => a - b);
console.log("Sorted in ascending order:", arr); 

arr.sort((a, b) => b - a);
console.log("Sorted in descending order:", arr); 