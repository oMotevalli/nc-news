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
      console.log(data);
      setComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  console.log(comments, "comments from COMMENTLIST");

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="comments-list">
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
    </div>
  );
};

export default CommentsList;
