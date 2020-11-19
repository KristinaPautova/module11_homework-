function sum(a) {
    return function(b) {
        return a + b;
    }
}

const retSum = sum(3);
console.log(retSum(5));
// console.log(sum(3)(5));