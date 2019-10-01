"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_import_1 = require("graphql-import");
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = __importDefault(require("./resolvers"));
const typeDefs = graphql_import_1.importSchema('schema/typeDefs.graphql');
exports.default = graphql_tools_1.makeExecutableSchema({ resolvers: resolvers_1.default, typeDefs });
