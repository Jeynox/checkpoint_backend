import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { dataSources } from './config';
import { buildSchema } from 'type-graphql';
import  ContryResolver  from './resolvers/ContryResolver';
import { seedDatabase } from './seed/seed';

const start = async () => {
    await dataSources.initialize();
    await seedDatabase();

    const schema = await buildSchema({
        resolvers: [ContryResolver]
    });

    const server = new ApolloServer({
        schema
    });

    const { url } = await startStandaloneServer(server, {
        listen: {port: 4000}
    });

    console.log(`🚀 Server listening at: ${url}`);
    console.log("test hot reload");
}

start();