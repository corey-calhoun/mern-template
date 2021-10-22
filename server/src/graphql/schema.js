/* 
Here we define our graphql root schemas, Query and Mutation. 
 These are like the api routes that resolves to DB queries and other server related tasks.
*/

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

const Schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});
