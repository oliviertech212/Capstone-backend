import Article from "../db_models/Article_model";
import cloudinary from "../helper/cloudinary";
// import dotenv from "dotenv";
// dotenv.config();
// import cloudinary from "cloudinary";
// const { API_KEY, API_SECRET, NAME } = process.env;

// cloudinary.config({
//   cloud_name: NAME,
//   api_key: API_KEY,
//   api_secret: API_SECRET,
// });

class Articlecontroller {
  static async create(req, res) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);
      //   const article = await Article.create(req.body);

      const article = new Article({
        image: result.secure_url,
        content: req.body.content,
        title: req.body.title,
      });
      await article.save();
      res.status(201).json({ article });
      console.log("article now is created");
    } catch {
      //   res.status(400).json({ error: error.message });
      console.log("can not create article");
    }
  }

  static async getAll(req, res) {
    try {
      const article = await Article.find();
      res.status(201).json({ article });
    } catch {
      res.status(400).json({ error: error.message });
      console.log("can not create article");
    }
  }

  static async getOne(req, res) {
    try {
      const id = req.params.id;
      const article = await Article.findById(id);
      res.status(201).json({ article });
    } catch {
      res.status(400).json({ error: error.message });
      console.log("can not create article");
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Article.findByIdAndUpdate(id, updatedData, options);

      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;

      const result = await Article.deleteOne({ id });

      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default Articlecontroller;
