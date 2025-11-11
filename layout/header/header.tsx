

//.........................................//

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { handleLoggedout } from "@/redux/authSlice/authSlice";
// import { useRouter } from "next/router";

// export default function Header() {
//   const dispatch = useDispatch();
//   const { isLogin } = useSelector((state: any) => state.Auth);
//   const router = useRouter();

//   const iconStyle: React.CSSProperties = {
//     color: "white",
//     transition: "color 0.3s ease",
//   };

//   const buttonStyle: React.CSSProperties = {
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "bold",
//     transition: "background 0.3s ease",
//   };

//   const Logout = () => {
//     dispatch(handleLoggedout(""));
//     router.push("/"); // redirect to home after logout
//   };

//   // Menu items with paths
//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/cms/about" },
//     { name: "Create Post", path: "/cms/createPost" },
//     { name: "Post List", path: "/cms/postList" },
//     { name: "Contact", path: "/cms/contact" },
//     { name: "ProfileDetails", path: "/auth/profileDetails" },
//   ];

//   return (
//     <header
//       style={{
//         background: "linear-gradient(135deg, #203a43, #2c5364)",
//         color: "white",
//         padding: "20px 60px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         flexWrap: "wrap",
//       }}
//     >
//       {/* Logo */}
//       <div style={{ fontSize: "24px", fontWeight: "bold" }}>
//         <a
//           onClick={() => router.push("/")}
//           style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
//         >
//           Dummy
//         </a>
//       </div>

//       {/* Navigation */}
//       <nav style={{ margin: "10px 0" }}>
//         <ul
//           style={{
//             display: "flex",
//             gap: "30px",
//             listStyle: "none",
//             margin: 0,
//             padding: 0,
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           {menuItems.map((item) => {
//             const isActive = router.pathname === item.path;
//             return (
//               <li key={item.name}>
//                 <span
//                   style={{
//                     color: isActive ? "#FFDD00" : "white",
//                     textDecoration: "none",
//                     fontSize: "16px",
//                     cursor: "pointer",
//                     transition: "color 0.3s ease",
//                     borderBottom: isActive ? "2px solid #FFDD00" : "none",
//                     paddingBottom: "4px",
//                   }}
//                   onClick={() => router.push(item.path)}
//                   onMouseEnter={(e) => {
//                     if (!isActive) e.currentTarget.style.color = "#FFDD00";
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!isActive) e.currentTarget.style.color = "white";
//                   }}
//                 >
//                   {item.name}
//                 </span>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Social + Auth Buttons */}
//       <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
//         {/* Email */}
//         <a href="mailto:info@jobjolt.com" style={iconStyle}>
//           <FontAwesomeIcon icon={faEnvelope} size="lg" />
//         </a>
//         {/* Instagram */}
//         <a href="#" style={iconStyle}>
//           <FontAwesomeIcon icon={faInstagram} size="lg" />
//         </a>
//         {/* Facebook */}
//         <a href="#" style={iconStyle}>
//           <FontAwesomeIcon icon={faFacebook} size="lg" />
//         </a>

//         {/* Sign In */}
//         <button
//           style={{
//             ...buttonStyle,
//             background: "transparent",
//             border: "1px solid white",
//             color: "white",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = "#FFDD00";
//             e.currentTarget.style.color = "#0D0B4C";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "transparent";
//             e.currentTarget.style.color = "white";
//           }}
//           onClick={() => router.push("/auth/login")}
//         >
//           Sign In
//         </button>

//         {/* Sign Up */}
//         <button
//           style={{
//             ...buttonStyle,
//             background: "#FFDD00",
//             color: "#0D0B4C",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = "white";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = "#FFDD00";
//           }}
//           onClick={() => router.push("/auth/register")}
//         >
//           Sign Up
//         </button>

//         {isLogin && (
//           <button
//             onClick={Logout}
//             style={{
//               ...buttonStyle,
//               background: "#FFDD00",
//               color: "#0D0B4C",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "white";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "#FFDD00";
//             }}
//           >
//             LogOut
//           </button>
//         )}
//       </div>
//     </header>
//   );
// }

//......................................


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { handleLoggedout } from "@/redux/authSlice/authSlice";
import { useRouter } from "next/router";

export default function Header() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: any) => state.Auth);
  const router = useRouter();

  const iconStyle: React.CSSProperties = {
    color: "white",
    transition: "color 0.3s ease",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  };

  const Logout = () => {
    dispatch(handleLoggedout(""));
    router.push("/"); // redirect to home after logout
  };

  // Menu items (only visible when logged in)
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/cms/about" },
    { name: "Create Post", path: "/cms/createPost" },
    { name: "Post List", path: "/cms/postList" },
    { name: "Contact", path: "/cms/contact" },
    { name: "ProfileDetails", path: "/auth/profileDetails" },
  ];

  return (
    <header
      style={{
        background: "linear-gradient(135deg, #203a43, #2c5364)",
        color: "white",
        padding: "20px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        <a
          onClick={() => router.push("/")}
          style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
        >
          Dummy
        </a>
      </div>

      {/* Navigation (visible only if logged in) */}
      {isLogin && (
        <nav style={{ margin: "10px 0" }}>
          <ul
            style={{
              display: "flex",
              gap: "30px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => {
              const isActive = router.pathname === item.path;
              return (
                <li key={item.name}>
                  <span
                    style={{
                      color: isActive ? "#FFDD00" : "white",
                      textDecoration: "none",
                      fontSize: "16px",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                      borderBottom: isActive ? "2px solid #FFDD00" : "none",
                      paddingBottom: "4px",
                    }}
                    onClick={() => router.push(item.path)}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "#FFDD00";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "white";
                    }}
                  >
                    {item.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* Social + Auth Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Social Icons - visible only when logged in */}
        {isLogin && (
          <>
            <a href="mailto:info@jobjolt.com" style={iconStyle}>
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a href="#" style={iconStyle}>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" style={iconStyle}>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </>
        )}

        {/* Show Sign In / Sign Up only if NOT logged in */}
        {!isLogin && (
          <>
            <button
              style={{
                ...buttonStyle,
                background: "transparent",
                border: "1px solid white",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFDD00";
                e.currentTarget.style.color = "#0D0B4C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "white";
              }}
              onClick={() => router.push("/auth/login")}
            >
              Sign In
            </button>

            <button
              style={{
                ...buttonStyle,
                background: "#FFDD00",
                color: "#0D0B4C",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FFDD00";
              }}
              onClick={() => router.push("/auth/register")}
            >
              Sign Up
            </button>
          </>
        )}

        {/* Logout visible only when logged in */}
        {isLogin && (
          <button
            onClick={Logout}
            style={{
              ...buttonStyle,
              background: "#FFDD00",
              color: "#0D0B4C",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFDD00";
            }}
          >
            LogOut
          </button>
        )}
      </div>
    </header>
  );
}

