const express = require("express");
const cors = require("cors");
const app = express();
const proxy = require("express-http-proxy");

app.use(cors());
app.use(express.json());
app.use("/customer", proxy("http://localhost:8001"));
app.use("/shopping", proxy("http://localhost:8002"));
app.use("/products", proxy("http://localhost:8003"));

app.use("/", (req, res, next) => {
  return res.status(201).json({ msg: "Product" });
});

app.listen(8000, () => {
  console.log("Gateway is listening on part 8000");
});
