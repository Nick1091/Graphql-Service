export default {
  Query: {
    album: async (_ :any, { id } :any, { dataSources }:any) => {
      return dataSources.albumsAPI.getAlbum(id);
    },
    albums: async (_ :any, __ :any, { dataSources } :any) => {
      const data =  dataSources.albumsAPI.getAlbums();
      return data.items
    },
  },
};
