const homePage = (req, res) => {
  res.status(200).send(`<h1>Welcome to the Food Server.</h1>`);
};
const health = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Ok",
  });
};

module.exports = { homePage, health };
