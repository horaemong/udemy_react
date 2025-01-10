import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="TestAuthor" body="TestBody"></Post>
      <Post author="TestAuthor2" body="TestBody2"></Post>
    </ul>
  );
}

export default PostsList;
