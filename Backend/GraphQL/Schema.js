export const typeDefinitions = `#graphql
    type Query {
        users: [User]
        userSignIn(email: String!, password: String!): User
    }
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): User
    }
`