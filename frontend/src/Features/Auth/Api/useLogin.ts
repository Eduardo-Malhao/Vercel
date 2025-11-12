// src/Features/Auth/Api/useLogin.ts
import { createMutation } from "react-query-kit";
import { dbClient } from "../../../Client/db";

import type { Auth_FormData } from "../Types";

type Variables = {
  data: Auth_FormData;
};

type Response = any;
type Error = { error: string };

export const useLogin = createMutation<Response, Variables, Error>({
  mutationFn: async ({ data }) => {
    const { email, password } = data;

    if (!email || !password) {
      throw { error: "Email e senha são obrigatórios" };
    }

    const { data: authData, error } = await dbClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw { error: error.message };
    }

    const { session, user } = authData;

    if (!session || !user) {
      throw { error: "Erro ao autenticar. Tente novamente." };
    }

    return authData;
  },
});
