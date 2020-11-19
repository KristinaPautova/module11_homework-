const pow = (x, n)  => {
    let num = x;
    for (let i = 1; i < n; i++) {
        num *= x;
    }
    return num;
}
console.log(pow(1, 100));
console.log(pow(3, 2));