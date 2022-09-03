function sum(... num) {
    return num.reduce((prev, current)=> prev+current, 0);
}

console.log(sum(1, 2, 3, 4, 5));