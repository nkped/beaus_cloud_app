import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"


const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/v1/restaurants", restaurants)
//If req to not found route:
app.use("*", (req, res) => res.status(404).json({error: "not found"}))


//app is "main server code" to be importet to doc that connects to DB, from where from you actually NODE RUN your server with
export default app
