import { UserType } from "src/modules/types";

export default {
  Query: {
    user: async (parent :any, { id } :any, { dataSources }:any) => {
      return dataSources.usersAPI.getUser(id);
    },
    jwt: async (_: any, data: {email: string, password: string }, { dataSources }:any) => {
      try {
        let { jwt } = await dataSources.usersAPI.getJWT(data);
        return { jwt }
      } catch {
        return 
      }
    }
  },
  User: {
    id: (parent: any) => parent._id
  },
  Mutation: {
    register: async (_: any, input: { input: UserType }, { dataSources }: any) => {
      console.log(dataSources)
      return dataSources.usersAPI.createUser(input);
    }
  }
};
