import { createSchema, createYoga } from "graphql-yoga";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        meals: String
      }
    `,
    resolvers: {
      Query: {
        meals: () => "Hello from Yoga in a Bun app! Meals microservice.",
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
