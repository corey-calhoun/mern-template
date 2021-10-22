// This is our UsersQuery that will return all of the "users" in our database.
const UsersQuery= {
    type: GraphQLList(UserType),
    args: {},
    resolve: async () => {
        const userService = new UserService();
        const users = await userService.getAllUsers();

        return users;
    }
};