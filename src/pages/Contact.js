import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus(
      "For Vercel: wire this up with Formspree / EmailJS / a serverless function."
    );
  }

  return (
    <div className="container">
      <section className="grid grid-2">
        <div className="card section">
          <h2 className="h2">Contact Me</h2>
          <p className="p">
            Want to collaborate or see more work? Send a message.
          </p>

          <div
            style={{
              marginTop: 14,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <a className="btn btn-primary" href="mailto:your.email@example.com">
              Email Me
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <form className="card section" onSubmit={handleSubmit}>
          <h2 className="h2">Send a message</h2>

          <div className="field">
            <div className="label">Name</div>
            <input className="input" placeholder="Your name" required />
          </div>

          <div className="field">
            <div className="label">Email</div>
            <input
              className="input"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="field">
            <div className="label">Message</div>
            <textarea
              className="textarea"
              placeholder="Write your message..."
              required
            />
          </div>

          <div
            style={{
              marginTop: 14,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn-primary" type="submit">
              Send
            </button>
            <button className="btn btn-ghost" type="reset">
              Reset
            </button>
          </div>

          {status && (
            <p className="p" style={{ marginTop: 12 }}>
              {status}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
