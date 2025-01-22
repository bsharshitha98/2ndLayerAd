const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  express.static(path.join(__dirname, "public"), {
    setHeaders: (res, path) => {
      res.setHeader("Referrer-Policy", "strict-origin");
    },
  })
);

app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "strict-origin");
  console.log("hello");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
