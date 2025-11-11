// import React from "react";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from "react-redux";
// import { UpdatePassword } from "@/redux/authSlice/authSlice";

// // Schema for validation
// const schema = yup.object().shape({
//     OldPassword: yup
//         .string()
//         .required("Password is required")
//         .min(4, "Minimum 4 characters required"),
//     Newpassword: yup
//         .string()
//         .required("Password is required")
//         .min(4, "Minimum 4 characters required"),
// });

// function Index() {
//     const dispatch = useDispatch();
//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit = async (data) => {
//         const formData = {
//             OldPassword: data.oldPassword,
//             NewPassword: data.newPassword,
//         }
//         dispatch(UpdatePassword(formData));
//         console.log("Submitted Data:", data);
//     };

//     return (
//         <div
//             style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 minHeight: "100vh",
//                 backgroundColor: "#f5f7f9",
//                 padding: "40px 0",
//             }}
//         >
//             <div
//                 style={{
//                     display: "flex",
//                     width: "950px",
//                     background: "white",
//                     borderRadius: "16px",
//                     boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
//                     overflow: "hidden",
//                 }}
//             >
//                 {/* Left Side - Image & Text */}
//                 <div
//                     style={{
//                         flex: 1,
//                         backgroundColor: "#e6f7f1",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         padding: "30px",
//                         textAlign: "center",
//                     }}
//                 >
//                     <img
//                         src="https://cdn-icons-png.flaticon.com/512/201/201818.png"
//                         alt="Login Illustration"
//                         style={{ maxWidth: "250px", marginBottom: "20px" }}
//                     />
//                     <h3 style={{ marginBottom: "10px", color: "#333" }}>
//                         Distance Learning Programs
//                     </h3>
//                     <p style={{ color: "#555", fontSize: "14px", maxWidth: "80%" }}>
//                         Attend live and recorded classes at your own convenience.
//                     </p>
//                 </div>

//                 {/* Right Side - Form */}
//                 <div style={{ flex: 1, padding: "50px 40px" }}>
//                     {/* Logo */}
//                     <h2 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "600" }}>
//                         UNIEDU
//                     </h2>
//                     <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
//                         Welcome to Uniedu
//                     </p>

//                     <form
//                         onSubmit={handleSubmit(onSubmit)}
//                         style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//                     >
//                         {/* Email */}
//                         <div style={{ display: "flex", flexDirection: "column" }}>
//                             <label style={{ marginBottom: "5px", fontSize: "14px" }}>
//                                 Username or email
//                             </label>
//                             <input
//                                 type="email"
//                                 {...register("email")}
//                                 style={{
//                                     padding: "10px",
//                                     border: errors.email ? "1px solid red" : "1px solid #ccc",
//                                     borderRadius: "5px",
//                                 }}
//                             />
//                             {errors.email && (
//                                 <small style={{ color: "red", marginTop: "5px" }}>
//                                     {errors.email.message}
//                                 </small>
//                             )}
//                         </div>

//                         {/* Password */}
//                         <div style={{ display: "flex", flexDirection: "column" }}>
//                             <label style={{ marginBottom: "5px", fontSize: "14px" }}>Password</label>
//                             <input
//                                 type="password"
//                                 {...register("password")}
//                                 style={{
//                                     padding: "10px",
//                                     border: errors.password ? "1px solid red" : "1px solid #ccc",
//                                     borderRadius: "5px",
//                                 }}
//                             />
//                             {errors.password && (
//                                 <small style={{ color: "red", marginTop: "5px" }}>
//                                     {errors.password.message}
//                                 </small>
//                             )}
//                             <a
//                                 href="#"
//                                 style={{
//                                     textAlign: "right",
//                                     fontSize: "12px",
//                                     marginTop: "5px",
//                                     color: "#1a8d73",
//                                     textDecoration: "none",
//                                 }}
//                             >
//                                 Forgot password?
//                             </a>
//                         </div>

//                         {/* Sign In button */}
//                         <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             style={{
//                                 padding: "12px",
//                                 backgroundColor: "#111827",
//                                 color: "white",
//                                 border: "none",
//                                 borderRadius: "30px",
//                                 cursor: "pointer",
//                                 fontSize: "16px",
//                                 fontWeight: "500",
//                             }}
//                         >
//                             Log In
//                         </button>
//                     </form>

//                     {/* Divider */}
//                     <div
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             margin: "20px 0",
//                             color: "#aaa",
//                             fontSize: "14px",
//                         }}
//                     >
//                         <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ddd" }} />
//                         <span style={{ margin: "0 10px" }}>or</span>
//                         <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ddd" }} />
//                     </div>

//                     {/* Google Login */}
//                     <button
//                         style={{
//                             padding: "10px",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             border: "1px solid #ccc",
//                             borderRadius: "30px",
//                             background: "white",
//                             cursor: "pointer",
//                             fontSize: "14px",
//                             fontWeight: "500",
//                             marginLeft: "120px"

//                         }}
//                     >
//                         <img
//                             src="https://www.svgrepo.com/show/355037/google.svg"
//                             alt="Google Logo"
//                             style={{ width: "20px", marginRight: "8px", }}
//                         />
//                         Sign in with Google
//                     </button>

//                     {/* Create account */}
//                     <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
//                         Are you new?{" "}
//                         <a href="#" style={{ color: "#1a8d73", textDecoration: "none" }}>
//                             Create an Account
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Index;

/////...............................New.................................//

import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { UpdatePassword } from "@/redux/authSlice/authSlice";

// Schema for validation
const schema = yup.object().shape({
    oldPassword: yup
        .string()
        .required("Old password is required")
        .min(4, "Minimum 4 characters required"),
    newPassword: yup
        .string()
        .required("New password is required")
        .min(4, "Minimum 4 characters required"),
});

function Index() {
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
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        };
        dispatch(UpdatePassword(formData));
        console.log("Submitted Data:", data);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
                padding: "40px 0",
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "850px",
                    background: "white",
                    borderRadius: "16px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    overflow: "hidden",
                }}
            >
                {/* Left Side - Illustration */}
                <div
                    style={{
                        flex: 1,
                        background: "linear-gradient(135deg, #00bfa5, #1de9b6)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "30px",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
                        alt="Update Password Illustration"
                        style={{ maxWidth: "220px", marginBottom: "20px" }}
                    />
                    <h3 style={{ marginBottom: "10px", fontWeight: "600" }}>
                        Update Your Password
                    </h3>
                    <p style={{ fontSize: "14px", maxWidth: "80%", lineHeight: "1.5" }}>
                        Keep your account secure by updating your password regularly.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div style={{ flex: 1.2, padding: "50px 40px" }}>
                    {/* Logo */}
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "10px",
                            fontWeight: "700",
                            color: "#00bfa5",
                        }}
                    >
                        UNIEDU
                    </h2>
                    <p
                        style={{
                            textAlign: "center",
                            color: "#666",
                            marginBottom: "30px",
                        }}
                    >
                        Change your password securely
                    </p>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                    >
                        {/* Old Password */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                                Old Password
                            </label>
                            <input
                                type="password"
                                {...register("oldPassword")}
                                placeholder="Enter your old password"
                                style={{
                                    padding: "12px",
                                    border: errors.oldPassword
                                        ? "1px solid red"
                                        : "1px solid #ccc",
                                    borderRadius: "8px",
                                }}
                            />
                            {errors.oldPassword && (
                                <small style={{ color: "red", marginTop: "5px" }}>
                                    {errors.oldPassword.message}
                                </small>
                            )}
                        </div>

                        {/* New Password */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label style={{ marginBottom: "5px", fontSize: "14px" }}>
                                New Password
                            </label>
                            <input
                                type="password"
                                {...register("newPassword")}
                                placeholder="Enter your new password"
                                style={{
                                    padding: "12px",
                                    border: errors.newPassword
                                        ? "1px solid red"
                                        : "1px solid #ccc",
                                    borderRadius: "8px",
                                }}
                            />
                            {errors.newPassword && (
                                <small style={{ color: "red", marginTop: "5px" }}>
                                    {errors.newPassword.message}
                                </small>
                            )}
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                padding: "14px",
                                background:
                                    "linear-gradient(135deg, #00bfa5, #1de9b6)",
                                color: "white",
                                border: "none",
                                borderRadius: "30px",
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: "600",
                                transition: "0.3s",
                            }}
                        //   onMouseOver={(e) =>
                        //     (e.target.style.background =
                        //       "linear-gradient(135deg, #009688, #00c853)")
                        //   }
                        //   onMouseOut={(e) =>
                        //     (e.target.style.background =
                        //       "linear-gradient(135deg, #00bfa5, #1de9b6)")
                        //   }
                        >
                            Update Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Index;
