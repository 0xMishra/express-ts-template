import app from './app'
import { connectDB } from './db/connectDB'

const server = app.listen(process.env.PORT || 8080, () => {
  const { port } = server.address() as any
  console.log(`server running on port: ${port}`)
})

connectDB()
