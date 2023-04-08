import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

//Remove for PROD
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: "albums",
  //This gives us the pre-configured version of browser "fetch"
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    //Here with the fetchFn, we are overriding the browsers default fetch function and introducing our own. Because, we can call the pause function in between the call for the loader icon to show properly. We have to remove this code when using in the PRODUCTION. This is for development and testing pursposes only.
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      addAlbum: builder.mutation({
        //invalidatesTags: ["Album"],
        //Here the user is whatever data we pass into endpoint(ex:- addAlbum here)
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        //providesTags: ["Album"],
        //Here the user is whatever data we pass into endpoint(ex:- fetchAlbums here)
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "UsersAlbums", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});
//The below hook is created by default by fetchAlbums endpoint
export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
