import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
import { connectToDB } from "./connection";
import routes from "./routes/index";
import path from "path";

dotenv.config()
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'path/to/your/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

const port = process.env.PORT
app.listen(port, () => console.log("Listening on port"));

connectToDB()