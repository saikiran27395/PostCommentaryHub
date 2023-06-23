import { useState, useEffect } from "react";
import "./App.css";
import { fetchPostComments, fetchPosts } from "./services/postService";

function App() {
  const [Comments, setComments] = useState([]);
  const [posts, setPostData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await fetchPosts();
        setPostData(posts);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  const getComments = async (id) => {
    try {
      const comments = await fetchPostComments(id);
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Vanguard</h1>
      {Comments.map((comment) => (
        <article key={comment.id}>
          <p>{comment.body}</p>
        </article>
      ))}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>User ID</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.userId}</td>
              <td>
                <button onClick={() => getComments(post.id)}>
                  Get Comments
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
