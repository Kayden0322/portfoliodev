import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      © {year} Kayden Seah ·{" "}
      <a
        className="small-link"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      ·{" "}
      <a
        className="small-link"
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </footer>
  );
}
