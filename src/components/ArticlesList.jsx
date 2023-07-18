import { useEffect, useState } from "react";
import { getAllArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="article-list">
      <ul>
        {articles.map((article) => {
          return (
            <div key={article.article_id}>
              <ArticleCard
                author={article.author}
                date={article.created_at}
                title={article.title}
                topic={article.topic}
              />
              <Link to={`/articles/${article.article_id}`}>See More</Link>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
