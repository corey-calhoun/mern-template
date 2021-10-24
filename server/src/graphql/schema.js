/* 
Here we define our graphql root schemas, Query and Mutation. 
 These are like the api routes that resolves to DB queries and other server related tasks.
*/
const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { UsersQuery } = require('./query/UsersQuery');
const { CreateUserMutation, UpdateUserMutation, DeleteUserMutation } = require('./mutation/UsersMutation');

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        users: UsersQuery
    })
});


const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createUser: CreateUserMutation,
        updateUser: UpdateUserMutation,
        deleteUser: DeleteUserMutation
    })
});

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});


module.exports = schema;