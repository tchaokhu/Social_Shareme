import imageUrlBuilder from "@sanity/image-url";
import {createClient} from "@sanity/client";

export const client = createClient({
  projectId: process.env.REACT_APP_GOOGLE_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-11-16",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
});

const build = imageUrlBuilder(client);

export const urlFor = (source) => build.image(source);