const add = (a: number, b: number = 0): number => {
    if(b === undefined){
        b = 0;
    }
    return a + b;
}

console.log(add(5));
