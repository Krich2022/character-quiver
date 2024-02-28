import { ApolloClient, InMemoryCache } from "@apollo/client";

const dnd5eClient = new ApolloClient({
  uri: "https://www.dnd5eapi.co/graphql",
  cache: new InMemoryCache(),
});

export default dnd5eClient;
