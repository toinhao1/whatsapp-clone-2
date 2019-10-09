"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_testing_1 = require("apollo-server-testing");
const apollo_server_express_1 = require("apollo-server-express");
const index_1 = __importDefault(require("../../src/schema/index"));
describe('Query.chats', () => {
    it('should fetch all chats', async () => {
        const testServer = new apollo_server_express_1.ApolloServer(index_1.default);
        const { query } = apollo_server_testing_1.createTestClient(testServer);
        const res = await query({
            query: apollo_server_express_1.gql `
        query GetChats {
          chats {
            id
            name
            picture
            lastMessage {
              id
              content
              createdAt
            }
          }
        }
      `,
        });
        expect(res.data).toBeDefined();
        expect(res.errors).toBeUndefined();
        expect(res.data).toMatchSnapshot();
    });
});
