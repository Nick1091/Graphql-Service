import { MemberInput, Pagination, TypeArtist, TypeArtistParent, TypeBand, TypeBandParent, TypeBandsIds, TypeGenresIds, TypeMember } from "src/modules/types";

export default {
  Query: {
    band: async (_ :null, { id }: { id: string }, { dataSources }:any) => {
      return await dataSources.bandsAPI.getBand(id);
    },
    bands: async (_ :null, args: Pagination, { dataSources } :any) => {
      const data = await dataSources.bandsAPI.getBands(args);
      return data.items
    },
  },
  Band: {
    id: (parent: TypeBandParent) => parent._id,
    genres: async ({ genresIds }: TypeGenresIds, _ :null, { dataSources }: any) => {
      if(genresIds === undefined || genresIds === null) return null
      return genresIds.map( async (id: string) => {
        const genre = await dataSources.genresAPI.getGenre(id) 
        if(genre === null || genre === '') return
        return genre
      })
    },
    members: async ({ members }: { members: MemberInput[]}, _: null, { dataSources } :any) => {
      try{
        const arr = await Promise.all(members.map( async(member: MemberInput): Promise<TypeArtistParent> => {
            return await dataSources.artistsAPI.getArtist(member.artist)
          }
        ))
        return arr.map((artist: TypeArtist, idx: number) => {
          if (artist === null || artist === '') return null
          return { ...artist,
          instrument: members[idx].instrument,
          years: members[idx].years
        }
        })
      } catch {
        return
      } 
     }
  },
  Member: {
    id: (parent: TypeMember) => {
      return parent._id ? parent._id: null
    }
  },
  Mutation: {
    createBand: async (_: null, args: { createInputBand: TypeBand }, { dataSources }: any) => {
    return await dataSources.bandsAPI.createBand(args.createInputBand);
    },
    deleteBand: async (_: null, id: {id: string}, { dataSources }: any) => {
      return await dataSources.bandsAPI.deleteBand(id.id)
    },
    updateBand: async (_: null, args: { id: string, updateInputBand: { updateInputBand: TypeBand } }, { dataSources }: any) => {
      const { id, updateInputBand } = args;
      return await dataSources.bandsAPI.updateBand(id, updateInputBand);
    }
  }
};
