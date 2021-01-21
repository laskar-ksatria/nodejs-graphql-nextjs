import { ApolloServer } from 'apollo-server';
import mongoDBConnect from './config/mongoDBConnect';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

mongoDBConnect()
    .then(() => {
        return server.listen({port: PORT})
    })
    .then(({ url }) => {
        console.log(`Server running at ${url}`)
    })