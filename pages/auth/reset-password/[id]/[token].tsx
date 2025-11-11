// import { resetPassword } from '@/redux/authSlice/authSlice';
// import { resetPasswordData } from '@/typeScript/auth.interface';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useRouter } from 'next/router';
// import React from 'react'
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import { useDispatch } from 'react-redux';
// import * as yup from "yup";


// const schema = yup.object().shape({
//   password: yup
//     .string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters"),
//   confirm_password: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords must match")
//     .required("Please confirm your password"),
// });
// function Index() {
//     const router = useRouter();
//   const { id, token } = router.query;
//   const dispatch = useDispatch();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<resetPasswordData>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data: resetPasswordData) => {
//     const args = {
//       id: typeof id === "string" ? id : String(id),
//       token: typeof token === "string" ? token : String(token),
//       payload: {
//         password: data.password,
//         confirm_password: data.confirm_password,
//       },
//     };

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       const response = await dispatch(resetPassword(args)).unwrap();

//       console.log(response);

//       if (response.status === true) {
//         toast.success(response.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };
//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="text" {...register("password")}
//         />
//         <input type="text" {...register("confirm_password")}
//         />
       
        
//         <button type='submit'>Reset</button>
//     </form>
//     </>
//   )
// }

// export default Index

//............................................................

import { resetPassword } from '@/redux/authSlice/authSlice';
import { resetPasswordData } from '@/typeScript/auth.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import * as yup from "yup";


const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

function Index() {
  const router = useRouter();
  const { id, token } = router.query;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<resetPasswordData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: resetPasswordData) => {
    const args = {
      id: typeof id === "string" ? id : String(id),
      token: typeof token === "string" ? token : String(token),
      payload: {
        password: data.password,
        confirm_password: data.confirm_password,
      },
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = await dispatch(resetPassword(args)).unwrap();
      console.log(response);

      if (response.status === true) {
        toast.success(response.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

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
            Reset Password
          </h2>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              New Password
            </label>
            <input
              type="password"
              {...register("password")}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px"
              }}
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {errors.password.message}
              </p>
            )}
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirm_password")}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px"
              }}
            />
            {errors.confirm_password && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {errors.confirm_password.message}
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
            {isSubmitting ? "Processing..." : "Reset Password"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Index;
