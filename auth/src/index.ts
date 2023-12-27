import { createSchema, createYoga } from "graphql-yoga";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        greetings: String
      }
    `,
    resolvers: {
      Query: {
        greetings: () => "Hello from Yoga in a Bun app!",
      },
    },
  }),
});
const server = Bun.serve({ fetch: yoga });
console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
);
