import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { SetContextLink } from "@apollo/client/link/context";

const link = new HttpLink({ uri: import.meta.env.VITE_HOST_URL })

const authorizationLink = new SetContextLink(async (request, { headers }) => {
    const token = localStorage.getItem('token')
    return {
        headers: {
            ...headers, authorization: token ? `Bearer ${token}` : '',
        }
    }
})

const client = new ApolloClient({
    link: authorizationLink.concat(link),
    cache: new InMemoryCache(),
})

export default client