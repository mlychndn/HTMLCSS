const csv = require("csv-parser");
const csvv = require("csvtojson");
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

    if (count >= 4) {
      break;
    }
  }
  return resultObj;
}

const promiseResult = function (file) {
  console.log(`${file}`);
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

exports.matchDataHandler = async (req, res, next) => {
  try {
    // const matches = await promiseResult("./matches.csv");
    // req.matches = matches;
    next();
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.statsHandler = async (req, res) => {
  try {
    // const { matches } = req;

    // console.log(matches);

    const statsJsonArray = await csvv().fromFile("./deliveries.csv");
    const matchJsonArray = await csvv().fromFile("./matches.csv");

    const years = [...new Set(matchJsonArray.map((match) => match.SEASON))];

    const obj = {};
    for (let key of years) {
      obj[key] = {};
    }

    statsJsonArray.forEach((stats) => {
      matchJsonArray.forEach((match) => {
        if (stats.MATCH_ID === match.MATCH_ID) {
          stats.YEAR = match.SEASON;
        }
      });
    });

    // console.log(statsJsonArray);

    const mapArray = statsJsonArray.map((stats) => {
      let statObj = {};
      statObj["id"] = stats.MATCH_ID;
      statObj["year"] = stats.YEAR;
      statObj["team"] = stats.BATTING_TEAM;
      statObj["runs"] = stats.BATSMAN_RUNS;
      statObj["total"] = stats.TOTAL_RUNS;

      return statObj;
    });

    console.log(mapArray);

    mapArray.forEach((match) => {
      obj[match.year][match.team] = {};
    });

    mapArray.forEach((match) => {
      if (match.runs === "4") {
        obj[match.year][match.team]["count4"] =
          (obj[match.year][match.team]["count4"] || 0) + 1;
      } else if (match.runs === "6") {
        obj[match.year][match.team]["count6"] =
          (obj[match.year][match.team]["count6"] || 0) + 1;
      }
    });

    res.status(200).json(obj);
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
