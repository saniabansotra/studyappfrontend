// import { Link } from "react-router-dom";
// import React from "react";
// import logo1 from "./logo.jpg";
// import { useMatch, useResolvedPath } from "react-router-dom";

// const Home = () => {
//   function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to);
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//     return (
//       <li className={isActive ? "active" : ""}>
//         <Link to={to} {...props}>
//           {children}
//         </Link>
//       </li>
//     );
//   }
//   return (
//     <>
//       <nav class="navbar navbar-expand-lg bg-light">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             <img src={logo1} class="image1" width="100px" alt="Logo" />
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav">
//               <li class="nav-item">
//                 <CustomLink
//                   to="/home"
//                   class="nav-link active"
//                   aria-current="page"
//                 >
//                   Home
//                 </CustomLink>
//               </li>
//               <li class="nav-item">
//                 <CustomLink to="/courses" class="nav-link">
//                   Courses
//                 </CustomLink>
//               </li>
//               <li class="nav-item">
//                 <CustomLink to="/contact" class="nav-link">
//                   Contact
//                 </CustomLink>
//               </li>
//               <li class="nav-item">
//                 <CustomLink to="/feedback" class="nav-link">
//                   Feedback
//                 </CustomLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Home;
export default function Home() {
  return <h1>Home</h1>;
}
