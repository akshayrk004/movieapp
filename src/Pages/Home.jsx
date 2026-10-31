import { useEffect, useState } from "react";
import Card from "../component/Card";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Home() {
  const [posts, setPost] = useState([]);

  const PostFun = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => {
        setPost(res.data.results);
      });
  };
  useEffect(() => {
    PostFun();
  }, []);
  if (!posts)
    return (
      <h1 className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-4xl text-white min-h-screen">
        Loading...
      </h1>
    );

  return (
    <div>
      <ol className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card post={post} />
        ))}
      </ol>
    </div>
  );
}
