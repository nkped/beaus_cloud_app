import express from "express"

const router = express.Router()

//route rewritten to  shorter syntax
router.get("/", (req, res) => res.send("hello world from blogposts"))

export default router