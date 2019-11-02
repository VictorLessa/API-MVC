const express = require("express");
const route = require("./routes/index");
const cors = require('cors')
const app = express();

app.use(cors)
app.use(express.json());
app.use(route);
app.listen(3000, () => {
  console.log("Porta 3000");
});
