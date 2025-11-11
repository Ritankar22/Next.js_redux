
// import { forgotPassword } from '@/redux/authSlice/authSlice';
// import { forgotPasswordData } from '@/typeScript/auth.interface';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useRouter } from 'next/router';
// import React from 'react'
// import { Cookies } from 'react-cookie';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import * as yup from "yup";

// const schema = yup.object().shape({
//   email: yup.string()
//   .email("Invalid email")
//   .required("Email is required"),
// });

// function index() {
//     const dispatch = useDispatch()
//   const router = useRouter()
//   const cookie = new Cookies()
//   const userId = cookie.get("userId");
//   const userToken = cookie.get("token")
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<forgotPasswordData>({
//     resolver: yupResolver(schema),
//   });

//   async function onSubmit(data: forgotPasswordData) {
//    const payloadData = {
//     email: data.email
//    }


//   try {
     
//       await new Promise((resolve) => setTimeout(resolve, 1500));
  
      
//       const response = await dispatch(forgotPassword(payloadData)).unwrap();
  
//      console.log(response);
     
  
//       if (response.status === true) {
//         router.push(`/auth/reset-password/${userId}/${userToken}`);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
     
//     }
// }
//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="text" {...register("email")}
//         />
//         <button type='submit'>send</button>
//     </form>
//     </>
//   )
// }

// export default index

//..............................................

import { forgotPassword } from '@/redux/authSlice/authSlice';
import { forgotPasswordData } from '@/typeScript/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react'
import { Cookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string()
    .email("Invalid email")
    .required("Email is required"),
});

function index() {
  const dispatch = useDispatch()
  const router = useRouter()
  const cookie = new Cookies()
  const userId = cookie.get("userId");
  const userToken = cookie.get("token")

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<forgotPasswordData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: forgotPasswordData) {
    const payloadData = {
      email: data.email
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await dispatch(forgotPassword(payloadData)).unwrap();
      console.log(response);

      if (response.status === true) {
        router.push(`/auth/reset-password/${userId}/${userToken}`);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f6f9"
      }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "400px"
          }}
        >
          <h2 style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333"
          }}>
            Forgot Password
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Email Address
            </label>
            <input
              type="email"
              {...register("email")}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px"
              }}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "12px",
              background: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </>
  )
}

export default index;
