const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use("/api", require("./students"));
app.get("/", (req, res) => res.send("ok"));
app.all("*", (req, res) =>res.send("not found"));

app.listen(port, () => { console.log(`http://localhost:${port}`); });
