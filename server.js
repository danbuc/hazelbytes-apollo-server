const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose')

require('dotenv').config({ path: 'variables.env' })

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err));

const typeDefs = gql `
    type Query {
        getMangaSeries: [MangaSeries]
    }

    type MangaSeries {
        title: String
        currentAvailable: String
        currentRead: String
        completedByAuthor: Boolean
    }
`;

const server = new ApolloServer({
    typeDefs
});

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});