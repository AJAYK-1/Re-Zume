export const typeDefinitions = `#graphql
    type Query {
        users: [User]
    }
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
    }
    type Response {
        success: Boolean!
        message: String!
        user: User
        token: String
    }
    type Mutation {
        userSignUp(name: String!, email: String!, password: String!): Response
        userSignIn(email: String!, password: String!): Response
    }
`