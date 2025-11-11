import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react'
import * as yup from "yup";
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import { PostData } from '@/typeScript/cms.interface';
import { PostDetails, UpdatePost } from '@/redux/cmsSLice/cmsSLice';
import { useRouter } from 'next/router';

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
function index() {
    const dispatch=useDispatch();
    const router=useRouter()
    const{id}=router.query
    const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!id) return;

    const fetchPostDetails = async () => {
      try {
        const response = await dispatch(PostDetails(id)).unwrap();
        if (response.status === true) {
          
          setValue("title", response.data.title);
          setValue("subtitle", response.data.subtitle);
          setValue("content", response.data.content);
        }
      } catch (error) {
        console.error("Post fetch error:", error);
      }
    };

    fetchPostDetails();
  }, [id, dispatch, setValue]);

  async function handleForm(data: PostData) {
    const args = {
      id: typeof id === "string" ? id : String(id),

      formData: {
        title: data.title,
        subtitle: data.subtitle,
        content: data.content,
      },
    };

    try {
      const response = await dispatch(UpdatePost(args)).unwrap();
      if (response.status === true) {
        reset();
      }
    } catch (error) {
      console.error("Post creation error:", error);
    }
  }
  return (
    <>
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
          Edit a Post
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
            {isSubmitting ? "Editing..." : "Edit Post"}
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default index