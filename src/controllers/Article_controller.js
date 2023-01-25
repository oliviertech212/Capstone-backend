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
      res.status(201).json({ article: article });
      console.log("article now is created");
    } catch (error) {
      res.status(400).json({ status: "error", message: error.message });
      console.log("can not create article");
    }
  }

  static async getAll(req, res) {
    try {
      const article = await Article.find();
      res.status(201).json({ article });
    } catch (error) {
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
      const findblog = await Article.findOne({ id });
      console.log(findblog);
      await cloudinary.uploader.destroy(findblog.image);
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);
      // const updatedData = req.body;
      const options = { new: true };
      const updateblog = await Article.findByIdAndUpdate(
        id,
        {
          $set: {
            image: result.secure_url,
            content: req.body.content,
            title: req.body.title,
          },
        },
        options
      );

      // res.send(result);
      // await result.save();
      res.status(200).json({ status: "success", data: updateblog });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }

    // try {
    //   //Upload image to Cloudinary
    //   const result = await cloudinary.uploader.upload(req.file.path);

    //   //Find the article by its id
    //   const id = req.params.id;
    //   const article = await Article.findById(id);

    //   //Update the article with the new data
    //   article.image = result.secure_url;
    //   article.content = req.body.content;
    //   article.title = req.body.title;

    //   //Save the updated article to the database
    //   await article.save();

    //   res.json({ status: "success", data: article });
    // } catch (error) {
    //   res.status(400).json({ message: error.message });
    // }
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
