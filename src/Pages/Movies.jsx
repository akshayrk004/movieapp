// import { useEffect, useState } from "react";
// import Card from "../component/Card";
// import { useLocation } from "react-router-dom";

// export default function Result() {
//   const [posts, setPost] = useState();
//   const { state } = useLocation();

//   useEffect(() => {
//     setPost(state?.data);
//   }, [state]);

//   if (!posts)
//     return (
//       <h1 className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-4xl text-white min-h-screen">
//         Loading...
//       </h1>
//     );

//   return (
//     <div>
//       <ol className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 grid grid-cols-4 gap-4">
//         {posts.movies.map((post) => (
//           <Card post={post} />
//         ))}
//       </ol>
//     </div>
//   );
// }
