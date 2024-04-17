const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(201).json({ msg: "Product" });
});

app.listen(8002, () => {
  console.log("Product is listening on part 8002");
});
