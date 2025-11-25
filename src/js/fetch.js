import { createClient } from "pexels";

const client = createClient("XAiw6eNZwtkCzUvveXeiGnypOpM1wPeP7iX8a8wHuhCBiNJMuNbdbxKy");

export const WEBSITE_NAME = "Pexels";
export const WEBSITE_URL = "https://www.pexels.com/";

export async function fetchData(query) {
  const data = client.photos.search({ query, per_page: 30 });
  return data;
}
