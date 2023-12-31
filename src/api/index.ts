import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

import { getSdk } from "../generated/graphql";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");

export const { getCurrentWeather, getForeCastData } = getSdk(gqlClient);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});
