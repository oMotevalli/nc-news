import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   console.log(article_id, "from single article");
  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <article className="single-article">
      <h2 className="title">{article[0].title}</h2>
      <div className="details">
        <p className="author">By {article[0].author} </p>
        <p className="date">
          Posted {new Date(article[0].created_at).toDateString()}
        </p>
      </div>

      <p className="article-body">{article[0].body}</p>
    </article>
  );
};

export default SingleArticle;
