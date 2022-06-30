import { gql } from 'apollo-server';

export default gql `
    type Album {
    id: ID!
    name: String
    released: Int
    # artists: [Artist]
    # bands: [Band]
    # tracks: [Track]
    # genres: [Genre]
    image: String
}
    extend type Query {
        album(id: ID!): Album
        albums: [Album]
    }
`