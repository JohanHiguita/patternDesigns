// 1. Add method
Object.prototype.log = function () {
    console.log(this);
}
const x = {a: 1}

x.log();

// 2. Pollyfill
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        try {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        } catch (error) {
            return this;
        }
    }
}

const str = "  Johannn  ".trim();
console.log(str);