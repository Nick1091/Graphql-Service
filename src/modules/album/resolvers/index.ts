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
    id: (parent: any) => parent._id
  }
};
// willSendRequest(request: RequestOptions) {   
//   request.headers.set('Authorization', `Bearer ${this.context.token}`)
// }