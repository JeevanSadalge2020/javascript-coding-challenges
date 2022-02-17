function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

const myHouse = new House(2);
console.log(myHouse instanceof House);
