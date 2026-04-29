const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", async (req, res) => {
  const target = req.query.url;

  if (!target) {
    return res.send("Usage: ?url=https://example.com");
  }

  try {
    const response = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const body = await response.text();

    res.send(body);

  } catch (err) {
    res.send("Error: " + err.toString());
  }
});

app.listen(3000, () => {
  console.log("Server running");
});
