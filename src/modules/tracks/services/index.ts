import { RESTDataSource } from 'apollo-datasource-rest';

export default class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  async getTrack(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getTracks() {
    return this.get(`${this.baseURL}`, {
      // Query parameters
    });
  }
}