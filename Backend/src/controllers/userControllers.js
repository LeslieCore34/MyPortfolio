const tables = require("../tables");

const addImage = async (req, res, next) => {
  const image = req.body["image"];
  console.log("image", req.body);
  try {
    const pushImage = await tables.projects.addOne({ image });

    res.status(201).json(pushImage);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addImage,
};
