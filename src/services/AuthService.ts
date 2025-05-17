import Api from "@/config/Api";
import type { loginCredentialsInterface } from "@/types/interfaces/authInterfaces";
import type { userInterface } from "@/types/interfaces/userInterfaces";

export default class AuthService {
  async login({ login, password }: loginCredentialsInterface) {
    return await Api.post("/auth/login", {
      login,
      password,
    })
      .then(
        (res: {
          data: { message: string; user: userInterface; token: string };
        }) => {
          const { message, token, user } = res.data;

          return { message, token, user };
        }
      )
      .catch((error) => {
        console.log(error);
        throw new Error(error.response.data.error);
      });
  }
}
