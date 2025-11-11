import React from "react";

export default function NewsletterSection() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 80px",
        background: "linear-gradient(90deg, #d1c9db 0%, #ffffff 100%)",
        flexWrap: "wrap",
        gap: "38rem",
      }}
    >
      {/* Left side: Heading */}
      <div style={{ flex: "1", minWidth: "250px" }}>
        <h2
          style={{
            fontSize: "32px",
            margin: 0,
            color: "#000",
            lineHeight: "1.3",
            width:"150%"
          }}
        >
          Join Our Newsletter For <br />
          Latest Updates
        </h2>
      </div>

      {/* Right side: Text + Input */}
      <div style={{ flex: "2", minWidth: "300px" }}>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "20px",
            color: "#000",
            lineHeight: "1.5",
            maxWidth:"750%",
          }}
        >
          Be part of a thriving community where ideas meet talent. Whether
          you’re a client searching for skilled professionals or a freelancer
          looking for exciting projects, we’ll keep you updated.
        </p>
        <div style={{ display: "flex", gap: "10px", maxWidth: "500px" }}>
          <input
            type="email"
            placeholder="Email Address"
            style={{
              flex: 1,
              padding: "12px 16px",
              border: "1px solid #999",
              borderRadius: "4px",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <button
            style={{
              backgroundColor: "#0D0B4C",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}