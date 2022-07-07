export default {
  Query: {
    album: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.albumsAPI.getAlbum(id);
    },
    albums: async (_ :any, __ :any, { dataSources } :any) => {
      const data = await dataSources.albumsAPI.getAlbums();
      return data.items
    },
  },
  Album: {
    id: (parent: any) => parent._id,
    artists: async ({ artistsIds }: any, _ :any, { dataSources }: any) => {
      return artistsIds.map( async (id: string) => await dataSources.artistsAPI.getArtist(id))
    },
    bands: async ({ bandsIds }: any, _ :any, { dataSources }: any) => {
      return bandsIds.map( async (id: string) => await dataSources.bandsAPI.getBand(id))
    },
    tracks: async ({ trackIds }: any, _ :any, { dataSources }: any) => {
      return trackIds.map( async (id: string) => await dataSources.tracksAPI.getTrack(id))
    },
    genres: async ({ genresIds }: any, _ :any, { dataSources }: any) => {
      return genresIds.map( async (id: string) => await dataSources.genresAPI.getGenre(id))
    },
  }
};
// willSendRequest(request: RequestOptions) {   
//   request.headers.set('Authorization', `Bearer ${this.context.token}`)
// }