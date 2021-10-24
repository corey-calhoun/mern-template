const { GraphQLObjectType, GraphQLID, GraphQLString, } = require('graphql');

//create our own graphql object data type that has its own _id and content field
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        role: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    }
});

module.exports = {userType};