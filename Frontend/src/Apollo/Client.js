import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
    link: new HttpLink({ uri: import.meta.env.VITE_HOST_URL }),
    cache: new InMemoryCache(),
})

export default client