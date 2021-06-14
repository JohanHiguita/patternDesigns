/*
1. split the name into an array on spaces
2. map the name to lower case
3. join with dashes
4. encode the URI component 
 */

const strTest = "Johan Esteban Higuita, edad?";

// Way 1
const getResult = (str) => {
    return encodeURIComponent(
        str
        .split(" ")
        .map((v) => v.toLowerCase())
        .join("-")
    )    
}
const result1 = getResult(strTest)
console.log("Test 1:", result1);

// Way 2
const split = (str) => str.split(" "); 
const toLowerCase = (arr) => arr.map((v) => v.toLowerCase());
const join = (arr) => arr.join("-")


const result2 = encodeURIComponent(join(toLowerCase(split(strTest))));
console.log("Test 2:", result2);

// Way 3
const compose = (...fns) => (str) => fns.reduceRight((y, f) => f(y), str)
const getResult3 = compose(encodeURIComponent, join, toLowerCase, split); 
const result3 = getResult3(strTest)
console.log("Test 3:", result3);

// Way 4
const _compose = (...fns) => (str) => fns.reduce((y, f) => f(y), str)
const getResult4 = _compose(split, toLowerCase, join, encodeURIComponent); 
const result4 = getResult4(strTest)
console.log("Test 4:", result4);

