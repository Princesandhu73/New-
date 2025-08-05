const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.post("/upload", (req, res) => {
  const filename = `stream_${Date.now()}.webm`;
  const filePath = path.join(__dirname, "uploads", filename);

  const fileStream = fs.createWriteStream(filePath);
  req.pipe(fileStream);

  req.on("end", () => {
    res.send("OK");
    console.log(`Saved: ${filename}`);
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
