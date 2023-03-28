const express = require("express");
const app = express();
const port = 8081;
const userRouter = require("./routes/views");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/Public"));

app.use("/", userRouter);

app.listen(port, () => {
  console.log(
    "The server is running, " +
      " please, open your browser at http://localhost:%s",
    port 
  );
});
