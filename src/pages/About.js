import React from "react";

export default function About() {
  return (
    <div className="container">
      <section className="card section">
        <h2 className="h2">About Me</h2>
        <p className="p" style={{ maxWidth: 820 }}>
          I’m Kayden Seah, a second-year IT student at Republic Polytechnic. I
          enjoy designing and building apps with a clean, modern
          aesthetic—rounded cards, soft shadows, and strong contrast. I’m
          comfortable with Python and frontend development, and I also create
          graphics and edit videos for polished deliverables.
        </p>
      </section>

      <section className="grid grid-3" style={{ marginTop: 16 }}>
        <div className="card section">
          <h2 className="h2">Skills</h2>
          <div className="tags">
            <span className="chip">React</span>
            <span className="chip">HTML/CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Python</span>
          </div>
        </div>

        <div className="card section">
          <h2 className="h2">Tools</h2>
          <div className="tags">
            <span className="chip">Figma</span>
            <span className="chip">VS Code</span>
            <span className="chip">GitHub</span>
            <span className="chip">Vercel</span>
          </div>
        </div>

        <div className="card section">
          <h2 className="h2">Extras</h2>
          <div className="tags">
            <span className="chip">Video Editing</span>
            <span className="chip">Motion</span>
            <span className="chip">Graphics</span>
          </div>
        </div>
      </section>
    </div>
  );
}
