import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

export const prismicClient = new ApolloClient({
  link: PrismicLink({
    uri: process.env.PRISMIC_GRAPHQL_URL,
    accessToken: process.env.PRISMIC_SECRET_TOKEN,
  }),
  cache: new InMemoryCache(),
});
