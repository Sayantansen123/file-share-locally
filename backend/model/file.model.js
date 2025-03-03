import mongoose from "mongoose";

const fileSchema =new mongoose.Schema({
  fileName : String,
  originalname: String,
  path:String,
  size: Number,
},{timestamps:true})

const File = mongoose.model("File",fileSchema)

export default File