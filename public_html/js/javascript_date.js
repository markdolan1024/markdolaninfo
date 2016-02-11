// Mark Dolan Info JavaScript Date Functions


var then = new Date(2010, 0, 1);
console.log("then");
console.log(then);

var later = new Date(2010, 0, 1, 17, 10, 30);
console.log("later, then with a different time");
console.log(later);

console.log("later getFullYear");
console.log(later.getFullYear());

console.log("later getMonth");
console.log(later.getMonth());

console.log("later getDate");
console.log(later.getDate());

console.log("later getDay");
console.log(later.getDay());

console.log("later getHours");
console.log(later.getHours());

console.log("later getUTCHours");
console.log(later.getUTCHours());

console.log("later toString");
console.log(later.toString());

console.log("later toUTCString");
console.log(later.toUTCString());

console.log("later toLocaleDateString");
console.log(later.toLocaleDateString());

console.log("later toLocaleTimeString");
console.log(later.toLocaleTimeString());

console.log("later toISOString");
console.log(later.toISOString());
