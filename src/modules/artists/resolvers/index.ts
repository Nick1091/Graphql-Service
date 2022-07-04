export default {
  Query: {
    artist: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.artistsAPI.getArtist(id);
    },
    artists: async (_ :any, __ :any, { dataSources } :any) => {
      const data = await dataSources.artistsAPI.getArtists();
      return data.items
    },
  },
  Artist: {
    id: (parent: any) => parent._id
  }
};
