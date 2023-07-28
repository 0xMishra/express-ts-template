import express from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import { config } from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'

config()

const app = express()
app.use(morgan('dev'))
app.use(helmet())

app.use(
  cors({
    credentials: true,
  }),
)

app.use(compression())
app.use(cookieParser())
app.use(express.json())

export default app
