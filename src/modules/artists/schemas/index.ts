import { gql } from 'apollo-server';

export default gql `
    type Artist {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [String]
        instruments: [String] 
    }

    extend type Query {
        artist( id: ID! ): Artist
        artists: [Artist]
    }
`
//instruments rewrite
// artists(
//     pagination: PaginationInput
//     filter: FilterArtistsInput
//   ): ArtistsPagination!

// input PaginationInput {
//   offset: Int
//   limit: Int
// }

// input FilterArtistsInput {
//   firstName: String
//   secondName: String
//   middleName: String
//   birthDate: String
//   birthPlace: String
//   country: String
// }
// type ArtistsPagination {
//     offset: Int
//     limit: Int
//     total: Int
//     items: [Artist!]
//   }