// This will hold the database connection information
import mongoose from 'mongoose';

const db = process.env.MONGODB_URI;

const connection = mongoose.createConnection(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const schema = new mongoose.Schema({
    name: 'String',
    email: 'String',
    description: 'String'
});

const User = connection.model('User', schema);

export { User };