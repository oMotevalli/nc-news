import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-be-2xk8.onrender.com/api",
});

// RETRIEVE ALL ARTICLES
export const getAllArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

// RETRIEVE A SINGLE ARTICLE BY THE ARTICLE ID
export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

// RETRIEVE COMMENTS FOR A SINGLE ARTICLE
export const getCommentsByArticleId = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
