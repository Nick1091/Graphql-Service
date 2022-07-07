import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { Pagination, TypeGenre } from 'src/modules/types';

export default class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getGenre(id: string) {
    return this.get(`${this.baseURL}/${id}`);
  }

  async getGenres(args: Pagination) {
    return this.get(`${this.baseURL}`, args)
  }

  async createGenre( createGenre: TypeGenre ) {
    if (!this.context.token) return;
    return await this.post('/', createGenre )
  }
  async deleteGenre( id: string) {
    if (!this.context.token) return;
    return await this.delete(`/${id}`)
  }
  async updateGenre( id: string, updateGenre: TypeGenre ) {
    if (!this.context.token) return;
    return await this.put(`/${id}`, updateGenre )
  }
}