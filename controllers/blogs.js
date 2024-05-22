const blogSchema = require("../models/Blogs")
const blogValidation = require("../validation/Blogs")  



const createBlog = async (req,res)=>{
    // verify that data passes through
    // validation

    let {error,value } = blogValidation.validate(req.body);
    if (error){
        return res.status(400).json({message : error.details[0].message})
    }
    try{
        let newBlog = await blogSchema.create(req.body)
        res.status(201).json(newBlog)

    }catch(e){
        console.log(e)
        res.status(500).json({message:"error while creating Blog"})
    }
    
}


const getAllBlogs = async (req,res)=>{
    try{
        let blogs = await blogSchema.find()
        res.status(200).json(blogs);
    }catch(e){
        res.status(500).json({message:"error retrieving blogs"})
    }

}


const getBlogById = async (req,res)=>{
    let blogId = req.params.id
    
    try  {
        let blog = await blogSchema.findById(blogId)
        res.json(blog)
    }catch(e){
        return res.status(400).json({message:"No blog with id "+blogId})
    }

}

const updateBlogById = async (req,res)=>{
    // verification de l'existence de l'element 
    const blogId = req.params.id;

    // validate data
    let {error,value } = blogValidation.validate(req.body);
    if (error){
        return res.status(400).json({message : error.details[0].message})
    }
    // find and update
    try  {
        console.log(value);
        const blog = await  blogSchema.findByIdAndUpdate(blogId,value,{new:true})
        res.json(blog)
    }catch(e){
        return res.status(404).json({message: "Blog not found wrong id"});
    }
}

const deleteBlogById = async (req,res)=>{
    let blogId = req.params.id;
    try{
        let blog = await blogSchema.findByIdAndDelete(blogId)
        res.json({message:"deleted element with id " + blogId})
    }catch(e){
        res.status(404).json({message:"no  blog with id "+blogId})
    }

}



module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    deleteBlogById,
    updateBlogById
}