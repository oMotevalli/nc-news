import { useEffect, useState } from "react";
import { getAllArticles } from "../../api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <section className="article-list">
      <ul>
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              author={article.author}
              date={article.created_at}
              title={article.title}
              topic={article.topic}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
