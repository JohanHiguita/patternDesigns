class Sum {
    constructor(v = 0) {
        this.result = v;
    }

    sum(val) {
        this.result += val;
        return this; //Returning "this" allows to chain methods
    }

    multiply(val) {
        this.result *= val;
        return this; //Returning "this" allows to chain methods
    }
}

const o = new Sum();

const r = o
    .sum(10)
    .sum(5)
    .multiply(10)
    .sum(-50)
    .result

console.log(r);