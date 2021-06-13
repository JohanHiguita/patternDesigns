//IIFE
const res = (() => {
    const x = {}; // private API

    return {
        a: () => console.log(x),  // getter
        b: (key, val) => x[key] = val // setter
    }
    
})();

console.log(res.x); //undefined
console.log(res.a()); 
console.log(res.b("k1", "val1"));
console.log(res.a()); 