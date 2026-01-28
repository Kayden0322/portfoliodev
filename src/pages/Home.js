import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <section className="card hero">
        <div className="section">
          <h1 className="h1">Portfolio</h1>
          <p className="p" style={{ marginTop: 12, maxWidth: 740 }}>
            I’m Kayden — an IT student who builds clean, modern web/mobile UIs
            and loves turning ideas into polished experiences.
          </p>

          <div className="hero-meta">
            <span className="chip">React</span>
            <span className="chip">UI/UX</span>
            <span className="chip">Python</span>
            <span className="chip">Video + Graphics</span>
          </div>

          <div className="hero-actions">
            <Link className="btn btn-primary" to="/projects">
              View Projects →
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card section">
          <h2 className="h2">What I do</h2>
          <p className="p">
            I focus on building modern interfaces, responsive layouts, and
            smooth user flows. I also edit videos and create graphics for
            product-style presentations.
          </p>
        </div>

        <div className="card section">
          <h2 className="h2">Currently</h2>
          <p className="p">
            Working on school projects + improving my portfolio with stronger
            case studies and cleaner UI systems.
          </p>
        </div>
      </section>
    </div>
  );
}
