import "dotenv/config";
import { ApolloServer } from 'apollo-server';
import { typeDefs } from "./modules/typeDefs";
import { resolvers } from "./modules/resolvers";
import BandAPI from "./modules/bands/services";
import ArtistsAPI from "./modules/artists/services";
import AlbumsAPI from "./modules/album/services";
import GenresAPI from "./modules/genres/services";
import UsersAPI from "./modules/users/services";
import TrackAPI from "./modules/tracks/services";
import FavoritesAPI from "./modules/favorites/services";

const PORT = process.env.PORT || 4000;
export const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  dataSources: () => {
    return {
      bandsAPI: new BandAPI(),
      artistsAPI: new ArtistsAPI(),
      albumsAPI: new AlbumsAPI(),
      genresAPI: new GenresAPI(),
      usersAPI: new UsersAPI(),
      tracksAPI: new TrackAPI(),
      favoritesAPI: new FavoritesAPI(),
    }
  },
  context: async ({ req }) => ({
    token: req.headers.authorization || ''
  })
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
