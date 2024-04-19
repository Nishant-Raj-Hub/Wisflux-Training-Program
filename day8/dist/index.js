"use strict";
let array = [1, 2, 3, 4];
array.push(5);
console.log(array);
let tuple = [1, "Nishant"];
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
;
let mySize = size.medium;
console.log(mySize);
//# sourceMappingURL=index.js.map