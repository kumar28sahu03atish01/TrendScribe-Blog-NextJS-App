// src/models/index.js
import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
    blogid: {type: String, required: true},
    blogname: {type: String, required: true},
    blogdescription: {type: String, required: true},
    blogauthorname: {type: String, required: true},
    blogcategory: {type: String, required: true},
    blogauthorimage: {type: String, required: true},
    blogimage: {type: String, require: true},
    blogdate: {type: Date, required: true},
    bloghashtag: {type: String, required: true},
});
const BlogPosts = mongoose.models.BlogPosts || mongoose.model('BlogPosts', BlogSchema);
export {BlogPosts};