import { RESTDataSource } from 'apollo-datasource-rest';

export default class BandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  async getBand(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getBands() {
    const data = await this.get(`${this.baseURL}`, {
      // Query parameters
    });
    return data.results;
  }
}