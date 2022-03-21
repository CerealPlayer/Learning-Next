import { useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;
  const [ response, setResponse ] = useState('');
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    const req = await fetch(`/api/save-comment/${eventId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    const response = await req.json();
    setResponse(response.message);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {response && <p className={classes.success}>{response}</p>}
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={props.comments} />}
    </section>
  );
}

export default Comments;
