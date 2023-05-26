// CRUD FUNCTIONS

const mongoose = require("mongoose");
const { authorSchema } = require("./schemas");
const authorModel = mongoose.model("authors", authorSchema);

// GET ALL
async function getAllAuthors(req, res) {
  const allAuthors = await authorModel.find();
  return res.status(200).json(allAuthors);

}


// GET ONE
async function getAuthorById(req,res) {
  const id = req.params.id;
  try {
    const author = await authorModel.findById(id);
    return res.status(200).json(author);

  } 
  catch (error) {
    return res.status(500).json({error:'error!!', ...err})
  }
}

// POST
async function createAuthor (req,res){
  const obj = req.body;
  console.log(obj);
  const newAuthor = authorModel(obj);
  const dbResponse = await newAuthor.save();
  return res.status(201).json(dbResponse);
}

// PUT
async function updateAuthor(req,res){
  const id = req.params.id;
  const obj = req.body;
  try {
    const editAuthor = await authorModel.findByIdAndUpdate(id, obj);
    return res.status(200).json(editAuthor);
  }
  catch(error) {
    return res.status(500).json({error:'error!!', ...err})
  }
}

// DELETE
async function deleteAuthor(req, res){
  const id = req.params.id;
  try {
    await authorModel.findByIdAndDelete(id);
    return res.status(200).json({});
  } catch (error){
    return res.status(500).json({error:'error!!', ...err})
  }
}

module.exports = { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor};