const express = require("express");
const router = express.Router();
const path = require("path");

function onService(day, hour) {
  if (hour >= 9 && hour <= 17 && day !== 0 && day !== 6) return false;
  return true;
}

const onServiceMiddeleware = function (req, res) {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  if (!onService(day, hour)) {
    res.render("menu");
  } else res.render("outOfServices", { sec, min, hour, day });
};

router.use(onServiceMiddeleware)

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "Public", "home.html"));
});

router.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "menu.ejs"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "Public", "contact.html"));
});

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "Public", "notFound.html"));
});

module.exports = router;
