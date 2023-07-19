const CommentCard = ({ commentId, author, commentBody, votes }) => {
  return (
    <section className="comment-card">
      <h4>Posted By: {author}</h4>
      <div className="voting"></div>

      <p>{commentBody}</p>
    </section>
  );
};

export default CommentCard;
