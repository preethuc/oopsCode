// Object literal
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw a circle");
//   },
// };
// circle.draw();

//factory functions
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw circles1");
//     },
//   };
// }
// const circle = createCircle(1);
// circle.draw();

//Constructor

function Circle1(radius) {
  // console.log(radius);
//   console.log("this", this);

  this.radius = radius;
  this.draw = function () {
    console.log("draw circles2");
  };
}
const Circle2 = new Circle1(2);
// const Circle2 =  Circle(2);
Circle2.draw();

//object===functions

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw circles3");
//   };
// }

// const circle = new Circle(5);

// //keys in property and method

// for (let key in circle) {
//   console.log(key,circle[key]);
// }
// const keys = Object.keys(circle)
// console.log(keys);
// // circle.draw();
// if ('radius' in circle)
// {
//     console.log('Circle has a radius');
// }

//Abstraction
function Circle(radius) {
  this.radius = radius;
  //private method
  let defaultLocation = { x: 0, y: 0 };
  // this.getDefaultLocation = function () {
  //   return defaultLocation;
  // };
  // private function
    let optimumLocation = function (num) {};
  this.draw = function () {
    optimumLocation(0.1);
    defaultLocation;
    console.log("draw circle");
  };

  // Object.defineProperty(this, "defaultLocation", {
  //   get: function () {
  //     return defaultLocation;
  //     },
  //     set: function (value) {
  //         if (!value.x || !value.y) {
  //             throw new Error('Invalid location')
  //         }
  //         defaultLocation = value
  //     }
  // });
}
const circle = new Circle(10);

circle.draw();
