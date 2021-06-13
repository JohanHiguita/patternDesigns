class myClass {
    constructor(){
        this.m1 = () => {console.log("m1");} // Added to the prototype
    }

    // Added to the prototype
    m2(){console.log("m2")}

    // Not Added to the prototype
    m3 = function(){console.log("m3")}
}