const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { getAllAuthors, getAuthorById, createAuthor , updateAuthor, deleteAuthor} = require('./controllers/authorControllers')



const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  return response.send("<h1>Ciao!</h1>");
});

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAuthorById)
app.post('/authors', createAuthor)
app.get('/authors/:id', updateAuthor)
app.delete('/authors/:id', deleteAuthor)


async function start() {
  try {
    // ---------- 1st connect with db -----------------
    await mongoose.connect(
      "mongodb+srv://lauraquinteroa:PWa2WEXBqPqUD7bw@cluster0.nmxlgk4.mongodb.net/PT0425"
    );
    // ---------- 2nd I access to server -----------------
    app.listen(port, () => console.log("Server in por 3000!"));
  } catch (err) {
    console.error(err);
  }
}

start();
