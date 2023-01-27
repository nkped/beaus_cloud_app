import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants_r.js"
import blogposts from "./api/blogposts_r.js"


const app = express()

app.use(cors())
app.use(express.json())

//res route er temp..
app.use("/api/v1/restaurants", restaurants)
app.use("/api/v1/blogposts", blogposts)
//If req to not found route:
app.use("*", (req, res) => res.status(404).json({error: "not found"}))


//app is "main server code" to be importet to doc that connects to DB, from where from you actually NODE RUN your server with
export default app
