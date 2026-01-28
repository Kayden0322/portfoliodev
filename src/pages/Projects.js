// src/pages/Projects.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../projects";

const FILTERS = ["All", "Wireframes", "Web Apps", "Creative", "Other"];

function getCategory(p) {
  const t = (p.title || "").toLowerCase();
  if (t.includes("wireframe")) return "Wireframes";
  if (t.includes("web app") || t.includes("calculator")) return "Web Apps";
  if (t.includes("sticker") || t.includes("video")) return "Creative";
  return "Other";
}

function ListBlock({ title, items }) {
  if (!items?.length) return null;
  return (
    <div style={{ marginTop: 12 }}>
      <div className="modal-section-title">{title}</div>
      <ul className="modal-list">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");

  // carousel state
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef(null);

  const openProject = (p) => {
    setActiveProject(p);
    setSlideIndex(0);
    // snap to first slide
    requestAnimationFrame(() => {
      if (carouselRef.current) carouselRef.current.scrollLeft = 0;
    });
  };

  // Lock scroll + ESC close
  useEffect(() => {
    if (!activeProject) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject, slideIndex]);

  const visibleProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => getCategory(p) === filter);
  }, [filter]);

  // Build slides: video (if any) then images[]
  const slides = useMemo(() => {
    if (!activeProject) return [];
    const s = [];
    if (activeProject.youtube) {
      s.push({ type: "youtube", value: activeProject.youtube, label: "Video" });
    }
    const imgs = activeProject.images?.length
      ? activeProject.images
      : [activeProject.image].filter(Boolean);

    imgs.forEach((src, i) =>
      s.push({ type: "image", value: src, label: `Photo ${i + 1}` })
    );
    return s;
  }, [activeProject]);

  const scrollToIndex = (idx) => {
    const el = carouselRef.current;
    if (!el) return;

    const clamped = Math.max(0, Math.min(idx, slides.length - 1));
    const slideWidth = el.clientWidth; // each slide is 100% width
    el.scrollTo({ left: clamped * slideWidth, behavior: "smooth" });
    setSlideIndex(clamped);
  };

  const goPrev = () => scrollToIndex(slideIndex - 1);
  const goNext = () => scrollToIndex(slideIndex + 1);

  const onCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth;
    const idx = Math.round(el.scrollLeft / slideWidth);
    if (idx !== slideIndex) setSlideIndex(idx);
  };

  return (
    <div className="container">
      <section className="card section">
        <h2 className="h2">Projects</h2>
        <p className="p">
          Filter by category, then click any card to view details.
        </p>

        <div
          style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}
        >
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                className={`btn ${active ? "btn-primary" : "btn-ghost"}`}
                type="button"
                onClick={() => setFilter(f)}
                style={{ padding: "10px 14px" }}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      <section className="projects-grid" style={{ marginTop: 16 }}>
        {visibleProjects.map((p) => (
          <article
            key={p.id}
            className="project-card"
            role="button"
            tabIndex={0}
            onClick={() => openProject(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openProject(p);
            }}
          >
            <div className="project-thumb">
              <img src={p.image} alt={p.title} />
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.short}</p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {p.stack?.slice(0, 3).map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {activeProject && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveProject(null);
          }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <div className="modal-title">{activeProject.title}</div>
              <button
                className="icon-btn"
                onClick={() => setActiveProject(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              {/* ===== Carousel ===== */}
              <div className="carousel-wrap">
                <div
                  className="carousel"
                  ref={carouselRef}
                  onScroll={onCarouselScroll}
                >
                  {slides.map((s, idx) => (
                    <div className="carousel-slide" key={`${s.type}:${idx}`}>
                      {s.type === "youtube" ? (
                        <div className="carousel-media">
                          <iframe
                            className="carousel-iframe"
                            src={s.value}
                            title={`${activeProject.title} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <img
                          className="carousel-media"
                          src={s.value}
                          alt={`${activeProject.title} ${s.label}`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="carousel-controls">
                  <button
                    className="btn btn-ghost"
                    type="button"
                    onClick={goPrev}
                    disabled={slideIndex <= 0}
                  >
                    ←
                  </button>

                  <div className="carousel-dots" aria-label="carousel dots">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`dot ${i === slideIndex ? "active" : ""}`}
                        onClick={() => scrollToIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                  </div>

                  <button
                    className="btn btn-ghost"
                    type="button"
                    onClick={goNext}
                    disabled={slideIndex >= slides.length - 1}
                  >
                    →
                  </button>
                </div>

                <p className="p" style={{ fontSize: 13, marginTop: 2 }}>
                  Tip: scroll sideways (or use ← → / arrow keys).
                </p>
              </div>

              {/* ===== Details ===== */}
              <div className="modal-panel">
                <div className="modal-section-title">Overview</div>
                <p className="p" style={{ marginBottom: 12 }}>
                  {activeProject.overview}
                </p>

                <div className="modal-section-title">Category</div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 12,
                  }}
                >
                  <span className="chip">{getCategory(activeProject)}</span>
                  {activeProject.role && (
                    <span className="chip">{activeProject.role}</span>
                  )}
                </div>

                <div className="modal-section-title">Tech / Tools</div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 12,
                  }}
                >
                  {activeProject.stack?.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {activeProject.designPlan && (
                  <div style={{ marginTop: 10 }}>
                    <div className="modal-section-title">Design Plan</div>

                    {activeProject.designPlan.goal && (
                      <p className="p" style={{ marginTop: 8 }}>
                        <b>Goal:</b> {activeProject.designPlan.goal}
                      </p>
                    )}

                    {activeProject.designPlan.styleNotes && (
                      <p className="p" style={{ marginTop: 8 }}>
                        <b>Style Notes:</b>{" "}
                        {activeProject.designPlan.styleNotes}
                      </p>
                    )}

                    <ListBlock
                      title="Users"
                      items={activeProject.designPlan.users}
                    />
                    <ListBlock
                      title="Key Screens"
                      items={activeProject.designPlan.keyScreens}
                    />
                    <ListBlock
                      title="Components"
                      items={activeProject.designPlan.components}
                    />
                    <ListBlock
                      title="Interactions"
                      items={activeProject.designPlan.interactions}
                    />
                    <ListBlock
                      title="Success Criteria"
                      items={activeProject.designPlan.successCriteria}
                    />
                    <ListBlock
                      title="Next Steps"
                      items={activeProject.designPlan.nextSteps}
                    />
                  </div>
                )}

                <div className="modal-actions" style={{ marginTop: 16 }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => setActiveProject(null)}
                  >
                    Close
                  </button>
                </div>

                <p className="p" style={{ marginTop: 12, fontSize: 13 }}>
                  Press <b>ESC</b> to close.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
