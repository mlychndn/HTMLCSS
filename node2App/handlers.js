exports.homePageHandler = (req, res) => {
  res.sendFile(index.html);
};

exports.postPageHandler = (req, res) => {
  const { fname, lname } = req.body;
  res.send(`<h1>${fname} ${lname} is the creator of Node.js ❤️</h1>`);
};
