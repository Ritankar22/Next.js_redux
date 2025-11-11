// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { useForm } from 'react-hook-form'
// import { Box, TextField, Button, Typography } from '@mui/material'

// // Validation schema
// const schema = yup.object().shape({
//   otp: yup
//     .string()
//     .required("OTP is required")
//     .matches(/^[0-9]+$/, "Only numbers are allowed")
//     .length(4, "OTP must be exactly 4 digits"),
// })

// function Otp() {
//   const dispatch = useDispatch()
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("otp", data.otp);
//     // dispatch(otp(formData))  // ✅ uncomment when redux action is ready
//     console.log("Submitted OTP:", data.otp)
//   };

//   return (
//     <Box 
//       component="form" 
//       onSubmit={handleSubmit(onSubmit)}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         maxWidth: 350,
//         mx: "auto",
//         mt: 5,
//         p: 3,
//         boxShadow: 3,
//         borderRadius: 2,
//         bgcolor: "background.paper"
//       }}
//     >
//       <Typography variant="h6" textAlign="center">
//         Enter OTP
//       </Typography>

//       <TextField
//         label="OTP"
//         variant="outlined"
//         type="text"
//         inputProps={{ maxLength: 4 }}
//         {...register("otp")}
//         error={!!errors.otp}
//         helperText={errors.otp?.message}
//       />

//       <Button 
//         type="submit" 
//         variant="contained" 
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "Verifying..." : "Verify OTP"}
//       </Button>
//     </Box>
//   )
// }

// export default Otp

//............................................................................................//
//......................................................................//

import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { otp } from "@/redux/authSlice/authSlice";

// ✅ Validation schema
const schema = yup.object().shape({
  otp: yup
    .string()
    .required("OTP is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .length(4, "OTP must be exactly 4 digits"),
});

function Otp() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    let formadata = {
      otp: data.otp
    }
    dispatch(otp(formadata))
    console.log("Submitted OTP:", data.otp);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          padding: "40px 30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontWeight: "600",
          }}
        >
          Enter OTP
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {/* OTP input field */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="Enter 4-digit OTP"
              maxLength={4}
              {...register("otp")}
              style={{
                padding: "12px",
                border: errors.otp ? "1px solid red" : "1px solid #ccc",
                borderRadius: "6px",
                textAlign: "center",
                fontSize: "18px",
                letterSpacing: "8px",
                fontWeight: "500",
              }}
            />
            {errors.otp && (
              <small style={{ color: "red", marginTop: "5px" }}>
                {errors.otp.message}
              </small>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "30px",
              background: "linear-gradient(to right, #4CAF50, #2F8F83)",
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        {/* Resend link */}
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "14px",
            color: "#555",
          }}
        >
          Didn’t receive the OTP?{" "}
          <a href="#" style={{ color: "#2F8F83", textDecoration: "none" }}>
            Resend OTP
          </a>
        </p>
      </div>
    </div>
  );
}

export default Otp;




