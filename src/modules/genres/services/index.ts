import { RESTDataSource } from 'apollo-datasource-rest';

export default class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  async getGenre(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getGenres() {
    const data = await this.get(`${this.baseURL}`, {
      // Query parameters
    });
    return data.results;
  }
}