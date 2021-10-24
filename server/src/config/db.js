// Create mongoose instance that will be used to connect to MongoDB
require('dotenv').config();
const mongoose = require('mongoose');

module.exports = {
    // Connect to the database
    connect: (DB_URL) => {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(DB_URL);
    },
    // Disconnect from the database
    disconnect: () => {
        mongoose.disconnect();
    },
    // Get the database connection
    getConnection: () => {
        return mongoose.connection;
    }
};
