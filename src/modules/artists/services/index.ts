import { RESTDataSource } from 'apollo-datasource-rest';

export default class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getArtist(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getArtists() {
    const data = await this.get(`${this.baseURL}`, {
      // Query parameters
    });
    return data.results;
  }
}