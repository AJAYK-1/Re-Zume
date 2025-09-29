import mongoose from 'mongoose'

const DataBaseConnection = () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_URI)
        if (connect) console.log('Database connection successful...');
    } catch (err) {
        console.log(err);
    }
}

export default DataBaseConnection