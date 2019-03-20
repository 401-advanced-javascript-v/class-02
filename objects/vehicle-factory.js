'use strict';

const Vehicle= () =>({
  drive: () =>{
    return 'Moving Forward';
  },

  stop: () => {
    return 'Stopping';
  },
});

function CarFactory(name, wheels) {
  let car = Object.assign(
    {},
    {name},
    {wheels},
    Vehicle()
  );
  console.log(Object.freeze(car));
  return Object.freeze(car);
}
function MotorcycleFactory(name, wheels) {
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels},
    {wheelie},
    Vehicle()
  );

  function wheelie () {
    return 'wheee!';
  }

  return Object.freeze(motorcycle);
}

module.exports = {CarFactory, MotorcycleFactory};