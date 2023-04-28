const express = require("express");
const app = express();

// set 'jade' as the 'view engine'
app.set("view engine", "jade");

// define route
app.get("/", function (req, res) {
  const data = {
    option: "students",
    Students: ["Athul", "Ramij", "Nil", "Satyaki", "Souvik"],
    Teachers: ["Swarnali", "Paromita", "Poulomi", "sreejukta"],
  };

  // render the jade template with data
  res.render("view", data);
});

// start the server
app.listen(8000, function () {
  console.log("Server is running on port 8000");
});

//  https://www.npmjs.com/package/packagename.
