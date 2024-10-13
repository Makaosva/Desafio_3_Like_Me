const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const path = require("path");

app.listen(3000, console.log("¡Servidor encendido 3000!"));

const { getPosts, agregarPost } = require("./consulta");

const index = path.join(__dirname, "../frontend/index.html");

app.get("/", (req, res) => {
  res.sendFile(index);
});

app.get("/posts", async (req, res) => {
  try {
    const result = await getPosts();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    const likes = 0;
    const result = await agregarPost(titulo, img, descripcion, likes);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

