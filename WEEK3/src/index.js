const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

const data = {
  likes: [
    { id: "a039", thing: "cheese", likes: 3 },
    { id: "ab20", thing: "eggs", likes: 1 },
    { id: "aa26", thing: "milk", likes: 2 },
  ],
};

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/api/likes", (request, response) => {
  response.json(data.likes);
});

app.get("/api/likes/:id", (request, response) => {
  const id = request.params.id;
  let found = false;

  data.likes.map((like) => {
    if (like.id === id) {
      like.likes += 1;
      response.json(like);
      return;
    }
  });
  if (!found) {
    response.send("Not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
