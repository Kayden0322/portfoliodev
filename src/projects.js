// src/projects.js

import condoImg from "./assets/Condo.png";
import stickersImg from "./assets/Stickers.png";
import travelImg from "./assets/Travel.png";
import sustainableImg from "./assets/Sustainable.png";

const ph = (seed) => `https://picsum.photos/seed/${seed}/1200/675`;

export const projects = [
  {
    id: "condo-management",
    title: "Condo Management App Wireframe",
    short: "Wireframe for managing facilities, maintenance, and residents.",
    image: condoImg,
    youtube: "https://www.youtube.com/embed/oZ3zxtRE2Tg",
    images: [condoImg, ph("condo-2"), ph("condo-3")],
    overview:
      "A UI/UX wireframe concept for a condo management application focusing on facility booking, maintenance reporting, and announcements.",
    role: "UI/UX Designer",
    stack: ["Figma", "Wireframing", "UX Design"],
    highlights: [
      "Resident and admin dashboards",
      "Facility booking and maintenance flows",
      "Consistent design system across modules",
    ],
    designPlan: {
      goal: "Provide a simple all-in-one condo app that reduces admin workload and helps residents complete tasks fast (booking, maintenance, notices).",
      users: ["Residents", "Admin/Management", "Security/Staff (optional)"],
      keyScreens: [
        "Login / Role switch (Resident/Admin)",
        "Resident Home Dashboard",
        "Facilities Booking (calendar slots)",
        "Maintenance Ticket (create + status tracking)",
        "Announcements + Notifications",
        "Admin Dashboard (overview + approvals)",
      ],
      components: [
        "Sidebar / Bottom nav (role-based)",
        "Card-based modules + quick actions",
        "Pill tags for status (Pending/Approved/Done)",
        "Calendar slot picker + confirmation modal",
        "Ticket form with attachments",
      ],
      interactions: [
        "Tap card → detail page",
        "Book slot → confirm overlay → success state",
        "Create ticket → status timeline updates",
        "Admin approve/reject bookings with reason",
      ],
      styleNotes:
        "Dashboard UI, strong hierarchy, consistent spacing, clear CTA buttons, readable status colours.",
      successCriteria: [
        "Resident can book a facility in < 30 seconds",
        "Admin can view and process requests quickly",
        "Users can find key actions in 1–2 taps",
      ],
      nextSteps: [
        "Add high-fidelity UI kit + components",
        "Prototype main flows in Figma",
        "User test with 3–5 residents",
      ],
    },
  },

  {
    id: "video-editing",
    title: "Video Editing",
    short: "Edited videos with clean pacing, cuts, and visual clarity.",
    image: ph("video-1"),
    images: [ph("video-1"), ph("video-2"), ph("video-3")],
    overview:
      "A collection of video editing work including short-form and long-form edits, focusing on clean cuts, pacing, audio syncing, and basic motion graphics.",
    role: "Video Editor",
    stack: ["Premiere Pro", "After Effects", "Motion"],
    highlights: [
      "Clean cuts and pacing",
      "Audio syncing",
      "Basic motion graphics",
    ],
    designPlan: {
      goal: "Deliver engaging edits that keep attention through pacing, sound design, and clean visual storytelling.",
      users: ["Content viewers", "Client/lecturer", "Social media audience"],
      keyScreens: [
        "Intro hook (0–3s)",
        "Main sequence (story beats)",
        "Captions / titles",
        "Outro + CTA",
      ],
      components: [
        "Hook + fast cuts",
        "Music bed + SFX",
        "Lower thirds / captions",
        "Colour correction + grading",
      ],
      interactions: [
        "Beat-synced cuts",
        "Text animations for clarity",
        "Audio ducking on dialogue",
      ],
      styleNotes:
        "Prioritise clarity and rhythm. Avoid over-editing. Keep typography clean and readable.",
      successCriteria: [
        "Strong retention in first 5 seconds",
        "Clear dialogue audio",
        "Pacing matches intended mood",
      ],
      nextSteps: [
        "Create a showreel page",
        "Add before/after colour comparisons",
        "Organise edits by category",
      ],
    },
  },

  {
    id: "sustainable-fashion",
    title: "Sustainable Clothing Store Wireframe",
    short: "E-commerce wireframe focused on sustainability and ethics.",
    image: sustainableImg,
    images: [sustainableImg, ph("sustainable-2"), ph("sustainable-3")],
    overview:
      "Wireframe design for a sustainable fashion store highlighting ethical sourcing, eco-friendly materials, and transparent product information.",
    role: "UI/UX Designer",
    stack: ["Figma", "E-commerce UX", "Wireframing"],
    highlights: [
      "Product pages with sustainability focus",
      "Simple checkout experience",
      "Clean, minimal layout",
    ],
    designPlan: {
      goal: "Help shoppers buy sustainable fashion confidently by making materials, impact, and sourcing visible and easy to understand.",
      users: ["Eco-conscious shoppers", "First-time sustainable buyers"],
      keyScreens: [
        "Home",
        "Product listing (filters)",
        "Product detail (impact)",
        "Cart",
        "Checkout",
        "Order confirmation",
      ],
      components: [
        "Impact badges",
        "Material breakdown",
        "Sizing guide",
        "Reviews + FAQ",
        "Checkout progress steps",
      ],
      interactions: [
        "Filter by impact/material",
        "Badge tooltip overlay",
        "Size guide overlay",
        "Step checkout validation",
      ],
      styleNotes:
        "Minimal, clean shopping feel. Emphasise trust signals and transparency without overwhelming the user.",
      successCriteria: [
        "Sustainability info understood quickly",
        "Low-friction checkout",
      ],
      nextSteps: [
        "High-fidelity product page",
        "Filter UI + tooltips",
        "Prototype checkout flow",
      ],
    },
  },

  {
    id: "stickers",
    title: "Sticker Designs",
    short: "Original sticker illustrations from sketches to final artwork.",
    image: stickersImg,
    images: [stickersImg, ph("stickers-2"), ph("stickers-3")],
    overview:
      "A series of sticker designs developed from hand-drawn sketches into clean digital artwork, exploring expressive characters and emotions.",
    role: "Graphic Designer",
    stack: ["Illustration", "Character Design", "Creative"],
    highlights: [
      "Sketch-to-final process",
      "Expressive poses",
      "Consistent style",
    ],
    designPlan: {
      goal: "Create a cohesive sticker set with consistent character style, strong silhouettes, and clear emotions.",
      users: ["Sticker buyers", "Community", "Personal brand audience"],
      keyScreens: [
        "Sticker sheet layout",
        "Individual sticker close-ups",
        "Process shots (sketch → final)",
      ],
      components: [
        "Consistent line weight",
        "Limited palette",
        "Bold outlines",
        "Simple shading",
      ],
      interactions: [
        "Zoom / preview in modal",
        "Optional carousel of variants",
      ],
      styleNotes:
        "Keep shapes readable at small sizes. Focus on expression. Avoid clutter.",
      successCriteria: ["Readable at small scale", "Cohesive as a set"],
      nextSteps: [
        "Export transparent PNGs",
        "Make printable sticker sheet",
        "Add more poses/emotions",
      ],
    },
  },

  {
    id: "travel-list",
    title: "Travel List Web App",
    short: "A web app to track and organise travel packing lists.",
    image: travelImg,
    images: [travelImg, ph("travel-2"), ph("travel-3")],
    overview:
      "A simple travel list web application that allows users to add items, manage quantities, and track packing progress.",
    role: "Frontend Developer",
    stack: ["React", "JavaScript", "CSS"],
    highlights: ["Dynamic list management", "Progress tracking", "Clean UI"],
    designPlan: {
      goal: "Make packing easier by letting users quickly create lists, reuse templates, and track what’s packed.",
      users: ["Travellers", "Students", "Families"],
      keyScreens: [
        "Create trip",
        "Packing list",
        "Templates",
        "Summary (progress %)",
      ],
      components: [
        "Add item input",
        "Item row (qty + checkbox)",
        "Progress bar",
        "Category sections",
      ],
      interactions: [
        "Enter to add",
        "Toggle packed updates progress",
        "Save/load lists (localStorage)",
      ],
      styleNotes: "Fast and simple. Minimal clicks. Highly readable list UI.",
      successCriteria: ["Create list in < 1 minute", "Progress always visible"],
      nextSteps: ["Add localStorage", "Add templates", "Add share/export"],
    },
  },

  {
    id: "gpa-calculator",
    title: "GPA Calculator",
    short: "Calculate GPA based on grades and modules.",
    image: ph("gpa-1"),
    images: [ph("gpa-1"), ph("gpa-2"), ph("gpa-3")],
    overview:
      "A utility app that converts grades into GPA values with a clear and simple input flow.",
    role: "Frontend Developer",
    stack: ["JavaScript", "Logic", "UI Design"],
    highlights: ["Accurate GPA logic", "Simple inputs", "Clear results"],
    designPlan: {
      goal: "Let students calculate GPA quickly with minimal input friction and clear results.",
      users: ["Students"],
      keyScreens: [
        "Module list input",
        "Grade selector",
        "Credits input",
        "Results",
      ],
      components: [
        "Add module row",
        "Grade dropdown",
        "Credits input",
        "Live GPA display",
        "Reset button",
      ],
      interactions: [
        "Auto-update results",
        "Inline validation",
        "Add/remove rows",
      ],
      styleNotes: "Utility-first layout with strong result emphasis.",
      successCriteria: ["Instant updates", "Errors easy to spot"],
      nextSteps: ["Add RP grade mapping", "Save semesters + compare GPA"],
    },
  },

  {
    id: "vr-escape-room",
    title: "VR Escape Room",
    short: "A virtual reality escape room with interactive puzzles.",
    image: ph("vr-1"),
    youtube: "https://www.youtube.com/embed/DLOr-LQa6Vg",
    images: [ph("vr-1"), ph("vr-2"), ph("vr-3")],
    overview:
      "A VR escape room concept where players interact with objects and solve puzzles to progress through immersive environments.",
    role: "Developer / Designer",
    stack: ["VR", "Game Design", "Unity"],
    highlights: [
      "Puzzle gameplay",
      "Interactive objects",
      "Immersive experience",
    ],
    designPlan: {
      goal: "Create a short VR experience that feels immersive, intuitive, and satisfying to solve.",
      users: ["VR gamers", "First-time VR players"],
      keyScreens: [
        "Start room + tutorial",
        "Puzzle rooms (2–3)",
        "Completion screen",
      ],
      components: [
        "Interactable props",
        "Puzzle locks",
        "Hint system (optional)",
        "Audio cues",
      ],
      interactions: [
        "Grab/place objects",
        "Solve multi-step puzzles",
        "Environmental storytelling",
      ],
      styleNotes: "Comfort first. Use lighting/audio for guidance.",
      successCriteria: [
        "Controls understood fast",
        "Puzzles solvable without frustration",
      ],
      nextSteps: [
        "Prototype one room",
        "Playtest comfort",
        "Expand puzzle chain",
      ],
    },
  },
];
