export const typeDefinitions = `#graphql
    type Query {
        users: [User]
        user(id:ID!): User
    }
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
    type Mutation {
        createUser(name: String!, email: String!): User
    }
`