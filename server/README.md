# MongoDB and Server build

## Tech Stack:


### Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.


### Nodemon 

Nodemon is a tool that watches for changes in your source files and restarts your Node.js server automatically.


### Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.


### MongoDB

MongoDB is a document-oriented database. It's an open-source, cross-platform, high-performance, schema-free database. 


### Mongoose

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. It provides a mechanism for modeling your application data and generating the appropriate MongoDB queries to manipulate that data. It is used to establish a connection with the MongoDB database.


### Apollo Server

Apollo Server is a flexible, community driven, production-ready HTTP GraphQL middleware for Express, Hapi, Koa, and more. This library that helps you connect a GraphQL schema to an HTTP server in Node.


### React.js

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching data while the page is loading, or as a base for building a library of reusable components.


### Styled-Components

Styled-Components is a library that allows you to write CSS-in-JS components. It is a modular system that lets you compose complex CSS from simple primitives.


### TailwindCSS

TailwindCSS is a utility-first CSS framework. It is designed for use with any front-end framework. It is a highly customizable, low-level CSS library. It is built with modularity and performance in mind using the mobile-first responsive design system.


### GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It is written in JSON, and allows clients and servers to communicate using a common subset of JSON.


## Steps:

#### Step 1: Install dependencies (express apollo-server-express cors graphql mongodb)

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