

import Article from "../db_models/Article_model";

class Articlecontroller{
    static  async create(req,res){
        try{
            const article=await
            Article.create(req.body);
            
            res.status(201).json({article});
            console.log("article now is created");
        }catch{
            // res.status(400).json({ error: error.message });
            console.log("can not create article"); 
        }
    }


    static  async getAll(req,res){
        try{
            const article=await
            Article.find();
            res.status(201).json({article});
            
        }catch{
            res.status(400).json({ error: error.message });
            console.log("can not create article"); 
        }
    }

    static  async getOne(req,res){
        try{

             const id=req.params.id;
            const article=await
            Article.findById(id);
            res.status(201).json({article});
        }catch{
            res.status(400).json({ error: error.message });
            console.log("can not create article"); 
        }
    }

    static async update (req, res){
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };
    
            const result = await Article.findByIdAndUpdate(
                id, updatedData, options
            )
    
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }


    static async delete (req, res){
        try {
            const id = req.params.id;

            const result = await Article.deleteOne({id})
    
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default Articlecontroller;