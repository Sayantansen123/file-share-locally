import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";


const storage = multer.diskStorage({
   destination: "./uploads/",
   filename: (req,file,cb) =>{
    const uniquename = uuidv4() + path.extname(file.originalname);
    cb(null,uniquename)
   }
})

const upload = multer({storage});

export default upload