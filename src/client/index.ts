import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject> | null = null;

export const getInstance = (): ApolloClient<NormalizedCacheObject> => {
  if (client) return client;

  client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL || "http://localhost:4000",
    cache: new InMemoryCache({}),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "cache-first",
        errorPolicy: "all",
      },
    },
  });

  return client;
};

const apollo = {
  getInstance,
};

export default apollo;
