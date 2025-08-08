import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  InputLabel,
  FormHelperText,
} from "@mui/material";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(4, "Minimum 4 characters required").required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  address: yup.string().min(2, "Address must be at least 2 characters").required("Address is required"),
  profileImage: yup
    .mixed().required(),
});

function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 400,
        mx: "auto",
        mt: 5,
        p: 4,
        border: "1px solid #ccc",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" align="center">
        Register
      </Typography>

      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
        fullWidth
      />

      <TextField
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        fullWidth
      />

      <TextField
        label="Confirm Password"
        type="password"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        fullWidth
      />

      <TextField
        label="Address"
        {...register("address")}
        error={!!errors.address}
        helperText={errors.address?.message}
        fullWidth
      />

      <Box>
        <InputLabel>Profile Image</InputLabel>
        <input
          type="file"
          {...register("profileImage")}
          accept="image/*"
        />
        {errors.profileImage && (
          <FormHelperText error>{errors.profileImage.message}</FormHelperText>
        )}
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Register;