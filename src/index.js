import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import MyPrismaClient from "./prisma/client";
let prisma;
async function startApolloServer() {
    const server = new ApolloServer({
        schema: buildSubgraphSchema({
            typeDefs,
            resolvers,
        }),
    });
    try {
        prisma = new MyPrismaClient();
        const { url } = await startStandaloneServer(server, {
            context: async ({ req }) => {
                const token = req.headers.authroization || "";
                if (token) {
                }
                return {
                    prisma,
                };
            },
            listen: {
                port: +process.env.PORT || 4000,
            },
        });
        console.log(`🚀 Subgraph fix-request ready at ${url}`);
    }
    catch (err) {
        console.log(err);
    }
}
startApolloServer().then(() => {
    prisma.disconnect();
});
