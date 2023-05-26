const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  { name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  birth: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
  
}
);

const postSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true 
    },
    title: {
      type: String,
      required: true
    },
    cover: {
      type: String,
      required: true
    },
    readTime: {
      value: {
        type: Number,
        required: true
      },
      unit:{
        type: Number,
        required: true
      }
    },
    author: {
      name: {
        type: String,
        required: true
      },
      avatar: {
        type: String,
        required: true
      },
      required: true
    },
    content: {
      type: String,
      required: true
    }


  }
)



// all controllers instead of authors we put post


module.exports = {authorSchema};