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
  const like = data.likes.find((like) => like.id === id);

  if (like) {
    response.json(like);
  } else {
    response.status(404).send("Not found");
  }
});

app.post("/api/likes", (request, response) => {
  const newLike = request.body;
  newLike.id = Date.now().toString();
  newLike.likes = 0;

  data.likes.push(newLike);
  response.json(newLike);
});

app.post("/api/likes/:id", (request, response) => {
  const id = request.params.id;
  let found = false;

  data.likes.forEach((like) => {
    if (like.id === id) {
      like.likes += 1;
      found = true;
      response.json(like);
      return;
    }
  });
  if (!found) {
    response.status(404).send("Not found");
  }
});

app.delete("/api/likes/:id", (request, response) => {
  const id = request.params.id;
  newLikes = [];

  result = { status: "not found" };
  data.likes.map((like) => {
    if (like.id === id) {
      result = { status: "success" };
    } else {
      newLikes.push(like);
    }
  });
  data.likes = newLikes;
  response.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
