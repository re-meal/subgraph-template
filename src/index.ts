import client from "../prisma/client";

const { ApolloServer } = require("@apollo/server");
import { buildSubgraphSchema } from "@apollo/subgraph";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import MyPrismaClient from "../prisma/client";

async function startApolloServer() {
  const server = new ApolloServer({
    schema: buildSubgraphSchema({
      typeDefs,
      resolvers,
    }),
  });

  try {
    await client.$connect();
    const { url } = await startStandaloneServer(server, {
      context: async ({ req }) => {
        const token = req.headers.authroization || "";
        if (token) {
          //TODO auth logic here
        }
        return {};
      },
      listen: {
        port: +process.env.PORT! || 4000,
      },
    });

    console.log(`🚀 Subgraph fix-request ready at ${url}`);
  } catch (err) {
    console.log(err);
  }
}

startApolloServer().then();
