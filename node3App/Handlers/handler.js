const csv = require("csv-parser");
const fs = require("fs");

const results = [];

function modifyMatchData(matchData, year) {
  const matchDataArr = matchData
    .filter((match) => match.SEASON === year)
    .filter((match) => match.TOSS_DECISION === "field")
    .sort((a, b) => {
      let fa = a.TOSS_WINNER.toLowerCase(),
        fb = b.TOSS_WINNER.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    })
    .map((match) => {
      return match.TOSS_WINNER;
    });

  let matchObj = {};

  for (let team of matchDataArr) {
    matchObj[team] = (matchObj[team] || 0) + 1;
  }

  return matchObj;
}

function getTeamCountObj(matchYear) {
  const resultObj = {};
  let count = 0;
  for (let key in matchYear) {
    resultObj[count] = [key, matchYear[key]];
    count++;
  }
  return resultObj;
}

const promiseResult = function (file) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(file)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      });
  });
};

exports.matchResultHandler = async (req, res) => {
  try {
    const matchData = await promiseResult("./matches.csv");
    const match2016 = modifyMatchData(matchData, "2016");
    const match2017 = modifyMatchData(matchData, "2017");

    const result2016Obj = getTeamCountObj(match2016);
    const result2017Obj = getTeamCountObj(match2017);

    let result = {};

    result["2016"] = result2016Obj;
    result["2017"] = result2017Obj;

    res.status(200).json({
      ...result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.statsHandler = async (req, res) => {
  try {
    const stats = await promiseResult("./deliveries.csv");
    console.log(stats);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
