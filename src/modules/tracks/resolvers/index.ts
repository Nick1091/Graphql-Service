export default {
  Query: {
    track: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.tracksAPI.getTrack(id);
    },
    tracks: async (_ :any, __ :any, { dataSources } :any) => {
      const data = await dataSources.tracksAPI.getTracks();
      return data.items
    },
  },
  Track: {
    id: (parent: any) => parent._id,
    // album: async (parent: any, _ :any, { dataSources }: any) => {
    //   console.log(parent);
    // album: async ({ albumsAPI }: any, _ :any, { dataSources }: any) => {
    //   return albumsAPI.map( async (id: string) => await dataSources.albumsAPI.getAlbum(id))
    // },
    artists: async ({ artistsIds }: any, _ :any, { dataSources }: any) => {
      return artistsIds.map( async (id: string) => await dataSources.artistsAPI.getArtist(id))
    },
    bands: async ({ bandsIds }: any, _ :any, { dataSources }: any) => {
      return bandsIds.map( async (id: string) => await dataSources.bandsAPI.getBand(id))
    },
    genres: async ({ genresIds }: any, _ :any, { dataSources }: any) => {
      return genresIds.map( async (id: string) => await dataSources.genresAPI.getGenre(id))
    },
  }
};
