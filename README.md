
5c03452954285c915c6269e4454235e5


https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}

// import { useEffect, useState } from "react";
// const API_KEY = "";
// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const PostFun = async () => {
//     const res = await fetch(`);
//     const data = await res.json();
//     setPosts(data);
//   };
//   useEffect(() => {
//     PostFun();
//   }, []);
//   return (
//     <div>
//       <ol>
//         {posts.map((post) => (
//           <li>{post.title}</li>
//         ))}
//       </ol>
//     </div>
//   );
// }
```````````````````````````````````````````````````````
//? Home jsx





// import { useEffect, useState } from "react";
// import Card from "../component/Card";

// const API_KEY = "5c03452954285c915c6269e4454235e5";
// export default function Home() {
//   const [posts, setPosts] = useState();
//   const postFun = async () => {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
//     );

//     const data = await res.json();
//     setPosts(data);
//   };
//   useEffect(() => {
//     postFun();
//   }, []);

//   if (!posts) return <h1>Loading...</h1>;

//   return (
//     <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white font-semibold font-serif">
//       <ol className="grid grid-cols-4 gap-2">
//         {posts.results.map((post) => (
//           <Card key={post.id} post={post} />
//         ))}
//       </ol>
//     </div>
//   );
// }
``````````````````````````````````````````````````````````````````````````````````

`````````````````````````````````````````````````````````````````````````````````
card.jsx



import { Link } from "react-router-dom"

// function Card({post}) {
//   return (
//     <div>
      
// <div><img src={`https://image.tmdb.org/t/p/w500${post.poster_path}`} alt="{post.title}" /></div>

// <div>{post.vote_average}</div>


// <div>

// <p>{post.title}</p>
// <p>{post.realease_date}</p>

// <Link to ={`/posts/${post.id}`}>Details</Link>
// </div>

//     </div>
//   )
// }

// export default Card
``````````````````````````````````````````````````````````````````````````````````````

``````````````````````````````````````````````````````````````````````````````````````````````
Details.jsx


import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const API_KEY = "5c03452954285c915c6269e4454235e5";
// export default function Details() {
//   const { id } = useParams();
//   const [post, setPost] = useState();
//   const postFun = async () => {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
//     );
//     const data = await res.json();
//     setPost(data);
//   };

//   useEffect(() => {
//     postFun();
//   }, []);
//   if (!post) return <h1>Loading...</h1>;
//   return (
//     <div className="bg-olive-200">
//       <h1 className="text-2xl font-extrabold ">{post.title}</h1>
//       <img src={`https://image.tmdb.org/t/p/w500${post.poster_path}`} />

//       <div className="bg-gray-300">
//         <p className="text-gray-600">Release Date:{post.release_date}</p>
//         <p className="text-lg font-semibold">${post.vote_average}</p>
//         <p className="text-gray-700">Description:{post.overview}</p>
//         <p className="text-gray-700 ">Votes: {post.vote_count}</p>
//       </div>

//       <Link
//         to="/"
//         className="bg-blue-200 rounded-full px-4 font-bold text-center"
//       >
//         Back
//       </Link>
//     </div>
//   );
// }
