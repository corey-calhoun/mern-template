/* 
Here we define our graphql root schemas, Query and Mutation. 
 These are like the api routes that resolves to DB queries and other server related tasks.
*/

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } = require('graphql');
const { GraphQLDateTime } = require('graphql-iso-date');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            // This is the root query, it will return all the users
            users: {
                type: new GraphQLList(require('../models/user')),
                resolve: (root, args, context) => {
                    return context.db.User.findAll();
                }
            },
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            // This is the root mutation, it will return all the users
            createUser: {
                type: require('../models/user'),
                args: {
                    name: { type: new GraphQLNonNull(GraphQLString) },
                    email: { type: new GraphQLNonNull(GraphQLString) },
                    password: { type: new GraphQLNonNull(GraphQLString) },
                    role: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLDateTime) },
                    updatedAt: { type: new GraphQLNonNull(GraphQLDateTime) }
                },
                resolve: (root, args, context) => {
                    return context.db.User.create(args);
                }
            },
            updateUser: {
                type: require('../models/user'),
                args: {
                    id: { type: new GraphQLNonNull(GraphQLInt) },
                    name: { type: new GraphQLNonNull(GraphQLString) },
                    email: { type: new GraphQLNonNull(GraphQLString) },
                    password: { type: new GraphQLNonNull(GraphQLString) },
                    role: { type: new GraphQLNonNull(GraphQLString) },
                    createdAt: { type: new GraphQLNonNull(GraphQLDateTime) },
                    updatedAt: { type: new GraphQLNonNull(GraphQLDateTime) }
                },
                resolve: (root, args, context) => {
                    return context.db.User.update(args, { where: { id: args.id } });
                }
            },
            deleteUser: {
                type: require('../models/user'),
                args: {
                    id: { type: new GraphQLNonNull(GraphQLInt) }
                },
                resolve: (root, args, context) => {
                    return context.db.User.destroy({ where: { id: args.id } });
                }
            },
        }
    })
});

