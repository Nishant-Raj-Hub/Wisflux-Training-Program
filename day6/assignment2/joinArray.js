let array = ["nishant", "ashish", "darshan"];
console.log("Original Array:", array);

let joinedString = array.join();
console.log("Joined String (default separator):", joinedString);

let customSeparatorString = array.join(" - ");
console.log("Joined String (custom separator):", customSeparatorString);