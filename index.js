// setTimeout(() => {
//   for (let i = 0; i <= 6; i++) {
//     console.log(i);
//   }
// }, 1000);

// for (let i = 0; i <= 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

const hello2 = async () => {
  return "Hello Node.js";
};

const data = hello2();
console.log(data);
// hello2().then((data) => {
//   console.log(data);
// });
