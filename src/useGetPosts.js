import { useEffect, useState } from "react";
import axios from "axios";

const useGetPosts = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
    };
    fetchData();
  }, []);
  return post;
};

export default useGetPosts;
