import { Link } from "react-router-dom";

function Card({ post }) {
  console.log(post);

  return (
    <Link
      to={`/post/${post.id}`}
      className="block mt-4  text-black text-center py-2 rounded-lg font-semibold "
    >
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
        <img
          src={`https://image.tmdb.org/t/p/w500${post.poster_path}`}
          alt={post.title}
          className=" object-fit"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold text-white truncate">
            {post.title}
          </h2>

          <p className="text-blue-400 mt-2">⭐ {post.vote_average}/10</p>

          <p className="text-gray-400">{post.release_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
