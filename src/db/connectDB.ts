import mongoose from 'mongoose'
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/')
    .then((c) => console.log('database connected'))
    .catch((e) => console.log(e))
}
