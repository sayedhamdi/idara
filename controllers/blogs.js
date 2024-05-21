let blogs = [
    {
      id: 1,
      title: "How to createt web server",
      createdAt: "20-05-2024",
      author: "Ahmed moshen",
      image : "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
      content:"you should look at the documentation"
    },
    {
      id: 2,
      title: "How to createt react app",
      createdAt: "20-05-2024",
      author: "Ahmed moshen",
      image : "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png",
      content:"you should look at the documentation"
    },
  ];
  



const createBlog = (req,res)=>{
    // verify that data passes through
    // validation
    for (const key of Object.keys(req.body)){
        if(req.body[key] ==""){
            return res.status(400).json({message:"verify blog content one or more elements are empty"})
        }
    }
    let date =  Date.now()
    let newBlog = {id:blogs.length +1 , ...req.body,createdAt:date}
    blogs.push(newBlog);
    res.status(201).json(newBlog)
}


const getAllBlogs = (req,res)=>{
  res.status(200).json(blogs);
}


const getBlogById = (req,res)=>{
    let blogId = req.params.id

    let blog = blogs.find((b=>b.id == blogId))
    if(!blog){
        return res.status(400).json({message:"No blog with id "+blogId})
    }
    res.status(200).json(blog);
}

const updateBlogById = (req,res)=>{
    // verification de l'existence de l'element 
    const blogId = req.params.id;

    const blogIndex = blogs.findIndex(b =>b.id ==blogId);
    if (!blogIndex){
        return res.status(404).json({message: "Blog not found wrong id"});
    }

    // verification mtaa el body 
    for (const key of Object.keys(req.body)){
        if(req.body[key] ==""){
            return res.status(400).json({message:"verify blog content one or more elements are empty"})
        }
    }


    // update  
    blogs[blogIndex] = {id: blogs[blogIndex].id,...req.body}

    res.json(blogs[blogIndex]);

    

    // verification des champs
    
}

const deleteBlogById = (req,res)=>{
    let blogId = req.params.id;
    let blogIndex = blogs.findIndex(b=>b.id==blogId);
    if(!blogIndex){
        return res.status(404).json({message:"Blog not found !"})
    }
    let blogtoDelete = blogs[blogIndex]


    blogs.splice(blogIndex,1);

    res.json(blogtoDelete)

}



module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    deleteBlogById,
    updateBlogById
}