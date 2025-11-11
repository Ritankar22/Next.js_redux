// import React from 'react'
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from "react-redux";
// import { PostData } from '@/typeScript/cms.interface';
// import { createPost } from '@/redux/cmsSLice/cmsSLice';

// const schema = yup.object().shape({
//   title: yup
//     .string()
//     .min(2, "Title must be at least 6 characters")
//     .max(30, "Title cannot exceed 30 characters")
//     .required("Title is required"),

//   subtitle: yup
//     .string()
//     .min(2, "Subtitle must be at least 6 characters")
//     .max(50, "Subtitle cannot exceed 50 characters")
//     .required("Subtitle is required"),

//   content: yup
//     .string()
//     .min(2, "Content must be at least 6 characters")
//     .max(200, "Content cannot exceed 200 characters")
//     .required("Content is required"),
// });
// function index() {
//     const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm<PostData>({
//     resolver: yupResolver(schema),
//     defaultValues: { title: "", subtitle: "", content: "" },
//   });



//   async function handleForm(data: PostData) {
//     try {
//       const response = await dispatch(createPost(data)).unwrap();
//       if (response.status === true) {
//         reset();
//       }
//     } catch (error) {
//       console.error("Post creation error:", error);
//     }
//   }
//   return (
//     <>
//     <form onSubmit={handleSubmit(handleForm)}>
//         <input type="text" {...register("title")}
//         />
//         <input type="text" {...register("subtitle")}
//         />
//         <input type="text" {...register("content")}
//         />
//         <button type='submit'>Create</button>
//     </form>
//     </>
//   )
// }

// export default index

//.........................

import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { PostData } from "@/typeScript/cms.interface";
import { createPost } from "@/redux/cmsSLice/cmsSLice";

const schema = yup.object().shape({
  title: yup
    .string()
    .min(6, "Title must be at least 6 characters")
    .max(30, "Title cannot exceed 30 characters")
    .required("Title is required"),

  subtitle: yup
    .string()
    .min(6, "Subtitle must be at least 6 characters")
    .max(50, "Subtitle cannot exceed 50 characters")
    .required("Subtitle is required"),

  content: yup
    .string()
    .min(6, "Content must be at least 6 characters")
    .max(200, "Content cannot exceed 200 characters")
    .required("Content is required"),
});

function CreatePostForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostData>({
    resolver: yupResolver(schema),
    defaultValues: { title: "", subtitle: "", content: "" },
  });

  async function handleForm(data: PostData) {
    try {
      const response = await dispatch(createPost(data)).unwrap();
      if (response.status === true) {
        reset();
      }
    } catch (error) {
      console.error("Post creation error:", error);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Create a New Post
        </h2>

        <form onSubmit={handleSubmit(handleForm)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="Enter title"
              {...register("title")}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            {errors.title && (
              <span style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Subtitle */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="Enter subtitle"
              {...register("subtitle")}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            {errors.subtitle && (
              <span style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                {errors.subtitle.message}
              </span>
            )}
          </div>

          {/* Content */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <textarea
              placeholder="Write your content here..."
              rows={4}
              {...register("content")}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
                resize: "none",
              }}
            />
            {errors.content && (
              <span style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                {errors.content.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#1d4ed8")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
          >
            {isSubmitting ? "Creating..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePostForm;
