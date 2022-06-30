export default {
  Query: {
    track: async (_ :any, { id } :any, { dataSources }:any) => {
      return dataSources.tracksAPI.getTrack(id);
    },
    tracks: async (_ :any, __ :any, { dataSources } :any) => {
      const data =  dataSources.tracksAPI.getTracks();
      return data.items
    },
  },
};
