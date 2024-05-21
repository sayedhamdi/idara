const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json())

app.use(morgan("dev"))
const blogs = [
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

app.get("/", (req, res) => {
  res.json({ hello: "you are welcome" });
});
// get all blogs
app.get("/blogs", (req, res) => {
  res.status(200).json(blogs);
});
// get single blog by id
app.get("/blogs/:id", (req, res) => {
    let blogId = req.params.id

    let blog = blogs.find((b=>b.id == blogId))
    if(!blog){
        return res.status(400).json({message:"No blog with id "+blogId})
    }
    res.status(200).json(blog);
  });



app.post("/blogs",(req,res)=>{
    // traitement pour créer un blog
    console.log(req.body)
    res.json({message:"wsel el jweb"})
});

app.listen(8000, () => {
  console.log("listening on port 8000 ! ");
});
