const balls = [
  { bowler: "TS Mills", runs: 0, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 0, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 4, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 0, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 2, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 0, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 0, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 1, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 4, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 1, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 6, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 0, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 0, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 4, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 1, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 0, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 0, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 3, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 1, year: "2017", id: "1" },
  { bowler: "TS Mills", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 0, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 0, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "S Aravind", runs: 1, year: "2017", id: "1" },
  { bowler: "S Aravind", runs: 1, year: "2017", id: "1" },
  { bowler: "S Aravind", runs: 1, year: "2017", id: "1" },
  { bowler: "S Aravind", runs: 2, year: "2017", id: "1" },
  { bowler: "S Aravind", runs: 4, year: "2017", id: "1" },
  { bowler: "S Aravind", runs: 0, year: "2017", id: "1" },
  { bowler: "SR Watson", runs: 4, year: "2017", id: "1" },
  { bowler: "SR Watson", runs: 4, year: "2017", id: "1" },
  { bowler: "SR Watson", runs: 0, year: "2017", id: "1" },
  { bowler: "SR Watson", runs: 4, year: "2017", id: "1" },
  { bowler: "SR Watson", runs: 4, year: "2017", id: "1" },
  { bowler: "SR Watson", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 0, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "TM Head", runs: 1, year: "2017", id: "1" },
  { bowler: "TM Head", runs: 1, year: "2017", id: "1" },
  { bowler: "TM Head", runs: 1, year: "2017", id: "1" },
  { bowler: "TM Head", runs: 6, year: "2017", id: "1" },
  { bowler: "TM Head", runs: 1, year: "2017", id: "1" },
  { bowler: "TM Head", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 2, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 1, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 2, year: "2017", id: "1" },
  { bowler: "YS Chahal", runs: 2, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 0, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 1, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 1, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 1, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 1, year: "2017", id: "1" },
  { bowler: "A Choudhary", runs: 0, year: "2017", id: "1" },
  { bowler: "STR Binny", runs: 1, year: "2017", id: "1" },
  { bowler: "STR Binny", runs: 4, year: "2017", id: "1" },
  { bowler: "STR Binny", runs: 0, year: "2017", id: "1" },
  { bowler: "STR Binny", runs: 1, year: "2017", id: "1" },
  { bowler: "STR Binny", runs: 2, year: "2017", id: "1" },
  { bowler: "STR Binny", runs: 2, year: "2017", id: "1" },
  { bowler: "S Aravind", runs: 1, year: "2016", id: "1" },
  { bowler: "S Aravind", runs: 0, year: "2016", id: "1" },
  { bowler: "S Aravind", runs: 1, year: "2016", id: "1" },
  { bowler: "S Aravind", runs: 1, year: "2016", id: "1" },
  { bowler: "S Aravind", runs: 4, year: "2016", id: "1" },
  { bowler: "S Aravind", runs: 1, year: "2016", id: "1" },
  { bowler: "A Choudhary", runs: 4, year: "2016", id: "1" },
  { bowler: "A Choudhary", runs: 6, year: "2016", id: "1" },
  { bowler: "A Choudhary", runs: 4, year: "2016", id: "1" },
  { bowler: "A Choudhary", runs: 0, year: "2016", id: "1" },
  { bowler: "A Choudhary", runs: 1, year: "2016", id: "1" },
  { bowler: "A Choudhary", runs: 2, year: "2016", id: "1" },
  { bowler: "A Choudhary", runs: 1, year: "2016", id: "1" },
];

function matchInfo(balls) {
  const output = {};
  balls.forEach((match) => {
    const { bowler, runs, year } = match;

    if (!output[year]) {
      output[year] = {};
    }

    if (!output[year][bowler]) {
      output[year][bowler] = { totalballs: 0, totalruns: 0 };
    }

    output[year][bowler].totalballs++;
    output[year][bowler].totalruns += runs;
  });

  return output;
}

console.log(matchInfo(balls));
// // bowlerArray.forEach((bowler) => {
// //   console.log(bowler);
// // });

// // const result = balls.reduce((acc, ball) => {
// //   const bowlerName = ball.bowler;
// //   const runs = ball.runs;
// //   const year = ball.year;

// //   if (!acc[bowlerName]) {
// //     acc[bowlerName] = {
// //       totalBall: 0,
// //       totalRun: 0,
// //     };
// //     acc[bowlerName][year] = "";
// //   }

// //   acc[bowlerName].totalBall++;
// //   acc[bowlerName].totalRun += runs;

// //   return acc;
// // }, {});

// // console.log(result);

// // const yearWiseResult = balls.reduce((acc, ball) => {
// //   const year = ball.year;
// //   const bowlerName = ball.bowler;
// //   const runs = ball.runs;

// //   if (!acc[year]) {
// //     acc[year] = {};
// //     if (!acc[year][bowlerName]) {
// //       acc[year][bowlerName] = {
// //         totalBall: 0,
// //         totalRun: 0,
// //       };
// //     }
// //   }

// //   // acc[year][bowlerName].totalBall++;
// //   // acc[year][bowlerName].totalRun += runs;

// //   return acc;
// // });

// // console.log(yearWiseResult);

// const cricketData = [
//   { year: 2016, bowler: "A Choudhary", balls: 6, runs: 18 },
//   { year: 2016, bowler: "AB Dinda", balls: 24, runs: 65 },
//   { year: 2016, bowler: "AB Dinda", balls: 24, runs: 63 },
//   { year: 2017, bowler: "A Nehra", balls: 24, runs: 42 },
//   { year: 2017, bowler: "A Nehra", balls: 24, runs: 45 },
// ];

// const output = {};

// cricketData.forEach((match) => {
//   const { year, bowler, balls, runs } = match;
//   if (!output[year]) {
//     output[year] = {};
//   }
//   if (!output[year][bowler]) {
//     output[year][bowler] = { totalballs: 0, totalruns: 0 };
//   }
//   output[year][bowler].totalballs += balls;
//   output[year][bowler].totalruns += runs;
// });

// console.log(output);

const data = [
  { year: "2016", bowler: "John", totalruns: 50, balls: 30 },
  { year: "2016", bowler: "Jane", totalruns: 40, balls: 25 },
  { year: "2017", bowler: "John", totalruns: 60, balls: 35 },
  { year: "2017", bowler: "Jane", totalruns: 35, balls: 20 },
  { year: "2017", bowler: "Bob", totalruns: 70, balls: 45 },
];

const result = {};

data.forEach((entry) => {
  const { year, bowler, totalruns, balls } = entry;
  if (!result[year]) {
    result[year] = [];
  }
  const existingBowlerIndex = result[year].findIndex(
    ([name, data]) => name === bowler
  );
  if (existingBowlerIndex === -1) {
    result[year].push([bowler, { totalruns, balls }]);
  } else {
    const [existingName, existingData] = result[year][existingBowlerIndex];
    existingData.totalruns += totalruns;
    existingData.balls += balls;
  }
});

console.log(JSON.stringify(result));
