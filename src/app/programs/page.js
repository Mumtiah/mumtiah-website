"use client";

import { ProgramCard } from "../components/programs/ProgramCard";

const programData = [
  {
    heroText: "Virtual Classes",
    sublineText: "We teach based on what Allah and his prophet commanded",
    isVideo: true,
    media: "https://www.youtube.com/embed/NSoX4ZJ2v5o?si=oRJ8aXwDQCs-Ugnv",
  },
  {
    heroText: "Free online class",
    sublineText: "We teach based on foundational principles",
    isVideo: true,
    media: "https://www.youtube.com/embed/zBjNiLV_HaY?si=E6t87XZEkBa9JQCE", // replace with your Youtube embed video link
  },
  {
    heroText: "Physical class",
    sublineText: "Experience personal interaction and community",
    isVideo: true,
    media: "https://www.youtube.com/embed/TyFDedjz8HE?si=2PdXC5Ji9PYi6kA1", // replace with your Youtube embed video link
  },
  {
    heroText: "Ramadan lecture",
    sublineText: "Gain beneficial knowledge this Ramadan",
    isVideo: false,
    media:
      "https://muslimaid.storage.googleapis.com/upload/img_cache/file-18913-2d11cab24467c01f935f83fa8ec58bf8.jpg", // replace with your image link
  },

  {
    heroText: "Mumtiah experience",
    sublineText: "Discover the Mumtiah experience",
    isVideo: false,
    media:
      "https://muslimaid.storage.googleapis.com/upload/img_cache/file-18913-2d11cab24467c01f935f83fa8ec58bf8.jpg",
  },
];

export default function Programs() {
  return (
    <div>
      {programData.map((program, index) => (
        <ProgramCard
          key={index}
          heroText={program.heroText}
          sublineText={program.sublineText}
          isVideo={program.isVideo}
          media={program.media}
        />
      ))}
    </div>
  );
}
