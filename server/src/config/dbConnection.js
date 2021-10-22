const MongoClient = require('mongodb').MongoClient;

let MongoDB;

// Connect to the database before starting the application server.
// credentials should be stored in a .env file
const dbSetup = callback => {
    const uri = 'mongodb+srv://corey_calhoun:DeaconZane0907@cluster0.yeq9y.mongodb.net/reactjs-dotnetcore?retryWrites=true&w=majority';

    MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.log(err);
            return;
        }

        MongoDB = client.db('reactjs-dotnetcore');
        callback('Connected to MongoDB database');
    });
};

const getDB = () => {
    return MongoDB;
};

module.exports = {dbSetup, getDB};