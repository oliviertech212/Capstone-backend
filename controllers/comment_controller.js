



import Comment from "../db_models/comment_model";
// import { Model } from "mongoose";

class CommentController{
    // static  async create(req,res){
    //     try{
    //         const cmt=await Comment.create(req.body);
            
    //         res.status(201).json({cmt});
    //         console.log("comment sent");
    //     }catch{
    //         // res.status(400).json({ error: error.message });
    //         console.log("coment not sent"); 
    //     }
    // }


    static async create(req,res){
        try{
            const data = new Comment({
                username: req.body.username,
                comment: req.body.comment,
            });
            await data.save();
            res.status(201).json(data);
            console.log("comment sent sussfuly");
    
        }catch(error){
            res.status(401).json(error.message);
            console.log("coment not sent"); 
        }
    } 


    static  async getAll(req,res){
        try{
            const cmt=await
            Comment.find();
            res.status(201).json({cmt});
            
        }catch{
            res.status(400).json({ error: error.message });
            console.log("can not create article"); 
        }
    }

    static  async getOne(req,res){
        try{

             const id=req.params.id;
            const cmt=await
            Comment.findById(id);
            res.status(201).json({cmt});
        }catch{
            res.status(400).json({ error: error.message });
            console.log("can not create article"); 
        }
    }

   


    static async delete (req, res){
        try {
            const id = req.params.id;

            const result = await Comment.deleteOne({id})
    
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default CommentController;