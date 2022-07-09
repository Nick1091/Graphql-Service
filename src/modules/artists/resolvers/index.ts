import { Pagination, TypeArtist, TypeArtistParent, TypeBandsIds, UserType } from "src/modules/types";

export default {
  Query: {
    artist: async (_ :null, { id }: { id: string }, { dataSources }:any) => {
      return await dataSources.artistsAPI.getArtist(id);
    },
    artists: async (_ :null, args: Pagination, { dataSources } :any) => {
      const data = await dataSources.artistsAPI.getArtists(args);
      return data.items
    },
  },
  Artist: {
    id: (parent: TypeArtistParent) => parent._id,
    bands: async ({ bandsIds }: TypeBandsIds, _ :null, { dataSources }: any) => {
      if(bandsIds === undefined || bandsIds === null) return null
      return bandsIds.map( async (ids: string) => {
        const arrBand = await dataSources.bandsAPI.getBand(ids);
        if(arrBand === null || arrBand === '') return
        return arrBand
      })
    },
  },
  Mutation: {
    createArtist: async (_: null, inputCreateArtist: { inputCreateArtist: TypeArtist }, { dataSources }: any) => {
      return await dataSources.artistsAPI.createArtist(inputCreateArtist.inputCreateArtist);
    },
    deleteArtist: async (_: null, id: {id: string}, { dataSources }: any) => {
      return await dataSources.artistsAPI.deleteArtist(id.id)
    },
    updateArtist: async (_: null, args: { id: string, inputUpdateArtists: { inputUpdateArtists: TypeArtist }}, { dataSources }: any) => {
      const { id, inputUpdateArtists } = args;
      return await dataSources.artistsAPI.updateArtist(id, inputUpdateArtists);
    }
  }
}
