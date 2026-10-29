import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const API_KEY = "5c03452954285c915c6269e4454235e5";
export default function Details() {
  const { id } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    const postFun = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
      );
      const data = await res.json();
      setPost(data);
    };

    postFun();
  }, [id]);
  if (!post)
    return (
      <h1 className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-2xl text-white min-h-screen">
        Loading...
      </h1>
    );
  return (
    <div className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-2xl text-white ">
      <div className="flex gap-5">
        <img src={`https://image.tmdb.org/t/p/w500${post.poster_path}`} />
        <div>
          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p>Released on : {post.release_date}</p>
            <p>{post.vote_average} Rated </p>
            <p className="w-200">{post.overview}</p>
            <p>{post.original_language}</p>
            <p>Votes: {post.vote_count}</p>
            <p>{post.softcore}</p>
            <p>{post.adult}</p>
          </div>
          <br />
          <br />

          <br />
          <Link
            to="/"
            className="text-white text-xl  text-shadow-md shadow-amber-100 rounded-sm px-4  font-bold text-center"
          >
            Back To Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
