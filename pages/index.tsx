

// import NewsletterSection from "@/components/newsLetter/newsLetter";

// // pages/index.js
// export default function Home() {
//   return (
//     <div style={{ margin: 0, fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      
//       {/* Hero Section */}
//       <section
//         id="home"
//         style={{
//           background: "url('https://as2.ftcdn.net/jpg/05/90/84/85/1000_F_590848595_RSmUDckpXHZkPpF98fLxvAkaNYKF2vw0.jpg') center/cover no-repeat",
//           color: "white",
//           textAlign: "center",
//           padding: "200px 20px", // increased height from 120px to 200px
//         }}
//       >
//         <div style={{ maxWidth: "900px", margin: "0 auto" }}>
//           <h1
//             style={{
//               fontSize: "52px",
//               marginBottom: "25px",
//               fontWeight: "bold",
//             }}
//           >
//             Perfect IT Solutions for Your Business
//           </h1>
//           <p style={{ fontSize: "22px", marginBottom: "35px" }}>
//             We help you access experts and the latest technology to grow faster.
//           </p>
//           <a
//             href="#services"
//             style={{
//               background: "#ff6600",
//               color: "white",
//               padding: "16px 32px",
//               textDecoration: "none",
//               borderRadius: "6px",
//               fontWeight: "bold",
//               fontSize: "18px",
//               display: "inline-block",
//             }}
//           >
//             Get Started
//           </a>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section
//         id="services"
//         style={{
//           padding: "80px 20px",
//           textAlign: "center",
//           background: "#f9f9f9",
//         }}
//       >
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//           <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>Our Services</h2>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               flexWrap: "wrap",
//               gap: "30px",
//             }}
//           >
//             {[
//               {
//                 title: "IT Consulting",
//                 desc: "Expert advice to streamline your business processes with technology.",
//               },
//               {
//                 title: "Cloud Solutions",
//                 desc: "Secure and scalable cloud services to power your business growth.",
//               },
//               {
//                 title: "Cybersecurity",
//                 desc: "Protect your digital assets with modern security solutions.",
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: "white",
//                   padding: "40px 25px",
//                   borderRadius: "10px",
//                   boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//                   width: "300px",
//                   transition: "transform 0.3s ease",
//                 }}
//               >
//                 <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>
//                   {service.title}
//                 </h3>
//                 <p style={{ fontSize: "16px", color: "#555" }}>{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         style={{
//           padding: "80px 20px",
//           display: "flex",
//           flexWrap: "wrap",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "50px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         <div style={{ flex: "1", minWidth: "300px" }}>
//           <img
//             src="https://picsum.photos/500/400?business"
//             alt="About Us"
//             style={{ width: "100%", borderRadius: "10px" }}
//           />
//         </div>
//         <div style={{ flex: "1", minWidth: "300px" }}>
//           <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Us</h2>
//           <p style={{ marginBottom: "20px", fontSize: "17px", color: "#333" }}>
//             We are a team of passionate IT professionals dedicated to providing
//             tailored solutions that drive business success. From consultation to
//             execution, we partner with you at every stage.
//           </p>
//           <a
//             href="#contact"
//             style={{
//               background: "#0b2e59",
//               color: "white",
//               padding: "14px 28px",
//               textDecoration: "none",
//               borderRadius: "6px",
//               fontWeight: "bold",
//               fontSize: "16px",
//               display: "inline-block",
//             }}
//           >
//             Learn More
//           </a>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         style={{
//           background: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22%230b2e59%22 opacity=%220.2%22/></svg>') repeat",
//           backgroundColor: "#f4f9ff", // fallback color
//           color: "#0b2e59",
//           textAlign: "center",
//           padding: "80px 20px",
//         }}
//       >
//         <div style={{ maxWidth: "600px", margin: "0 auto" }}>
//           <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Get in Touch</h2>
//           <p style={{ marginBottom: "40px", fontSize: "17px" }}>
//             Ready to take your business to the next level? Contact us today!
//           </p>
//           <form style={{ textAlign: "left" }}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               style={{
//                 width: "100%",
//                 padding: "14px",
//                 marginBottom: "15px",
//                 border: "1px solid #ccc",
//                 borderRadius: "6px",
//                 fontSize: "15px",
//               }}
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               style={{
//                 width: "100%",
//                 padding: "14px",
//                 marginBottom: "15px",
//                 border: "1px solid #ccc",
//                 borderRadius: "6px",
//                 fontSize: "15px",
//               }}
//             />
//             <textarea
//               placeholder="Your Message"
//               style={{
//                 width: "100%",
//                 padding: "14px",
//                 marginBottom: "15px",
//                 border: "1px solid #ccc",
//                 borderRadius: "6px",
//                 height: "130px",
//                 fontSize: "15px",
//               }}
//             ></textarea>
//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 background: "#ff6600",
//                 color: "white",
//                 padding: "14px",
//                 border: "none",
//                 borderRadius: "6px",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 cursor: "pointer",
//               }}
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       <NewsletterSection />
//     </div>
//   );
// }

//...........................//
import NewsletterSection from "@/components/newsLetter/newsLetter";

// pages/index.js
export default function Home() {
  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          background: "url('https://as2.ftcdn.net/jpg/05/90/84/85/1000_F_590848595_RSmUDckpXHZkPpF98fLxvAkaNYKF2vw0.jpg') center/cover no-repeat",
          color: "white",
          textAlign: "center",
          padding: "200px 20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "52px",
              marginBottom: "25px",
              fontWeight: "bold",
            }}
          >
            Perfect IT Solutions for Your Business
          </h1>
          <p style={{ fontSize: "22px", marginBottom: "35px" }}>
            We help you access experts and the latest technology to grow faster.
          </p>
          <a
            href="/auth/login"
            style={{
              background: "#ff6600",
              color: "white",
              padding: "16px 32px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "18px",
              display: "inline-block",
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#f9f9f9",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>Our Services</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "30px",
            }}
          >
            {[
              {
                title: "IT Consulting",
                desc: "Expert advice to streamline your business processes with technology.",
              },
              {
                title: "Cloud Solutions",
                desc: "Secure and scalable cloud services to power your business growth.",
              },
              {
                title: "Cybersecurity",
                desc: "Protect your digital assets with modern security solutions.",
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "40px 25px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  width: "300px",
                  transition: "transform 0.3s ease",
                }}
              >
                <h3 style={{ marginBottom: "15px", fontSize: "22px" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "16px", color: "#555" }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: "80px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src="https://picsum.photos/500/400?business"
            alt="About Us"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>About Us</h2>
          <p style={{ marginBottom: "20px", fontSize: "17px", color: "#333" }}>
            We are a team of passionate IT professionals dedicated to providing
            tailored solutions that drive business success. From consultation to
            execution, we partner with you at every stage.
          </p>
          <a
            href="#contact"
            style={{
              background: "#0b2e59",
              color: "white",
              padding: "14px 28px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "16px",
              display: "inline-block",
            }}
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          background: "linear-gradient(135deg, #0b2e59 0%, #1a4b8c 100%)",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Get in Touch</h2>
          <p style={{ marginBottom: "40px", fontSize: "17px" }}>
            Ready to take your business to the next level? Contact us today!
          </p>
          <form style={{ textAlign: "left" }}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "15px",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "15px",
              }}
            />
            <textarea
              placeholder="Your Message"
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                height: "130px",
                fontSize: "15px",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                width: "100%",
                background: "#ff6600",
                color: "white",
                padding: "14px",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}



