const { ApolloServer, gql } = require('apollo-server');

const mangaSeries = [
    { title: 'One Piece', currentAvailable: '87', currentRead: '84', completedByAuthor: false },
    { title: 'Deathnote', currentAvailable: '13', currentRead: '13', completedByAuthor: true }
];

const typeDefs = gql `
    type Query {
        dummy: String
        getMangaSeries: [MangaSeries]
    }

    type Mutation {
        addManga(title: String, currentAvailable: String, currentRead: String, completedByAuthor: Boolean): MangaSeries
    }

    type MangaSeries {
        title: String
        currentAvailable: String
        currentRead: String
        completedByAuthor: Boolean
    }
`;

const resolvers = {
    Query: {
        getMangaSeries: () => mangaSeries
    },

    Mutation: {
        addManga: (_, { title, currentAvailable, currentRead, completedByAuthor }) => {
            const manga = { title: title, currentAvailable: currentAvailable, currentRead: currentRead, completedByAuthor: completedByAuthor };
            mangaSeries.push(manga);
            return manga;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server listening on ${url}`);
});