import { gql } from "graphql-tag";
import { readFileSync } from "fs";
const typeDefs = gql(readFileSync("./article.gql", { encoding: "utf-8" }));
export default typeDefs;
