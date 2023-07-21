import { useState } from "react";

import { postComment } from "../../api";

const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [newUser, setNewUser] = useState("jessjelly");
  const [err, setErr] = useState(null);
  const [validateComment, setValidateComment] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    console.log("button clicked");
    if (newUser && newComment) {
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
      setNewComment("");
    } else {
      setValidateComment(false);
    }
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
      <br />
      <label htmlFor="comment"></label>
      <textarea
        placeholder="Write your comment..."
        cols="1"
        rows="-1"
        id="comment"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
        onClick={() => {
          setValidateComment(true);
        }}
      ></textarea>
      <br />
      <button>Submit Comment</button>
      {!validateComment ? (
        <p className="validation">Please enter your username and comment!</p>
      ) : null}
      <p>{err}</p>
    </form>
  );
};

export default CommentAdder;
