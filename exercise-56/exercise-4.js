function sum(...num) {
  return num.reduce((prev, current)=> prev+current, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));