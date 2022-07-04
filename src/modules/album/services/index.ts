import { RESTDataSource } from 'apollo-datasource-rest';

export default class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  async getAlbum(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getAlbums() {
    return await this.get(`${this.baseURL}`, {
      // Query parameters
    });
  }
}