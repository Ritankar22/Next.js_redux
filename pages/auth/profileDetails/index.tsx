// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { ProfileDetails } from "@/redux/authSlice/authSlice";

// function Profile() {
//     const dispatch = useDispatch()
//     const { profileDetailsData } = useSelector((state) => state.Auth)

//     useEffect(() => {
//         const handleData = async () => {
//             try {
                


//                 await new Promise((resolve) => setTimeout(resolve, 1500));

//                 const response = await dispatch(ProfileDetails()).unwrap();

//                 console.log(response);

//                 if (response.status === true) {
                    
//                 } else {

                    
//                 }
//             } catch (error) {
//                 console.error("Profile fetch error:", error);

//             }
//         };

//         handleData();

//     }, [])
//     console.log(profileDetailsData, "profile");
//     return (
//         <>
//         <div>
//             <h1>{profileDetailsData.name}</h1>
//             <h1>{profileDetailsData.email}</h1>
//             <h1>{profileDetailsData._id}</h1>
//         </div>
//         </>
//     )
// }

// export default Profile

//..................................................//

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileDetails } from "@/redux/authSlice/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const { profileDetailsData } = useSelector((state) => state.Auth);

  useEffect(() => {
    const handleData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const response = await dispatch(ProfileDetails()).unwrap();
        console.log(response);
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };
    handleData();
  }, []);

  console.log(profileDetailsData, "profile");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f0f4f8, #d9e4ec)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "40px 50px",
            borderRadius: "16px",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "380px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              margin: "0 auto 20px",
              background: "linear-gradient(135deg, #4b6cb7, #182848)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "36px",
              fontWeight: "600",
            }}
          >
            {profileDetailsData?.name
              ? profileDetailsData.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <h2
            style={{
              margin: "10px 0 6px",
              color: "#2c3e50",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            {profileDetailsData?.name || "User Name"}
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "15px",
              marginBottom: "12px",
              letterSpacing: "0.3px",
            }}
          >
            {profileDetailsData?.email || "user@email.com"}
          </p>

          <div
            style={{
              marginTop: "15px",
              padding: "10px 15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              fontSize: "14px",
              color: "#666",
              border: "1px solid #e2e6ea",
              wordBreak: "break-all",
            }}
          >
            ID: {profileDetailsData?._id || "N/A"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
