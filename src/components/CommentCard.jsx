const CommentCard = ({ author, commentBody, votes }) => {
  return (
    <section className="comment-card">
      <h4>Posted By: {author}</h4>
      <p>Votes: {votes}</p>
      <p>{commentBody}</p>
    </section>
  );
};

export default CommentCard;
