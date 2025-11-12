import { createQuery } from "react-query-kit";
import { client } from "../../../../Client";
import type { AxiosError } from "axios";

// import type { IProfile } from "../../Types";
// import type { ApiResponse } from "../../../../Types";


type Variables = {
  // id_user: string;
};

type Response = any;

type Error = { message: string };

export const useGet_Profile = createQuery<
  Response,
  Variables,
  AxiosError<Error>
>({
  queryKey: ["user_by_id"],
  fetcher: async () => {
    const response = await client.get<Response>(`https://wfrkrytdntmuwoejewbj.supabase.co/functions/v1/get-user-profile`);

    return {
      data: response.data,
      message: "Dados recuperados",
    };
  },

  refetchInterval: 300000,
  staleTime: 300000,
});