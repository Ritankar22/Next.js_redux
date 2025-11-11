// import { PostList } from '@/redux/cmsSLice/cmsSLice';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';

// function index() {
//     const [loading, setLoading]=useState()
//     const dispatch = useDispatch();
//   const router = useRouter();

//   const { allPost } = useSelector((state) => state.Cms);

//   useEffect(() => {
//     const handleData = async () => {
//       try {
//         // setIsDeleted(false)
//         setLoading(true);

//         await new Promise((resolve) => setTimeout(resolve, 1500));

//         const response = await dispatch(PostList()).unwrap();

//         console.log(response);

//         if (response.status === true) {
//           setLoading(false);
//           //   setAllPosts(response.data);
//           console.log(response, "response");
//         } else {
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Profile fetch error:", error);
//       }
//     };

//     handleData();
//   }, []);
//   console.log(allPost);
//   return (
//     <>
//     </>
//   )
// }

// export default index

//...........................................................


import { DeletePost, PostList } from '@/redux/cmsSLice/cmsSLice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Index() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { allPost } = useSelector((state) => state.Cms);

  useEffect(() => {
    const handleData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const response = await dispatch(PostList()).unwrap();

        if (response.status === true) {
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };

    handleData();
  }, [dispatch]);
  const handleDelete = async (id: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await dispatch(DeletePost(id)).then(() =>
        dispatch(PostList())
      );

      console.log(response);

      if (response.status === true) {
        //  setIsDeleted(true)

        console.log(response, "response");
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Profile fetch error:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Post List</h1>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>
      ) : (
        <div style={{ display: "grid", gap: "20px" }}>
          {allPost && allPost.length > 0 ? (
            allPost.map((post, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <h2 style={{ margin: "0 0 10px", color: "#333" }}>
                  {post.title}
                </h2>
                <h4 style={{ margin: "0 0 10px", color: "#666" }}>
                  {post.subtitle}
                </h4>
                <p style={{ margin: "0", color: "#444", lineHeight: "1.6" }}>
                  {post.content}
                </p>
                <Link href={`/cms/editPost/${post._id}`}>Edit</Link>
                <button onClick={()=>handleDelete(post._id)}>DELETE</button>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#777" }}>
              No posts available.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Index;


