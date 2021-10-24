const { GraphQLObjectType, GraphQLID, GraphQLString, } = require('graphql');

//create our own graphql object data type that has its own _id and content field
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: { type: GraphQLID },
        content: { type: GraphQLString },
    }
});

module.exports = {userType};