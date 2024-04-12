const express = require("express");
const cors = require("cors");

const router = express.Router();

const corsOrigin = "http://localhost:3000";
router.use(
  cors({
    origin: [corsOrigin],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const userControllers = require("./controllers/userControllers");

// DOWNLOAD IMAGE IN BINARY
router.post("/download", userControllers.addImage);

/* ************************************************************************* */

module.exports = router;
