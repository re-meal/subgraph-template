"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../prisma/client"));
const { ApolloServer } = require("@apollo/server");
const subgraph_1 = require("@apollo/subgraph");
const standalone_1 = require("@apollo/server/standalone");
const resolvers_1 = __importDefault(require("./resolvers"));
const typeDefs_1 = __importDefault(require("./typeDefs"));
async function startApolloServer() {
    const server = new ApolloServer({
        schema: (0, subgraph_1.buildSubgraphSchema)({
            typeDefs: typeDefs_1.default,
            resolvers: resolvers_1.default,
        }),
    });
    try {
        await client_1.default.$connect();
        const { url } = await (0, standalone_1.startStandaloneServer)(server, {
            context: async ({ req }) => {
                const token = req.headers.authroization || "";
                if (token) {
                    //TODO auth logic here
                }
                return {};
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
startApolloServer().then();
//# sourceMappingURL=index.js.map