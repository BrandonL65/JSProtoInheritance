
function Animal(name, species) 
{
  this.name = name;
  this.species = species;
  this.sayName = function() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

