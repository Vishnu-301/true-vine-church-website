import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import dashboardRoutes from "./routes/dashboard.js"
import subscribeRoutes from "./routes/subscribe.js"
import contactRoutes from "./routes/contact.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const allowedOrigins = [
  process.env.CLIENT_URL || "https://true-vine-church-website-i8itfvv4k-ifyifeanyi301-5122s-projects.vercel.app/",
]

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}))

app.use(express.json())

app.get("/api", (_req, res) => {
  res.json({ message: "Welcome to the True Vine API!" })
})

app.use("/api", dashboardRoutes)
app.use("/api", subscribeRoutes)
app.use("/api", contactRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})