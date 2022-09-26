// cerner_2tothe5th_2022
// Javascript code to display * in the shape of pyramid

let n = 5; // Numer of lines in which pyramid is drawn
let string = ""; // Empty String to populate the String pattern

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n"; // Add a new line
}
console.log(string);
