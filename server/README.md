# MongoDB and Server build

## Steps:

#### Step 1: Install dependencies (express express-graphql cors graphql mongodb)

#### Step 2: Create a GraphQL server (index.js)

#### Step 3: Create a MongoDB database and collection (index.js)

#### Step 4: Create a GraphQL schema and resolvers (Starting with the schema.js then nodeTypes.js then NotesQuery.js and finally NotesMutation.js.)
    
***When you run node ./src/index.js the server should be up and running.**


## File Structure:


### Config Folder (server/src/config):

This folder contains the config.js file which contains the database configuration. We will be using this file to connect to our MongoDB.

### GraphQL Folder (server/src/graphql):

This folder contains the folders for our GraphQL server queries and mutations. 

#### Mutations Folder (server/src/graphql/mutation):

This folder contains the files for our GraphQL server mutations which will be used to create, update, and delete users.

#### Query Folder (server/src/graphql/query):

This folder contains the files for our GraphQL server queries which will be used to retrieve users.

#### Repository Folder (server/src/graphql/repository):

In this MongoDbRepo class we are just connecting to our MongoDB database and we expose some APIs that lets us do CRUD operations on our database entries.