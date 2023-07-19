import { useEffect, useState } from "react";
import { getArticleById, updateArticleVote } from "../../api";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userVotes, setUserVotes] = useState(0);
  const [err, setErr] = useState(null);

  const handleLikes = () => {
    updateArticleVote(article_id)
      .then(() => {
        setUserVotes((currVotes) => {
          return currVotes + 1;
        });
      })
      .catch((err) => {
        setErr("Something went wrong, please try again!");
      });
  };

  useEffect(() => {
    getArticleById(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <article className="single-article">
        <img
          src={article[0].article_img_url}
          alt={`image related to ${article[0].topic}`}
        />
        <h2 className="title">{article[0].title}</h2>
        <div className="details">
          <p className="author">By {article[0].author} </p>
          <span className="voting">
            <p className="vote-count">Likes: {article[0].votes + userVotes}</p>
            <button onClick={handleLikes} disabled={userVotes > 0}>
              Like
            </button>
            {err ? <p>{err}</p> : null}
          </span>

          <p className="date">
            Posted {new Date(article[0].created_at).toDateString()}
          </p>
        </div>

        <p className="article-body">{article[0].body}</p>
      </article>
      <section className="comments-container">
        <CommentsList />
      </section>
    </div>
  );
};

export default SingleArticle;
