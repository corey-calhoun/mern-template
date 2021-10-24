// Express server for the application
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Query {
        name: String,
        email: String,
        description: String,
    }
`);

// The root value is used to say what will be returned for each schema element
const root = {
    name: () => {
        return 'Corey';
    },
    email: () => {
        return 'test@email.com';
    },
    description: () => {
        return 'This is a test description';
    }
};

// Set app to express server and port
const app = express();
const PORT = process.env.PORT || 4000;

// Routes for the application
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API endpoint
app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})