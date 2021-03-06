const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
type Query {
    info: String!
}`;

const resolvers = {
      Query: {
            info: () => `This is the API of the hackernews clone`,
      },
};

const server = new GraphQLServer({
      typeDefs,
      resolvers,
});

server.start(() => console.log(`Server is running on 4000`));
