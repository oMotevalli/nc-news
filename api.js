import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-be-2xk8.onrender.com/api",
});

// RETRIEVE ALL ARTICLES
export const getAllArticles = () => {
  return ncNewsApi.get("/articles?limit=5").then(({ data }) => {
    return data.articles;
  });
};
