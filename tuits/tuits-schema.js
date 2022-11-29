import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  image: String,
  dislikes: Number,
  disliked: Boolean,
  likes: Number,
  liked: Boolean,
  retuits: Number,
  replies: Number
}, {collection: 'tuits'});
export default schema;
