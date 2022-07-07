import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Pagination, TypeArtist } from 'src/modules/types';

export default class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getArtist(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getArtists(args: Pagination) {
    return await this.get(`${this.baseURL}`, args);
  }
  async createArtist( inputCreateArtist: TypeArtist ) {
    if (!this.context.token) return;
    return await this.post('/', inputCreateArtist )
  }
  async deleteArtist( id: string) {
    if (!this.context.token) return;
    return await this.delete(`/${id}`)
  }
  async updateArtist( id: string, inputUpdateArtists: TypeArtist ) {
    if (!this.context.token) return;
    return await this.put(`/${id}`, inputUpdateArtists )
  }
};
