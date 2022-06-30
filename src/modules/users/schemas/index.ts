import { gql } from 'apollo-server';

export default gql `
    type User {
        id: ID!
        firstName: String
        secondName: String
        password: String
        email: String!
    }

    type JWT {
        jwt: String!
    }

    type Query {
        jwt( email: String!, password: String! ): JWT
        user( id: ID!): User
        users: [User]
    }
`