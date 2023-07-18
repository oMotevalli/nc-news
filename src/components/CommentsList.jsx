import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentsList = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="comments-list">
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                author={comment.author}
                commentBody={comment.body}
                votes={comment.votes}
              />
            );
          })}
        </ul>
      ) : (
        <p>0 Comments - be the first to post?</p>
      )}
    </div>
  );
};

export default CommentsList;
