require('dotenv').config() // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { ApolloServer, gql } = require('apollo-server-express');
// const User = require('./models/user');
const schema = require('./graphql/schema');

// Connect to MongoDB
const db = mongoose.connect(process.env.MONGODB_URI);

// Initialize Express
const app = express();

// middleware
app.use(cors());
app.use(morgan('dev'));

// GraphQL schema 'Query'
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// GraphQL resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello world!'
    }
};

// Create async function to initialize Apollo server with GraphQL schema and resolvers, attach to Express and DB connection
const init = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });
    await db;
    app.listen({ port: process.env.PORT || 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`);
    });
}



