import express from "express"
import Blogpost from "../models/blogpost_m.js";

const router = express.Router()

//route rewritten to  shorter syntax
router.get("/", async (req, res) => {    
    try {
        const allBlogposts = await Blogpost.find();
        res.json(allBlogposts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
)


//Create db-instanse
router.post("/", async (req, res) => {
    try { 
    const article = await Blogpost.create({
        title: 'Neext Post!',
        published: true,
        author: 'nkp',
        tags: ['express', 'node'],
        content: 'This is the best post ever',
    }); res.send(article)
} catch (error) {
    res.status(500).json({message: error.message});
}
})


export default router

/*
Projecting query properties (second param -> project fields)

const myArticle = await Blog.findById('63caf74c23861966c8dfab57', 'title author content tags createdAt').exec();

More Projecting..
const allBlogposts = await Blogpost.find()
.select("-__v")
.sort("name");
res.send(allBlogposts);

Query methods
const firstArticle = await Blog.finedOne({});
const blog = await Blog.deleteOne({ author: "Jesse Hall" })
const blog = await Blog.deleteMany({ author: "Jesse Hall" })



*/




