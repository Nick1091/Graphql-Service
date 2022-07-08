import { FAVOURITES } from "../../constants";

export default {
  Query: {
    getFavourites: async (_: any, __: any, { dataSources }: any) => {
      return await dataSources.favoritesAPI.getToFavorites();
    },
  },
  Favorites: {
    id: (parent: any) => parent._id,
    bands: async ({ bandsIds }: any, _ :any, { dataSources }: any) => {
      return await bandsIds.map( async (ids: string) => {
        const arrBand = await dataSources.bandsAPI.getBand(ids);
        if(arrBand === null || arrBand === '') return
        return arrBand
      })
    },
    genres: async ({ genresIds }: any, _ :any, { dataSources } :any) => {
      return await genresIds.map( async (ids: string) => {
        const arrGenre = await dataSources.genresAPI.getGenre(genresIds);
        if(arrGenre === null || arrGenre === '') return
        return arrGenre
      })
    },
    artists: async ({ artistsIds }: any, _ :any, { dataSources }: any) => {
      if(artistsIds === undefined || artistsIds === null) return null
      return await artistsIds.map( async (id: string) => {
        const artist = await dataSources.artistsAPI.getArtist(id) 
        if(artist === null || artist === '') return
        return artist
      })
    }, 
    tracks: async ({ tracksIds }: any, _ :any, { dataSources }: any) => {
      if( tracksIds === undefined || tracksIds === null) return null
      return await tracksIds.map( async (id: string) => {
        const track = await dataSources.tracksAPI.getTrack(id) 
        if(track === null || track === '') return
        return track
      })
    },
  },

  Mutation: {
    addTrackToFavourites: async (_: any, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.addToFavorites({type: FAVOURITES.tracks, ...id});
    },
    addBandToFavourites: async (_: any, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.addToFavorites({type: FAVOURITES.bands, ...id});
    },
    addArtistToFavourites: async (_: any, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.addToFavorites({type: FAVOURITES.artists, ...id});
    },
    addGenreToFavourites: async (_: any, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.addToFavorites({type: FAVOURITES.genres, ...id});
    },
    removeTrackToFavourites: async (_: any, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.removeToFavorites({type: FAVOURITES.tracks, ...id});
    },
    removeBandToFavourites: async (_: any, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.removeToFavorites({type: FAVOURITES.bands, ...id});
    },
    removeArtistToFavourites: async (_: any, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.removeToFavorites({type: FAVOURITES.artists, ...id});
    },
    removeGenreToFavourites: async (_: any, id: {id: string }, { dataSources }: any) => {
      return await dataSources.favoritesAPI.removeToFavorites({type: FAVOURITES.genres, ...id});
    },
  },
}

