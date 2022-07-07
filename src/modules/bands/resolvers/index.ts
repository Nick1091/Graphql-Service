import { MemberInput, Pagination, TypeBand } from "src/modules/types";

export default {
  Query: {
    band: async (_ :any, { id } :any, { dataSources }:any) => {
      return await dataSources.bandsAPI.getBand(id);
    },
    bands: async (_ :any, args: Pagination, { dataSources } :any) => {
      const data = await dataSources.bandsAPI.getBands(args);
      return data.items
    },
  },
  Band: {
    id: (parent: any) => parent._id,
    genres: async ({ genresIds }: any, _ :any, { dataSources } :any) => {
      return await Promise.all( genresIds.map( async (ids: string) => {
        const arrGenre = await dataSources.genresAPI.getGenre(genresIds);
        if(arrGenre === null || arrGenre === '') return
        return arrGenre
      }))
    },
    members: async ({ members }: any, _: any, { dataSources } :any) => {
      try{
        const arr = await Promise.all( members.map( async(member: any) => {
            return await dataSources.artistsAPI.getArtist(member.artist)
          }
        ))
        return arr.map((artist: any, idx: number) => {
          if (artist === null || artist === '') return
          return { ...artist,
          instrument: members[idx].instrument,
          years: [...members[idx].years]
        }
        })
      } catch {
        return
      } 
     }
  },
  Member: {
    id: (parent: any) => {
      return parent._id ? parent._id: null
    }
  },
  Mutation: {
    createBand: async (_: any, args: { createInputBand: TypeBand }, { dataSources }: any) => {
    return await dataSources.bandsAPI.createBand(args.createInputBand);
    },
    deleteBand: async (_: any, id: {id: string}, { dataSources }: any) => {
      return await dataSources.bandsAPI.deleteBand(id.id)
    },
    updateBand: async (_: any, args: { id: string, updateInputBand: TypeBand }, { dataSources }: any) => {
      const { id, updateInputBand } = args;
      return await dataSources.bandsAPI.updateBand(id, updateInputBand);
    }
  }
};
