import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database Connected Sucessfully'))

    await mongoose.connect(`${process.env.MONGODB_URI}/prescription`)
}

export default connectDB