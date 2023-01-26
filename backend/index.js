import app from "./server.js"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()


const port = process.env.PORT || 8000

mongoose.connect(process.env.RESTREVIEWS_DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));


app.listen(port, () => {
      console.log(`listening on port ${port}`)})
