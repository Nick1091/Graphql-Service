import { UserType, UserTypeParent } from "src/modules/types";

export default {
  Query: {
    user: async (_:null, { id }: { id: string }, { dataSources }:any) => {
      return dataSources.usersAPI.getUser(id);
    },
    jwt: async (_:null, data: {email: string, password: string }, { dataSources }:any) => {
      try {
        return await dataSources.usersAPI.getJWT(data);
      } catch {
        return 
      }
    }
  },
  User: {
    id: (parent: UserTypeParent) => parent._id
  },
  Mutation: {
    register: async (_:null, userInput: { userInput: UserType }, { dataSources }: any) => {
      return dataSources.usersAPI.createUser(userInput);
    }
  }
};
