import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl586i9oc4vh001ue52tldp9u/master',
    cache: new InMemoryCache()
})