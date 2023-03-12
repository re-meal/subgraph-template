import { gql } from "graphql-tag";
import { readFileSync } from "fs";
import path from "path";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.gql"), { encoding: "utf-8" })
);

export default typeDefs;
