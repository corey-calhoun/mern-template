//create our own graphql object data type that has its own _id and content field
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: { type: GraphQLID },
        content: { type: GraphQLString },
    }
});
