import { useState } from "react";

import { postComment } from "../../api";

const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [newUser, setNewUser] = useState("jessjelly");
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    postComment(article_id, { username: newUser, body: newComment })
      .then(() => {
        setComments((currComments) => {
          return [
            { comment_id: 9999, author: newUser, body: newComment, votes: 0 },
            ...currComments,
          ];
        });
      })
      .catch(function (err) {
        setErr("Something went wrong, please try again!");
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={newUser}
        onChange={(e) => {
          setNewUser(e.target.value);
        }}
      />
      <label htmlFor="body">Comment</label>
      <input
        id="body"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />
      <button>Submit Comment</button>
      <p>{err}</p>
    </form>
  );
};

export default CommentAdder;
