



let intermediateObject = {
  sayHi: function() {
    console.log("HI")
  }
}

let Brandon = {
  name: "Brandon",
  hobby: "Coding"
}
Brandon.__proto__ = intermediateObject;

console.log(Brandon);
Brandon.sayHi();
Brandon.toString();
