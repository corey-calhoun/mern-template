const express = require('express');
const cors = require('cors');
const app = express();
const {graphqlHTTP} = require('express-graphql'); // uses destructuring to get the graphqlHTTP function
const {dbSetup} = require('./config/dbConnection') // uses destructuring to get the dbSetup function

dbSetup(v => console.log(v));

// GraphQL schema
const schema = {};

// initialize the app
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
}));    

// start the server on specified port
app.listen(4000, () => {
    console.log('Running a GraphQL API server at localhost:4000/graphql');
});
