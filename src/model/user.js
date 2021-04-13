const mongoose = require('mongoose');
const { composeWithMongoose } = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    profileImg: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
  UserSchema: mongoose.model("users", User),
  UserTc: composeWithMongoose(mongoose.model("users", User))
};