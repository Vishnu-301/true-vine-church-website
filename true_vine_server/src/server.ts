import epress from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
// import { PrismaClient } from "@prisma/client"
dotenv.config()

const app = epress()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

// const prisma = new PrismaClient()

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the True Vine API!" })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})