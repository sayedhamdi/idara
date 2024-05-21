const express = require("express");
const morgan = require("morgan");
const blogsRouter = require("./routes/blogs")
const cors = require("cors");


const app = express();


//definition des middlewares
app.use(express.json())
app.use(morgan("dev"));
app.use(cors("*"))


//defintion des routes
app.use("/blogs",blogsRouter)




// get all blogs
/*function verifyAdmin(req,res,next){
    if (req.query.username =="admin" && req.query.password=="1234"){
        next()
    }else{
        res.status(403).json({message:"not authorised to do this operation"})
    }
}*/

/*app.get("/blogs" ,verifyAdmin,(req, res) => {
  res.status(200).json(blogs);
});*/
// get single blog by id






app.listen(8000, () => {
  console.log("listening on port 8000 ! ");
});
