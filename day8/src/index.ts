//Arrays
let array: any[] = [1, 2, 3, 4];
array.push(5);
console.log(array);


//tuple
let tuple: [number, String] = [1, "Nishant"];
// tuple.push(2);
// tuple.push("Nishant");
// console.log(tuple);


//enum
enum size {small = 1, medium, large};
let mySize = size.medium;
console.log(mySize);

//function
function calculateTax(income: number, taxYear=2022): number {
    if(taxYear < 2022){
        return income*1.3;
    }
    return income*1.2;
}
calculateTax(10_000, 2023);