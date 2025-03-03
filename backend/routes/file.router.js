import express from "express";
import {
  downloadController,
  uploadController,
} from "../controller/file.controller.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/upload",upload.single("file"), uploadController);
router.get("/download/:id", downloadController);
router.get("/", async (req, res) => {
  res.send("hello");
});

export default router;
