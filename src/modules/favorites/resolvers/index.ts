import { TypeArtistsIds, TypeBandsIds, TypeGenresIds, TypeTrackIds } from "src/modules/types";
import { FAVOURITES } from "../../constants";

export default {
  Query: {
    favourites: async (_:null, __:null, { dataSources }: any) => {
      return await dataSources.favoritesAPI.getToFavorites();
    },
  },
  Favorites: {
    id: (parent: any) => parent._id,
    bands: async ({ bandsIds }: TypeBandsIds, _:null, { dataSources }: any) => {
      if (bandsIds === undefined || bandsIds === null) return null
      return bandsIds.map( async (ids: string) => {
        const arrBand = await dataSources.bandsAPI.getBand(ids);
        if(arrBand === null || arrBand === '') return
        return arrBand
      }).filter((item) => item !== null);
    },
    genres: async ({ genresIds }:TypeGenresIds, _ :null, { dataSources } :any) => {
      if (genresIds === undefined || genresIds === null) return null
      return genresIds.map( async (ids: string) => {
        const arrGenre = await dataSources.genresAPI.getGenre(genresIds);
        if(arrGenre === null || arrGenre === '') return
        return arrGenre
      }).filter((item) => item !== null);
    },
    artists: async ({ artistsIds }:TypeArtistsIds, _ :null, { dataSources }: any) => {
      if(artistsIds === undefined || artistsIds === null) return null
      return await artistsIds.map( async (id: string) => {
        const artist = await dataSources.artistsAPI.getArtist(id) 
        if(artist === null || artist === '') return
        return artist
      }).filter((item) => item !== null);
    }, 
    tracks: async ({ tracksIds }: {tracksIds: string[] | undefined | null}, _ :null, { dataSources }: any) => {
      if( tracksIds === undefined || tracksIds === null) return null
      return tracksIds.map( async (id: string) => {
        const track = await dataSources.tracksAPI.getTrack(id) 
        if(track === null || track === '') return
        return track
      });
    },
  },

  Mutation: {
    addTrackToFavourites: async (_:null, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.addToFavorites({type: FAVOURITES.tracks, ...id});
    },
    addBandToFavourites: async (_:null, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.addToFavorites({type: FAVOURITES.bands, ...id});
    },
    addArtistToFavourites: async (_:null, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.addToFavorites({type: FAVOURITES.artists, ...id});
    },
    addGenreToFavourites: async (_:null, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.addToFavorites({type: FAVOURITES.genres, ...id});
    },
    removeTrackToFavourites: async (_:null, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.removeToFavorites({type: FAVOURITES.tracks, ...id});
    },
    removeBandToFavourites: async (_:null, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.removeToFavorites({type: FAVOURITES.bands, ...id});
    },
    removeArtistToFavourites: async (_:null, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.removeToFavorites({type: FAVOURITES.artists, ...id});
    },
    removeGenreToFavourites: async (_:null, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.removeToFavorites({type: FAVOURITES.genres, ...id});
    },
  },
}

