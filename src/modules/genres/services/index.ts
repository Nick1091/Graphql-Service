import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { CONST_ERRORS } from '../../constants';
import { Pagination, TypeGenre } from '../../types';

export default class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getGenre(id: string) {
    try{
      if (id === '') return
      const res =  await this.get(`${this.baseURL}/${id}`);
      return res === '' ? null : res
    } catch (err: unknown) {
      (err as Error).message = CONST_ERRORS.ID
      return null
    }
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
    try{
      return await this.delete(`/${id}`)
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return err
    }
  }

  async updateGenre( id: string, updateGenre: TypeGenre ) {
    if (!this.context.token) return;
    try{
      const res =  await this.put(`/${id}`, updateGenre );
      return res === '' ? null : res
    } catch (err: any) {
      err.message = CONST_ERRORS.ID
      return err
    }
  }
}