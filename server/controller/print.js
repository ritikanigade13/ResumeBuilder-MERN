const printHi = (req, res) => {
  const { name } = req.body;
  if (name === "ritika") {
    res.send(`hi ${name}`);
  } else {
    res.send(`bye`);
  }
};

module.exports = { printHi };
