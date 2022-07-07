import { gql } from 'apollo-server';

export default gql `
type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
}

extend type Query {

}
`
