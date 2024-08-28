const { default: mongoose } = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    prirority: {
      require: [true, "Please give prirority"],
      type: String
    },
    deadline: {
      type: String,
      required: [true, "Please give a deadline"],
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo
