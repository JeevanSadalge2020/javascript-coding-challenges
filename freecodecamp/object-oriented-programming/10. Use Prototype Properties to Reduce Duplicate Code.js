function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add a numLegs property to the prototype of Dog

Dog.prototype.numLegs = 4;
