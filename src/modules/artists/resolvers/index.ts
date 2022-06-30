export default {
  Query: {
    artist: async (_ :any, { id } :any, { dataSources }:any) => {
      return dataSources.artistsAPI.getArtist(id);
    },
    artists: async (_ :any, __ :any, { dataSources } :any) => {
      const data =  dataSources.artistsAPI.getArtists();
      return data.items
    },
  },
};
