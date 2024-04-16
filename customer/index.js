const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(201).json({ msg: "customer" });
});

app.listen(8001, () => {
  console.log("customer is listening on part 8001");
});
