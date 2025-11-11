

// import React from "react";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from "react-redux";
// import { login } from "@/redux/authSlice/authSlice";

// // Schema for validation
// const schema = yup.object().shape({
//   email: yup.string().email("Invalid email format").required("Email is required"),
//   password: yup
//     .string()
//     .required("Password is required")
//     .min(4, "Minimum 4 characters required"),
// });

// function Login() {
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     const formData={
//       email:data.email,
//     password:data.password,
//     }
//     dispatch(login(formData));
//     console.log("Submitted Data:", data);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f5f7f9",
//         padding: "40px 0",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           width: "950px",
//           background: "white",
//           borderRadius: "16px",
//           boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
//           overflow: "hidden",
//         }}
//       >
//         {/* Left Side - Image & Text */}
//         <div
//           style={{
//             flex: 1,
//             backgroundColor: "#e6f7f1",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "30px",
//             textAlign: "center",
//           }}
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/201/201818.png"
//             alt="Login Illustration"
//             style={{ maxWidth: "250px", marginBottom: "20px" }}
//           />
//           <h3 style={{ marginBottom: "10px", color: "#333" }}>
//             Distance Learning Programs
//           </h3>
//           <p style={{ color: "#555", fontSize: "14px", maxWidth: "80%" }}>
//             Attend live and recorded classes at your own convenience.
//           </p>
//         </div>

//         {/* Right Side - Form */}
//         <div style={{ flex: 1, padding: "50px 40px" }}>
//           {/* Logo */}
//           <h2 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "600" }}>
//             UNIEDU
//           </h2>
//           <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
//             Welcome to Uniedu
//           </p>

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             {/* Email */}
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <label style={{ marginBottom: "5px", fontSize: "14px" }}>
//                 Username or email
//               </label>
//               <input
//                 type="email"
//                 {...register("email")}
//                 style={{
//                   padding: "10px",
//                   border: errors.email ? "1px solid red" : "1px solid #ccc",
//                   borderRadius: "5px",
//                 }}
//               />
//               {errors.email && (
//                 <small style={{ color: "red", marginTop: "5px" }}>
//                   {errors.email.message}
//                 </small>
//               )}
//             </div>

//             {/* Password */}
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <label style={{ marginBottom: "5px", fontSize: "14px" }}>Password</label>
//               <input
//                 type="password"
//                 {...register("password")}
//                 style={{
//                   padding: "10px",
//                   border: errors.password ? "1px solid red" : "1px solid #ccc",
//                   borderRadius: "5px",
//                 }}
//               />
//               {errors.password && (
//                 <small style={{ color: "red", marginTop: "5px" }}>
//                   {errors.password.message}
//                 </small>
//               )}
//               <a
//                 href="#"
//                 style={{
//                   textAlign: "right",
//                   fontSize: "12px",
//                   marginTop: "5px",
//                   color: "#1a8d73",
//                   textDecoration: "none",
//                 }}
//               >
//                 Forgot password?
//               </a>
//             </div>

//             {/* Sign In button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               style={{
//                 padding: "12px",
//                 backgroundColor: "#111827",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "30px",
//                 cursor: "pointer",
//                 fontSize: "16px",
//                 fontWeight: "500",
//               }}
//             >
//               Log In
//             </button>
//           </form>

//           {/* Divider */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               margin: "20px 0",
//               color: "#aaa",
//               fontSize: "14px",
//             }}
//           >
//             <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ddd" }} />
//             <span style={{ margin: "0 10px" }}>or</span>
//             <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ddd" }} />
//           </div>

//           {/* Google Login */}
//           <button
//             style={{
//               padding: "10px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               border: "1px solid #ccc",
//               borderRadius: "30px",
//               background: "white",
//               cursor: "pointer",
//               fontSize: "14px",
//               fontWeight: "500",
//               marginLeft:"120px"

//             }}
//           >
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               alt="Google Logo"
//               style={{ width: "20px", marginRight: "8px",  }}
//             />
//             Sign in with Google
//           </button>

//           {/* Create account */}
//           <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
//             Are you new?{" "}
//             <a href="#" style={{ color: "#1a8d73", textDecoration: "none" }}>
//               Create an Account
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


//..............................................//

import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice/authSlice";
import { useRouter } from "next/router";

// Schema for validation
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Minimum 4 characters required"),
});

function Login() {
  const router = useRouter()
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    }
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await dispatch(login(formData)).unwrap();

      console.log(response, "response");
      if (response?.user.id) {

        router.push("/cms/postList")
      }
    } catch (error) {

    }
  };

  const headerGradient = 'linear-gradient(135deg, #6C63FF 0%, #764ba2 100%)';
  const bodyGradient = 'linear-gradient(135deg, #f3e8ff 0%, #e8f5e8 100%)';
  const leftGradient = 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)';

  const inputStyle = {
    padding: '15px',
    border: errors.email ? '2px solid #ef4444' : '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1em',
    fontFamily: 'inherit',
    background: '#f7fafc',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, transform 0.2s ease',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };

  const focusStyle = {
    borderColor: '#6C63FF',
    boxShadow: '0 0 0 3px rgba(108, 99, 255, 0.1)',
    background: 'white',
    transform: 'translateY(-1px)',
  };

  const buttonStyle = {
    background: headerGradient,
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1em',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    alignSelf: 'flex-start',
    width: '100%',
  };

  const buttonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(108, 99, 255, 0.3)',
  };

  const googleButtonStyle = {
    background: 'white',
    color: '#2d3748',
    padding: '15px 30px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1em',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '10px',
  };

  const googleButtonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    borderColor: '#6C63FF',
  };

  const handleInputFocus = (e) => {
    Object.assign(e.target.style, focusStyle);
  };

  const handleInputBlur = (e) => {
    if (errors.email || errors.password) {
      e.target.style.borderColor = '#ef4444';
    } else {
      e.target.style.borderColor = '#e2e8f0';
    }
    e.target.style.boxShadow = 'none';
    e.target.style.background = '#f7fafc';
    e.target.style.transform = 'translateY(0)';
  };

  const handleSubmitHover = (e) => {
    if (!isSubmitting) {
      Object.assign(e.target.style, buttonHoverStyle);
    }
  };

  const handleSubmitOut = (e) => {
    e.target.style.transform = 'none';
    e.target.style.boxShadow = 'none';
  };

  const handleGoogleHover = (e) => {
    Object.assign(e.target.style, googleButtonHoverStyle);
  };

  const handleGoogleOut = (e) => {
    e.target.style.transform = 'none';
    e.target.style.boxShadow = 'none';
    e.target.style.borderColor = '#e2e8f0';
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: bodyGradient,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "950px",
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          overflow: "hidden",
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          opacity: 0,
          animation: "fadeInUp 0.8s ease-out 0.2s forwards",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
        }}
      >
        {/* Left Side - Image & Text */}
        <div
          style={{
            flex: 1,
            background: leftGradient,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(108, 99, 255, 0.1) 0%, transparent 50%)`,
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201818.png"
            alt="Login Illustration"
            style={{
              maxWidth: "250px",
              marginBottom: "30px",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
              e.currentTarget.parentElement.querySelector('div').style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
              e.currentTarget.parentElement.querySelector('div').style.opacity = "0";
            }}
          />
          <h3
            style={{
              marginBottom: "15px",
              color: "#2d3748",
              fontSize: "1.8em",
              fontWeight: "600",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.6s forwards",
            }}
          >
            Distance Learning Programs
          </h3>
          <p
            style={{
              color: "#4a5568",
              fontSize: "1em",
              maxWidth: "80%",
              lineHeight: 1.6,
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.8s forwards",
            }}
          >
            Attend live and recorded classes at your own convenience.
          </p>
        </div>

        {/* Right Side - Form */}
        <div
          style={{
            flex: 1,
            padding: "60px 50px",
            background: "white",
            position: "relative",
          }}
        >
          {/* Logo */}
          <h2
            style={{
              textAlign: "center",
              marginBottom: "10px",
              fontWeight: "700",
              fontSize: "2.5em",
              color: "#6C63FF",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.3s forwards",
            }}
          >
            UNIEDU
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#718096",
              marginBottom: "40px",
              fontSize: "1.1em",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.5s forwards",
            }}
          >
            Welcome to Uniedu
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.7s forwards",
            }}
          >
            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label
                style={{
                  marginBottom: "5px",
                  fontSize: "0.95em",
                  fontWeight: "500",
                  color: "#4a5568",
                }}
              >
                Username or email
              </label>
              <input
                type="email"
                {...register("email")}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {errors.email && (
                <small style={{ color: "#ef4444", marginTop: "5px", fontSize: "0.85em" }}>
                  {errors.email.message}
                </small>
              )}
            </div>

            {/* Password */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <label
                style={{
                  marginBottom: "5px",
                  fontSize: "0.95em",
                  fontWeight: "500",
                  color: "#4a5568",
                }}
              >Password</label>
              <input
                type="password"
                {...register("password")}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {errors.password && (
                <small style={{ color: "#ef4444", marginTop: "5px", fontSize: "0.85em" }}>
                  {errors.password.message}
                </small>
              )}
              <a
                href="#"
                style={{
                  textAlign: "right",
                  fontSize: "0.9em",
                  marginTop: "5px",
                  color: "#6C63FF",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => { e.target.style.color = "#5a67d8"; }}
                onMouseLeave={(e) => { e.target.style.color = "#6C63FF"; }}
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={buttonStyle}
              onMouseOver={handleSubmitHover}
              onMouseOut={handleSubmitOut}
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "30px 0",
              color: "#a0aec0",
              fontSize: "0.95em",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.9s forwards",
            }}
          >
            <hr style={{ flex: 1, border: "none", borderTop: "1px solid #e2e8f0" }} />
            <span style={{ margin: "0 15px", color: "#718096" }}>or</span>
            <hr style={{ flex: 1, border: "none", borderTop: "1px solid #e2e8f0" }} />
          </div>

          {/* Google Login */}
          <button
            style={googleButtonStyle}
            onMouseOver={handleGoogleHover}
            onMouseOut={handleGoogleOut}
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google Logo"
              style={{ width: "20px", height: "20px" }}
            />
            Sign in with Google
          </button>

          {/* Create account */}
          <p
            style={{
              textAlign: "center",
              marginTop: "30px",
              fontSize: "0.95em",
              color: "#718096",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 1s forwards",
            }}
          >
            Are you new?{" "}
            <a
              href="#"
              style={{
                color: "#6C63FF",
                textDecoration: "none",
                fontWeight: "500",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => { e.target.style.color = "#5a67d8"; }}
              onMouseLeave={(e) => { e.target.style.color = "#6C63FF"; }}
            >
              Create an Account
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          div[style*="width: 100%"], div[style*="maxWidth: 950px"] {
            flex-direction: column !important;
            width: 100% !important;
          }
          div[style*="flex: 1"][style*="background: linear-gradient"] {
            padding: 40px 30px !important;
          }
          div[style*="padding: 60px 50px"] {
            padding: 40px 30px !important;
          }
          img[style*="maxWidth: 250px"] {
            max-width: 200px !important;
          }
          h2[style*="fontSize: 2.5em"] {
            font-size: 2em !important;
          }
          input[style*="padding: 15px"] {
            padding: 12px !important;
          }
          button[style*="width: 100%"] {
            padding: 12px 20px !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="padding: 40px 30px"], div[style*="padding: 40px 20px"] {
            padding: 30px 20px !important;
          }
          h2[style*="fontSize: 2em"] {
            font-size: 1.8em !important;
          }
          p[style*="fontSize: 1.1em"] {
            font-size: 1em !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;

