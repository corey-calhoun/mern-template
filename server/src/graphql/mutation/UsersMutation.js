// This are the mutations for the Users. (Create, Update, Delete)

// Create a new user
const CreateUserMutation = {
    type: userType,
    args: {
        content: { type: GraphQLString }
    },
    resolve: async(_, { content }) => {
        const userService = new UserService();
        const newUser = await userService.createUser({content});

        return newUser;
    }
};

// Update a user
const UpdateUserMutation = {
    type: userType,
    args: {
        // id: { type: GraphQLID },
        content: { type: GraphQLString }
    },
    resolve: async(_, { content }) => {
        const userService = new UserService();
        const updatedUser = await userService.updateUser({content});

        return updatedUser;
    }
};

// Delete a user
const DeleteUserMutation = {
    type: userType,
    args: {
        content: { type: GraphQLString }
    },
    resolve: async(_, { content }) => {
        const userService = new UserService();
        const deletedUser = await userService.deleteUser({content});

        return deletedUser;
    }
};