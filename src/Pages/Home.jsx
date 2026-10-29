import { useEffect, useState } from "react";
import Card from "../component/Card";

const API_KEY = "5c03452954285c915c6269e4454235e5";
export default function Home() {
  const [posts, setPost] = useState();
  const PostFun = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    );

    const data = await res.json();
    setPost(data);
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
        {posts.results.map((post) => (
          <Card post={post} />
        ))}
      </ol>
    </div>
  );
}
