import mongoose from "mongoose"


const connectDb = (URL) => {
    return mongoose.connect(URL)
}

export default connectDb;