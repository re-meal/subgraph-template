"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const typeDefs = (0, graphql_tag_1.gql)((0, fs_1.readFileSync)(path_1.default.resolve(__dirname, "./article.gql"), { encoding: "utf-8" }));
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map