const express = require("express");
const app = express();

const PORT = 3001;
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
