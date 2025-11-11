// import React from "react";

// export default function About() {
//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         backgroundColor: "#f8fafc",
//         minHeight: "100vh",
//         padding: "60px 20px",
//         color: "#2c3e50",
//       }}
//     >
//       {/* --- Hero Section --- */}
//       <section
//         style={{
//           textAlign: "center",
//           marginBottom: "60px",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "38px",
//             fontWeight: "700",
//             marginBottom: "15px",
//             background: "linear-gradient(90deg, #4b6cb7, #182848)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           About Us
//         </h1>
//         <p
//           style={{
//             maxWidth: "700px",
//             margin: "0 auto",
//             fontSize: "17px",
//             color: "#555",
//             lineHeight: "1.7",
//           }}
//         >
//           We are a passionate team dedicated to creating innovative, user-friendly
//           digital experiences. Our mission is to bring ideas to life through clean
//           design, cutting-edge technology, and meaningful collaboration.
//         </p>
//       </section>

//       {/* --- Content Section --- */}
//       <section
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           alignItems: "center",
//           justifyContent: "center",
//           maxWidth: "1100px",
//           margin: "0 auto",
//           gap: "40px",
//         }}
//       >
//         {/* --- Image --- */}
//         <div
//           style={{
//             flex: "1 1 400px",
//             textAlign: "center",
//           }}
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/8096/8096295.png"
//             alt="Team Collaboration"
//             style={{
//               width: "100%",
//               maxWidth: "400px",
//               borderRadius: "16px",
//               boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//             }}
//           />
//         </div>

//         {/* --- Text Content --- */}
//         <div
//           style={{
//             flex: "1 1 500px",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "28px",
//               marginBottom: "15px",
//               color: "#1e3a8a",
//             }}
//           >
//             Who We Are
//           </h2>
//           <p
//             style={{
//               fontSize: "16px",
//               color: "#555",
//               lineHeight: "1.8",
//               marginBottom: "20px",
//             }}
//           >
//             Founded with a vision to empower innovation, we specialize in building
//             scalable, user-centric applications. Our developers, designers, and
//             strategists work together to deliver digital products that make a
//             difference.
//           </p>

//           <h2
//             style={{
//               fontSize: "24px",
//               marginBottom: "12px",
//               color: "#1e3a8a",
//             }}
//           >
//             Our Vision
//           </h2>
//           <p
//             style={{
//               fontSize: "16px",
//               color: "#555",
//               lineHeight: "1.8",
//             }}
//           >
//             To be a trusted technology partner for businesses and creators across
//             the globe — turning complex challenges into beautiful, functional
//             solutions that drive impact.
//           </p>
//         </div>
//       </section>

//       {/* --- Values Section --- */}
//       <section
//         style={{
//           marginTop: "80px",
//           textAlign: "center",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             marginBottom: "25px",
//             color: "#182848",
//           }}
//         >
//           Our Core Values
//         </h2>

//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "center",
//             gap: "25px",
//             maxWidth: "1000px",
//             margin: "0 auto",
//           }}
//         >
//           {[
//             {
//               title: "Innovation",
//               desc: "We embrace creativity and constantly push the boundaries of technology.",
//             },
//             {
//               title: "Integrity",
//               desc: "We believe in honesty, transparency, and ethical practices in everything we do.",
//             },
//             {
//               title: "Collaboration",
//               desc: "Teamwork is at the heart of everything we build — together, we achieve more.",
//             },
//           ].map((value, i) => (
//             <div
//               key={i}
//               style={{
//                 background: "#fff",
//                 borderRadius: "12px",
//                 padding: "25px 30px",
//                 width: "300px",
//                 boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-5px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 10px 25px rgba(0,0,0,0.12)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 15px rgba(0,0,0,0.08)";
//               }}
//             >
//               <h3
//                 style={{
//                   fontSize: "20px",
//                   marginBottom: "10px",
//                   color: "#1e3a8a",
//                 }}
//               >
//                 {value.title}
//               </h3>
//               <p
//                 style={{
//                   color: "#555",
//                   fontSize: "15px",
//                   lineHeight: "1.6",
//                 }}
//               >
//                 {value.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }









import React from 'react';

export default function AboutPage() {
  const headerGradient = 'linear-gradient(135deg, #6C63FF 0%, #764ba2 100%)';
  const bodyGradient = 'linear-gradient(135deg, #f3e8ff 0%, #e8f5e8 100%)';
  const svgWave = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' fill='%23f3e8ff'/%3E%3C/svg%3E";

  const sectionStyle = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease',
    padding: '40px',
    marginBottom: '40px',
  };

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    padding: '30px',
    textAlign: 'center',
    flex: 1,
    minWidth: '250px',
  };

  const handleSectionHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
  };

  const handleSectionLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
  };

  const handleCardHover = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "scale(1.05) rotate(1deg)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(108, 99, 255, 0.2)";
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.06)";
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
              fontSize: "3.5em",
              fontWeight: "700",
              marginBottom: "15px",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            }}
          >
            About Us
          </h1>
          <p
            style={{
              fontSize: "1.4em",
              fontWeight: "300",
              maxWidth: "600px",
              margin: "0 auto",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            }}
          >
            We're passionate about crafting innovative digital experiences that bring ideas to life.
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
          {/* Hero Intro Section */}
          <section
            className="hero-section"
            style={{
              ...sectionStyle,
              textAlign: "center",
              background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
              marginBottom: "60px",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.6s forwards",
            }}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2
              style={{
                color: "#6C63FF",
                fontSize: "2.5em",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Our Journey Begins
            </h2>
            <p
              style={{
                fontSize: "1.2em",
                color: "#4a5568",
                lineHeight: 1.8,
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Founded in 2023, Your Next.js Project emerged from a shared vision to revolutionize web development. Starting as a small team of enthusiasts, we've grown into a dynamic force, specializing in Next.js and React to deliver seamless, performant applications. Our commitment to excellence has powered projects for startups, brands, and innovators worldwide.
            </p>
            <div
              style={{
                marginTop: "30px",
                padding: "20px",
                background: "rgba(108, 99, 255, 0.05)",
                borderRadius: "10px",
                borderLeft: "5px solid #6C63FF",
              }}
            >
              <em style={{ color: "#718096", fontSize: "1.1em" }}>
                "From code to creation – we turn visions into vibrant realities."
              </em>
            </div>
          </section>

          {/* Milestones Timeline */}
          <section
            className="timeline-section"
            style={{
              ...sectionStyle,
              position: "relative",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 0.8s forwards",
            }}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2
              style={{
                color: "#6C63FF",
                textAlign: "center",
                fontSize: "2.5em",
                fontWeight: "600",
                marginBottom: "40px",
              }}
            >
              Our Milestones
            </h2>
            <div
              style={{
                position: "relative",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "4px",
                  background: "linear-gradient(to bottom, #6C63FF, #764ba2)",
                  transform: "translateX(-50%)",
                }}
              />
              {[
                { year: "2023", title: "Foundation", desc: "Launched with our first Next.js project, focusing on modern web standards." },
                { year: "2024", title: "Growth", desc: "Expanded team and delivered 50+ client projects with innovative features." },
                { year: "2025", title: "Innovation", desc: "Pioneering AI-integrated apps and sustainable development practices." },
              ].map((milestone, index) => (
                <div
                  key={milestone.year}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "40px",
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${0.9 + index * 0.2}s forwards`,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      padding: "0 20px",
                      textAlign: index % 2 === 0 ? "right" : "left",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        background: index % 2 === 0 ? "white" : "transparent",
                        padding: "15px",
                        borderRadius: "10px",
                        boxShadow: index % 2 === 0 ? "0 5px 15px rgba(0,0,0,0.1)" : "none",
                      }}
                    >
                      <h3 style={{ color: "#6C63FF", marginBottom: "5px", fontSize: "1.3em" }}>
                        {milestone.year}
                      </h3>
                      <h4 style={{ color: "#4a5568", marginBottom: "8px", fontWeight: "500" }}>
                        {milestone.title}
                      </h4>
                      <p style={{ color: "#718096", margin: 0, fontSize: "1em" }}>
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      padding: "0 20px",
                      display: "flex",
                      justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        background: "#6C63FF",
                        borderRadius: "50%",
                        position: "relative",
                        zIndex: 1,
                        boxShadow: "0 0 0 4px white",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Grid */}
          <section
            className="team-section"
            style={{
              ...sectionStyle,
              textAlign: "center",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 1.2s forwards",
            }}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            <h2
              style={{
                color: "#6C63FF",
                fontSize: "2.5em",
                fontWeight: "600",
                marginBottom: "40px",
              }}
            >
              Meet the Team
            </h2>
            <p
              style={{
                fontSize: "1.2em",
                color: "#4a5568",
                marginBottom: "40px",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              A talented group of creators, thinkers, and builders dedicated to excellence.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              {[
                { name: "John Doe", role: "Lead Developer", icon: "👨‍💻" },
                { name: "Jane Smith", role: "UI/UX Designer", icon: "👩‍🎨" },
                { name: "Alex Johnson", role: "Project Manager", icon: "📈" },
                { name: "Sarah Lee", role: "Frontend Specialist", icon: "💻" },
              ].map((member, index) => (
                <div
                  key={member.name}
                  className="team-card"
                  style={cardStyle}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                  data-delay={index * 0.1}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      background: "#f7fafc",
                      borderRadius: "50%",
                      margin: "0 auto 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.5em",
                      color: "#6C63FF",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {member.icon}
                  </div>
                  <h3 style={{ color: "#4a5568", marginBottom: "8px", fontSize: "1.3em" }}>
                    {member.name}
                  </h3>
                  <p style={{ color: "#718096", fontSize: "1em", margin: 0 }}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section
            className="values-section"
            style={{
              ...sectionStyle,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              gap: "20px",
              opacity: 0,
              animation: "fadeInUp 0.8s ease-out 1.4s forwards",
            }}
            onMouseEnter={handleSectionHover}
            onMouseLeave={handleSectionLeave}
          >
            {[
              { icon: "🎯", title: "Innovation", desc: "Pushing boundaries with cutting-edge tech." },
              { icon: "🤝", title: "Integrity", desc: "Building trust through honest practices." },
              { icon: "⭐", title: "Excellence", desc: "Delivering top-tier quality every time." },
            ].map((value, index) => (
              <div
                key={value.title}
                className="value-card"
                style={{
                  ...cardStyle,
                  flex: "1 1 200px",
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out ${1.5 + index * 0.1}s forwards`,
                }}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div
                  style={{
                    fontSize: "3em",
                    marginBottom: "15px",
                    color: "#6C63FF",
                  }}
                >
                  {value.icon}
                </div>
                <h3 style={{ color: "#4a5568", marginBottom: "10px" }}>{value.title}</h3>
                <p style={{ color: "#718096", fontSize: "0.95em", margin: 0 }}>{value.desc}</p>
              </div>
            ))}
          </section>
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
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .team-card:hover div,
        .value-card:hover div {
          transform: scale(1.1) !important;
        }

        @media (max-width: 768px) {
          .main {
            padding: 0 15px !important;
          }
          .header > div {
            padding: 60px 15px 120px !important;
          }
          h1 {
            font-size: 2.5em !important;
          }
          .header p {
            font-size: 1.2em !important;
          }
          [style*="padding: 40px"] {
            padding: 30px !important;
          }
          h2 {
            font-size: 2em !important;
          }
          .values-section {
            flex-direction: column !important;
            align-items: center !important;
          }
          .timeline-section > div > div {
            flex-direction: column !important;
            text-align: center !important;
            padding: 10px !important;
          }
          .timeline-section > div > div:nth-child(1) {
            order: 2 !important;
          }
          .timeline-section > div > div:nth-child(2) {
            order: 1 !important;
            margin-bottom: 20px !important;
          }
        }

        @media (max-width: 480px) {
          .header > div {
            padding: 40px 10px 140px !important;
          }
          h1 {
            font-size: 2em !important;
          }
          [style*="padding: 40px"], [style*="padding: 30px"] {
            padding: 25px !important;
          }
          .team-section > div, .values-section > div {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .timeline-section > div {
            padding: 0 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
