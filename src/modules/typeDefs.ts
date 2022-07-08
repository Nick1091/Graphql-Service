import { gql } from 'apollo-server';
import artistsTypeDefs from './artists/schemas'
import bandsTypeDefs from './bands/schemas'
import albumsTypeDefs from './album/schemas'
import genresTypeDefs from './genres/schemas'
import tracksTypeDefs from './tracks/schemas'
import usersTypeDefs from './users/schemas'
import favoritesTypeDefs from './favorites/schemas'

const baseTypeDefs = gql`
  type Query,
  type Mutation
`
export const typeDefs = [baseTypeDefs, artistsTypeDefs, bandsTypeDefs, albumsTypeDefs, genresTypeDefs, tracksTypeDefs, usersTypeDefs, favoritesTypeDefs]