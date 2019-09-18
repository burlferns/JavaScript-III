/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding for the "this" keyword means that the "this" keyword in a method refers to the object to the left of the dot at the method call statement.  
* 2. Explicit binding for the "this" keyword means that the "this" keyword in a function refers to the object that is the first argument in one of three specific method calls of the function. These specific methods are call(), apply() & bind(). 
* 3. New binding for the "this" keyword means that the "this" keyword in a function refers to the object created by the function.
* 4. Window binding for the "this" keyword means that the "this" keyword in a function refers to the global object. The global object is window in a browser. This is a default "this" binding and it occurs when the other types of "this" binding cannot happen. 
*
* write out a code example of each explanation above
*/


console.log("************************* This is output from THIS.JS ***************************");

// Principle 1
// code example for Window Binding
myVar = "This is a property of the global object";
const displayGlobalMyVar = function() {
    console.log(this.myVar);
}
displayGlobalMyVar();


// Principle 2
// code example for Implicit Binding
const boy = {
    name: "Fred",
    speak: function() {
        console.log(`My name is ${this.name}`);
    }
}
boy.speak();


// Principle 3
// code example for New Binding
const friendMaker = function(attr) {
    this.name = attr.name;
    this.sayHi = function() {
        console.log(`Hi my name is ${this.name}`);
    }
}
const cBing = new friendMaker( {name:"Chandler"} );
cBing.sayHi();

// Principle 4
// code example for Explicit Binding
const displayFavFood = function() {
    console.log(`${this.name} says her favorite food is ${this.favFood}`);
}
const girl = {
    name:"Rachel",
    favFood:"Ice Cream"
}
displayFavFood.call(girl);
