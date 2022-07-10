import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { CONST_ERRORS } from '../../constants';
import { UserType } from 'src/modules/types';

export default class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }
  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getUser (id: string) {
    try{
      if(id === '') throw new Error(`500: ${CONST_ERRORS.ID}`)
      return await this.get(`${this.baseURL}/${id}`);
    } catch (err) {
      (err  as unknown as Error).message = `500: ${CONST_ERRORS.ID}`
      return err
    }
  }
  async createUser ( userInput: { userInput: UserType } ) {
    return await this.post('/register', userInput.userInput)

  }
  async getJWT ( userData: {email: string, password: string }) {
    try{
      const data = await this.post('/login', {...userData})
      this.context.token = data.jwt;
      return data;
    } catch (err){
      return (err)
    }
  }
}
