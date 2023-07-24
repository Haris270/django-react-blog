// import App from "../App";

const Posts = (props: any) => {
  const { posts } = props;
  if (!posts || posts.length === 0)
    return <p className="no-post">Can not find any posts, sorry</p>;
  return (
    <>
      {posts.map((post: any) => {
        // console.log(String(post.thumnail));
        return (
          // <div className="post">
          <li key={post.title}>
            <img
              className="post-img"
              src="http://127.0.0.1:8000/media/images/cr7-200" //{post.thumnail}
              // src=   {"http://127.0.0.1:8000/media/images/" + post.thumnail}
            />

            <h2>{post.title}</h2>
            <h5>{post.author}</h5>
            {/* // </div> */}
          </li>
        );
      })}
    </>
  );
};

export default Posts;
