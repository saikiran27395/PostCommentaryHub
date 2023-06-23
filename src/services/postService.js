import axios from "axios";
export const fetchPosts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/posts");
    return response.data.posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchPostComments = async (id) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/posts/${id}/comments`
    );
    return response.data.comments;
  } catch (error) {
    throw new Error(error);
  }
};
