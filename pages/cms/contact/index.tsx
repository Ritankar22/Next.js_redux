// export default function ContactPage() {
//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           borderRadius: "20px",
//           boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//           padding: "40px",
//           maxWidth: "500px",
//           width: "100%",
//         }}
//       >
//         <h1
//           style={{
//             textAlign: "center",
//             color: "#6C63FF",
//             marginBottom: "10px",
//           }}
//         >
//           Contact Us
//         </h1>
//         <p
//           style={{
//             textAlign: "center",
//             color: "#555",
//             marginBottom: "30px",
//             fontSize: "14px",
//           }}
//         >
//           We'd love to hear from you! Fill out the form below and we'll get back
//           to you soon 💌
//         </p>

//         <form
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "15px",
//           }}
//         >
//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             style={{
//               padding: "12px 15px",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               fontSize: "15px",
//               outline: "none",
//               transition: "0.3s",
//             }}
//             onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
//             onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             style={{
//               padding: "12px 15px",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               fontSize: "15px",
//               outline: "none",
//               transition: "0.3s",
//             }}
//             onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
//             onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//           />
//           <textarea
//             placeholder="Your Message"
//             rows="5"
//             required
//             style={{
//               padding: "12px 15px",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               fontSize: "15px",
//               resize: "none",
//               outline: "none",
//               transition: "0.3s",
//             }}
//             onFocus={(e) => (e.target.style.borderColor = "#6C63FF")}
//             onBlur={(e) => (e.target.style.borderColor = "#ccc")}
//           ></textarea>

//           <button
//             type="submit"
//             style={{
//               background: "#6C63FF",
//               color: "white",
//               border: "none",
//               borderRadius: "10px",
//               padding: "12px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//             onMouseOver={(e) =>
//               (e.target.style.background = "linear-gradient(135deg, #667eea, #764ba2)")
//             }
//             onMouseOut={(e) => (e.target.style.background = "#6C63FF")}
//           >
//             Send Message
//           </button>
//         </form>

//         <div
//           style={{
//             marginTop: "25px",
//             textAlign: "center",
//             color: "#666",
//             fontSize: "13px",
//           }}
//         >
//           <p>📍 123 Creative Street, Design City</p>
//           <p>📧 hello@yourwebsite.com</p>
//           <p>📞 +91 7044521248</p>
//         </div>
//       </div>
//     </div>
//   );
// }


//......................//


import React from 'react';

export default function ContactPage() {
  const headerGradient = 'linear-gradient(135deg, #6C63FF 0%, #764ba2 100%)';
  const bodyGradient = 'linear-gradient(135deg, #f3e8ff 0%, #e8f5e8 100%)';
  const svgWave = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' fill='%23f3e8ff'/%3E%3C/svg%3E";

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    padding: '40px',
    flex: 1,
    minWidth: '300px',
  };

  const inputStyle = {
    padding: '15px',
    marginBottom: '25px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1em',
    fontFamily: 'inherit',
    background: '#f7fafc',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
    outline: 'none',
  };

  const focusStyle = {
    borderColor: '#6C63FF',
    boxShadow: '0 0 0 3px rgba(108, 99, 255, 0.1)',
    background: 'white',
  };

  const buttonStyle = {
    background: headerGradient,
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1em',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    alignSelf: 'flex-start',
  };

  const buttonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(108, 99, 255, 0.3)',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.12)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    Object.assign(e.target.style, focusStyle);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#e2e8f0";
    e.target.style.boxShadow = "none";
    e.target.style.background = "#f7fafc";
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    Object.assign(e.target.style, buttonHoverStyle);
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.target.style.transform = "none";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: bodyGradient,
        minHeight: "100vh",
        lineHeight: 1.6,
        color: "#2d3748",
        overflowX: "hidden",
      }}
    >
      {/* Header with SVG Wave */}
      <header className="header">
        <div
          style={{
            position: "relative",
            background: headerGradient,
            color: "white",
            textAlign: "center",
            padding: "80px 20px 100px",
            overflow: "hidden",
          }}
        >
          <h1
            style={{
              fontSize: "3em",
              fontWeight: "700",
              marginBottom: "10px",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "1.3em",
              fontWeight: "300",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
          >
            We're here to help! Get in touch with us today.
          </p>
          <div
            style={{
              position: "absolute",
              bottom: "-1px",
              left: 0,
              width: "100%",
              height: "100px",
              backgroundImage: `url(${svgWave})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              zIndex: 1,
            }}
          />
        </div>
      </header>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <main className="main">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              margin: "60px 0",
              gap: "40px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Contact Info Section */}
            <section
              className="card contact-section"
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h2
                style={{
                  color: "#6C63FF",
                  marginBottom: "30px",
                  fontSize: "2em",
                  fontWeight: "600",
                  opacity: 0,
                  animation: "fadeInUp 0.8s ease-out 0.6s forwards",
                }}
              >
                Get in Touch
              </h2>
              <div className="contact-item"
                style={{
                  marginBottom: "25px",
                  paddingLeft: "20px",
                  borderLeft: "3px solid #e2e8f0",
                  transition: "border-color 0.3s ease",
                }}
              >
                <h3
                  style={{
                    color: "#4a5568",
                    marginBottom: "8px",
                    fontSize: "1.1em",
                    fontWeight: "500",
                  }}
                >
                  Address
                </h3>
                <p
                  style={{
                    fontSize: "1em",
                    color: "#718096",
                    lineHeight: 1.5,
                  }}
                >
                  123 Your Street<br />
                  City, State 12345<br />
                  United States
                </p>
              </div>
              <div className="contact-item"
                style={{
                  marginBottom: "25px",
                  paddingLeft: "20px",
                  borderLeft: "3px solid #e2e8f0",
                  transition: "border-color 0.3s ease",
                }}
              >
                <h3
                  style={{
                    color: "#4a5568",
                    marginBottom: "8px",
                    fontSize: "1.1em",
                    fontWeight: "500",
                  }}
                >
                  Phone
                </h3>
                <p
                  style={{
                    fontSize: "1em",
                    color: "#718096",
                    lineHeight: 1.5,
                  }}
                >
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="contact-item"
                style={{
                  marginBottom: "25px",
                  paddingLeft: "20px",
                  borderLeft: "3px solid #e2e8f0",
                  transition: "border-color 0.3s ease",
                }}
              >
                <h3
                  style={{
                    color: "#4a5568",
                    marginBottom: "8px",
                    fontSize: "1.1em",
                    fontWeight: "500",
                  }}
                >
                  Email
                </h3>
                <p
                  style={{
                    fontSize: "1em",
                    color: "#718096",
                    lineHeight: 1.5,
                  }}
                >
                  hello@yourproject.com
                </p>
              </div>
              <div className="contact-item"
                style={{
                  paddingLeft: "20px",
                  borderLeft: "3px solid #e2e8f0",
                  transition: "border-color 0.3s ease",
                }}
              >
                <h3
                  style={{
                    color: "#4a5568",
                    marginBottom: "8px",
                    fontSize: "1.1em",
                    fontWeight: "500",
                  }}
                >
                  Business Hours
                </h3>
                <p
                  style={{
                    fontSize: "1em",
                    color: "#718096",
                    lineHeight: 1.5,
                  }}
                >
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </section>

            {/* Contact Form Section */}
            <section
              className="card form-section"
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h2
                style={{
                  color: "#6C63FF",
                  marginBottom: "30px",
                  fontSize: "2em",
                  fontWeight: "600",
                  opacity: 0,
                  animation: "fadeInUp 0.8s ease-out 0.8s forwards",
                }}
              >
                Send Us a Message
              </h2>
              <form
                action="/api/contact"
                method="POST"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#4a5568",
                    fontSize: "0.95em",
                  }}
                  htmlFor="name"
                >
                  Full Name:
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <label
                  style={{
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#4a5568",
                    fontSize: "0.95em",
                  }}
                  htmlFor="email"
                >
                  Email Address:
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <label
                  style={{
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#4a5568",
                    fontSize: "0.95em",
                  }}
                  htmlFor="subject"
                >
                  Subject:
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <label
                  style={{
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#4a5568",
                    fontSize: "0.95em",
                  }}
                  htmlFor="message"
                >
                  Message:
                </label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "140px",
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                ></textarea>

                <button
                  className="submit-btn"
                  type="submit"
                  style={buttonStyle}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#2d3748",
          color: "#a0aec0",
          textAlign: "center",
          padding: "30px 20px",
          marginTop: "80px",
          fontSize: "0.9em",
        }}
      >
        <p>&copy; 2023 Your Next.js Project. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-section:hover .contact-item {
          border-left-color: #6C63FF !important;
        }

        @media (max-width: 768px) {
          .main > div {
            flex-direction: column !important;
            gap: 30px !important;
            margin: 40px 0 !important;
          }
          .header > div {
            padding: 60px 15px 120px !important;
          }
          h1 {
            font-size: 2.2em !important;
          }
          .header p {
            font-size: 1.1em !important;
          }
          .card {
            padding: 30px !important;
          }
          h2 {
            font-size: 1.6em !important;
          }
          .form-input {
            padding: 12px !important;
          }
          .submit-btn {
            width: 100% !important;
            padding: 12px 25px !important;
          }
        }

        @media (max-width: 480px) {
          .header > div {
            padding: 40px 10px 140px !important;
          }
          h1 {
            font-size: 1.8em !important;
          }
          .card {
            padding: 25px !important;
          }
          .contact-item {
            padding-left: 15px !important;
          }
        }
      `}</style>
    </div>
  );
}
