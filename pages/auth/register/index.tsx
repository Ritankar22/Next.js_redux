// import React, { useState } from "react";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from "react-redux";
// import { registerForm } from "@/redux/authSlice/authSlice";
// import { useRouter } from "next/router";
// import { log } from "console";

// // Validation schema
// const schema = yup.object().shape({
//   name: yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup.string().min(4, "Minimum 4 characters required").required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .required("Confirm Password is required")
//     .oneOf([yup.ref("password")], "Passwords must match"),
//   address: yup.string().required(),
//   profileImage: yup.mixed().required()
// });

// function Register() {
//   const [img, setImg] = useState();
//   const dispatch = useDispatch();
//   const router=useRouter();
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     clearErrors,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       setImg(file);
//       setValue("profileImage", file);
//       clearErrors("profileImage");
//     } else {
//       alert("Please upload a valid image file");
//     }
//   };

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("password", data.password);
//     formData.append("confirmPassword", data.confirmPassword);
//     formData.append("address", data.address);
//     formData.append("profileImage", img);
//     // dispatch(registerForm(formData));
//     console.log("Form Submitted", data);
//     try{
//       await new Promise((resolve)=>setTimeout(resolve,1500));
//       const response = await dispatch(registerForm(formData)).unwrap();
//       console.log(response,"response");
//       if(response?.user.id){
        
//         router.push("/auth/otp")
//       }
//     }catch(error){
     
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           width: "950px",
//           background: "white",
//           borderRadius: "12px",
//           boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
//           overflow: "hidden",
//         }}
//       >
//         {/* Left Side - Image */}
//         <div style={{ flex: 1 }}>
//           <img
//             src="https://media.istockphoto.com/id/505551939/photo/library.jpg?s=612x612&w=0&k=20&c=lGwjpaVR2__plgaEeRiLZ0n1up16Zm3PW6zlR4paabI=" // replace with your own image
//             alt="Register Illustration"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>

//         {/* Right Side - Form */}
//         <div style={{ flex: 1, padding: "50px 40px" }}>
//           <h2 style={{ textAlign: "center", marginBottom: "30px", fontWeight: "600" }}>
//             Register
//           </h2>

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             style={{ display: "flex", flexDirection: "column", gap: "15px" }}
//           >
//             {/* Full Name */}
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 {...register("name")}
//                 style={{
//                   padding: "12px",
//                   border: errors.name ? "1px solid red" : "1px solid #ccc",
//                   borderRadius: "5px",
//                 }}
//               />
//               {errors.name && <small style={{ color: "red" }}>{errors.name.message}</small>}
//             </div>

//             {/* Email */}
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <input
//                 type="email"
//                 placeholder="Email or Phone Number"
//                 {...register("email")}
//                 style={{
//                   padding: "12px",
//                   border: errors.email ? "1px solid red" : "1px solid #ccc",
//                   borderRadius: "5px",
//                 }}
//               />
//               {errors.email && <small style={{ color: "red" }}>{errors.email.message}</small>}
//             </div>

//             {/* Password */}
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 {...register("password")}
//                 style={{
//                   padding: "12px",
//                   border: errors.password ? "1px solid red" : "1px solid #ccc",
//                   borderRadius: "5px",
//                 }}
//               />
//               {errors.password && (
//                 <small style={{ color: "red" }}>{errors.password.message}</small>
//               )}
//             </div>

//             {/* Confirm Password */}
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 {...register("confirmPassword")}
//                 style={{
//                   padding: "12px",
//                   border: errors.confirmPassword ? "1px solid red" : "1px solid #ccc",
//                   borderRadius: "5px",
//                 }}
//               />
//               {errors.confirmPassword && (
//                 <small style={{ color: "red" }}>{errors.confirmPassword.message}</small>
//               )}
//             </div>
//             {/* address */}
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <input
//                 type="address"
//                 placeholder="address"
//                 {...register("address")}
//                 style={{
//                   padding: "12px",
//                   border: errors.address ? "1px solid red" : "1px solid #ccc",
//                   borderRadius: "5px",
//                 }}
//               />
//               {errors.address && (
//                 <small style={{ color: "red" }}>{errors.address.message}</small>
//               )}
//             </div>

//             {/* Profile Image Upload */}
//             {/* <div>
//               <input
//                 type="file"
//                 accept="image/*"
//                 {...register("profileImage")}
//                 onChange={handleChange}
//                 style={{ marginTop: "5px" }}
//               />
//               {errors.profileImage && (
//                 <small style={{ color: "red" }}>{errors.profileImage.message}</small>
//               )}
//             </div> */}
//             {/* Profile Image Upload */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//               <input
//                 type="file"
//                 accept="image/*"
//                 {...register("profileImage")}
//                 onChange={handleChange}
//                 style={{ marginTop: "5px" }}
//               />
//               {errors.profileImage && (
//                 <small style={{ color: "red" }}>{errors.profileImage.message}</small>
//               )}

//               {/* ✅ Show preview if image is selected */}
//               {img && (
//                 <div style={{ marginTop: "10px" }}>
//                   <img
//                     src={URL.createObjectURL(img)}
//                     alt="Preview"
//                     style={{
//                       width: "100px",
//                       height: "100px",
//                       objectFit: "cover",
//                       borderRadius: "8px",
//                       border: "1px solid #ccc",
//                     }}
//                   />
//                 </div>
//               )}
//             </div>


//             {/* Checkbox - Terms */}
//             <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//               <input type="checkbox" defaultChecked />
//               <span style={{ fontSize: "13px", color: "#555" }}>
//                 Lorem Ipsum is simply dummy text of the printing and type.
//               </span>
//             </div>

//             {/* Register Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               style={{
//                 padding: "12px",
//                 border: "none",
//                 borderRadius: "30px",
//                 background: "linear-gradient(to right, #4CAF50, #2F8F83)",
//                 color: "white",
//                 fontSize: "16px",
//                 fontWeight: "500",
//                 cursor: "pointer",
//               }}
//             >
//               Register
//             </button>
//           </form>

//           {/* Social Login */}
//           <p style={{ textAlign: "center", margin: "20px 0 10px", fontSize: "14px" }}>
//             Register in with
//           </p>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "15px",
//               marginBottom: "20px",
//             }}
//           >
//             <button
//               style={{
//                 padding: "10px 20px",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 background: "white",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//             >
//               <img
//                 src="https://www.svgrepo.com/show/355037/google.svg"
//                 alt="Google"
//                 style={{ width: "20px" }}
//               />
//               Google
//             </button>

//             <button
//               style={{
//                 padding: "10px 20px",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 background: "white",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//             >
//               <img
//                 src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
//                 alt="Facebook"
//                 style={{ width: "20px" }}
//               />
//               Facebook
//             </button>
//           </div>

//           {/* Login Link */}
//           <p style={{ textAlign: "center", fontSize: "14px", color: "#555" }}>
//             Already have an account?{" "}
//             <a href="#" style={{ color: "#2F8F83", textDecoration: "none" }}>
//               Log in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


//.............................//


import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { registerForm } from "@/redux/authSlice/authSlice";
import { useRouter } from "next/router";
import { log } from "console";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(4, "Minimum 4 characters required").required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  address: yup.string().required(),
  profileImage: yup.mixed().required()
});

function Register() {
  const [img, setImg] = useState();
  const dispatch = useDispatch();
  const router=useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImg(file);
      setValue("profileImage", file);
      clearErrors("profileImage");
    } else {
      alert("Please upload a valid image file");
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("address", data.address);
    formData.append("profileImage", img);
    // dispatch(registerForm(formData));
    console.log("Form Submitted", data);
    try{
      await new Promise((resolve)=>setTimeout(resolve,1500));
      const response = await dispatch(registerForm(formData)).unwrap();
      console.log(response,"response");
      if(response?.user.id){
        
        router.push("/auth/otp")
      }
    }catch(error){
     
    }
  };

  const headerGradient = 'linear-gradient(135deg, #6C63FF 0%, #764ba2 100%)';
  const bodyGradient = 'linear-gradient(135deg, #f3e8ff 0%, #e8f5e8 100%)';
  const leftGradient = 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)';

  const inputStyle = {
    padding: '15px',
    border: '2px solid #e2e8f0',
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

  const socialButtonStyle = {
    background: 'white',
    color: '#2d3748',
    padding: '15px 20px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1em',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    flex: 1,
  };

  const socialButtonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    borderColor: '#6C63FF',
  };

  const handleInputFocus = (e) => {
    Object.assign(e.target.style, focusStyle);
  };

  const handleInputBlur = (e) => {
    const fieldName = e.target.name;
    if (errors[fieldName]) {
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

  const handleSocialHover = (e) => {
    Object.assign(e.target.style, socialButtonHoverStyle);
  };

  const handleSocialOut = (e) => {
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
        {/* Left Side - Image */}
        <div 
          style={{ 
            flex: 1,
            position: "relative",
            background: leftGradient,
            overflow: "hidden",
          }}
        >
          <img
            src="https://media.istockphoto.com/id/505551939/photo/library.jpg?s=612x612&w=0&k=20&c=lGwjpaVR2__plgaEeRiLZ0n1up16Zm3PW6zlR4paabI=" // replace with your own image
            alt="Register Illustration"
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              transition: "transform 0.3s ease, filter 0.3s ease",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.filter = "brightness(1)";
            }}
          />
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
            onMouseEnter={(e) => { e.target.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.target.style.opacity = "0"; }}
          />
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
            Register
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "25px",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.5s forwards",
            }}
          >
            {/* Full Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name")}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {errors.name && <small style={{ color: "#ef4444", fontSize: "0.85em" }}>{errors.name.message}</small>}
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <input
                type="email"
                placeholder="Email or Phone Number"
                {...register("email")}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {errors.email && <small style={{ color: "#ef4444", fontSize: "0.85em" }}>{errors.email.message}</small>}
            </div>

            {/* Password */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {errors.password && (
                <small style={{ color: "#ef4444", fontSize: "0.85em" }}>{errors.password.message}</small>
              )}
            </div>

            {/* Confirm Password */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {errors.confirmPassword && (
                <small style={{ color: "#ef4444", fontSize: "0.85em" }}>{errors.confirmPassword.message}</small>
              )}
            </div>
            {/* address */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <input
                type="text"
                placeholder="Address"
                {...register("address")}
                style={inputStyle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              {errors.address && (
                <small style={{ color: "#ef4444", fontSize: "0.85em" }}>{errors.address.message}</small>
              )}
            </div>

            {/* Profile Image Upload */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="file"
                accept="image/*"
                {...register("profileImage")}
                onChange={handleChange}
                style={{ 
                  padding: '10px',
                  border: '2px dashed #e2e8f0',
                  borderRadius: '8px',
                  background: '#f7fafc',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#6C63FF'; }}
                onBlur={(e) => { e.target.style.borderColor = '#e2e8f0'; }}
              />
              {errors.profileImage && (
                <small style={{ color: "#ef4444", fontSize: "0.85em" }}>{errors.profileImage.message}</small>
              )}

              {/* ✅ Show preview if image is selected */}
              {img && (
                <div style={{ marginTop: "10px" }}>
                  <img
                    src={URL.createObjectURL(img)}
                    alt="Preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "2px solid #6C63FF",
                      boxShadow: "0 5px 15px rgba(108, 99, 255, 0.2)",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.target.style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; }}
                  />
                </div>
              )}
            </div>


            {/* Checkbox - Terms */}
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "12px",
                opacity: 0,
                animation: "fadeInUp 0.8s ease-out 0.7s forwards",
              }}
            >
              <input 
                type="checkbox" 
                defaultChecked 
                style={{
                  width: '18px',
                  height: '18px',
                  accentColor: '#6C63FF',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
              />
              <span style={{ fontSize: "0.95em", color: "#718096" }}>
                Lorem Ipsum is simply dummy text of the printing and type.
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={buttonStyle}
              onMouseOver={handleSubmitHover}
              onMouseOut={handleSubmitOut}
            >
              Register
            </button>
          </form>

          {/* Social Login */}
          <p 
            style={{ 
              textAlign: "center", 
              margin: "30px 0 15px", 
              fontSize: "1em",
              color: "#718096",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.9s forwards",
            }}
          >
            Register in with
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginBottom: "30px",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 1s forwards",
            }}
          >
            <button
              style={socialButtonStyle}
              onMouseOver={handleSocialHover}
              onMouseOut={handleSocialOut}
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                style={{ width: "20px", height: "20px" }}
              />
              Google
            </button>

            <button
              style={socialButtonStyle}
              onMouseOver={handleSocialHover}
              onMouseOut={handleSocialOut}
            >
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                alt="Facebook"
                style={{ width: "20px", height: "20px" }}
              />
              Facebook
            </button>
          </div>

          {/* Login Link */}
          <p 
            style={{ 
              textAlign: "center", 
              fontSize: "0.95em", 
              color: "#718096",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 1.1s forwards",
            }}
          >
            Already have an account?{" "}
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
              Log in
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
        }`}</style>
    </div>
  );
}

export default Register;

       
