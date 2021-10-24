// These are the mutations(resolvers) for the Users. (Create, Update, Delete)
const User = require('../../models/user');

// Imports
module.exports = {
    // Create a new user 
    createUser: async function({userInput}) {
        const user = new User({
            email: userInput.email,
            name: userInput.name,
            password: userInput.password,
            image: userInput.image,
            createdAt: new Date().toISOString()
        });

        // Save the user to the database
        const createdUser = await user.save();
        return {...createdUser._doc, _id: createdUser._id.toString()};
    },
    // Update a user

    // Delete a user


    // Export the mutations


}






