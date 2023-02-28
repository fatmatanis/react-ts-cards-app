import client from "./client";

export const getCelebreties = async (query: string) => {
  return client.get(`/search?name=${query}`);
};
