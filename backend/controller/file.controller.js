import File from "../model/file.model.js";

export const uploadController = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "file not found" });

  const newFile = new File({
    fileName: req.file.filename,
    originalname: req.file.originalname,
    path: req.file.path,
    size: req.file.size,
  });

  await newFile.save();
  res.status(200).json({message:"file uploaded" , id:newFile._id});
};

export const downloadController = async (req,res) =>{
 try {
   const imageId = req.params.id;
   if(!imageId) return res.status(400).json({message: "please give the image id"}) 
   const file = await File.findById(imageId)
   if(!file) return res.status(404).json({ message: "File not found" });
   res.download(file.path, file.originalname);

 } catch (error) {
    console.log(error)
 }
}


