import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Pagination, TypeTrack } from 'src/modules/types';

export default class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getTrack(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getTracks(args: Pagination) {
    return this.get(`${this.baseURL}`, args);
  }
  async createTrack( createTrack: TypeTrack ) {
    if (!this.context.token) return;
    return await this.post('/', createTrack )
  }
  async deleteTrack( id: string) {
    if (!this.context.token) return;
    return await this.delete(`/${id}`)
  }
  async updateTrack( id: string, inputUpdateTrack: TypeTrack ) {
    if (!this.context.token) return;
    return await this.put(`/${id}`, inputUpdateTrack )
  }
}
