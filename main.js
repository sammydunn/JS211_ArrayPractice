
//3
let cars = ['ford', 'jeep','chevy','lexis'];
console.log(cars.length)

//4
let moreCars = ['mozda','toyoda','GMC','honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars)

//5
console.log(cars.indexOf('honda'));
console.log(cars.lastIndexOf('ford'));

//6
console.log(totalCars.join());


//7***
let stringOfCars = totalCars.split();
console.log(totalCars);


//8
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

//9
carsInReverse.sort();
console.log(carsInReverse);
//lert(carsInReverse.indexOf('honda','jeep','lexis','toyoda','ford','GMC','honda','mozda'));

//10***
let removeCars = carsInReverse.slice(1,5);
console.log(removeCars)

//11
carsInReverse.splice(2,3,);
console.log(carsInReverse);

//12
carsInReverse.push('ford','honda')
console.log(carsInReverse);

//13
console.log(carsInReverse.pop());

//14
carsInReverse.shift();
console.log(carsInReverse);

//15
console.log(carsInReverse.unshift('BMW'))
console.log(carsInReverse)

//16
