"use client";

import { useState, useEffect, useRef } from "react";
import Container from "@/components/layout/container";

const team = [
  {
    name: "Ravi Kumar",
    role: "Managing Director",
    bio: "Over 25 years of experience in infrastructure development and structural engineering leadership.",
  },
  {
    name: "Arun Prakash",
    role: "Head of Engineering",
    bio: "Leads engineering teams delivering high quality infrastructure and structural projects.",
  },
  {
    name: "Meena Subramanian",
    role: "Geotechnical Specialist",
    bio: "Expert in soil mechanics, slope stabilization and foundation engineering.",
  },
  {
    name: "Karthik Raj",
    role: "Precision Manufacturing Lead",
    bio: "Specialist in CNC machining and high precision industrial manufacturing.",
  },
  {
    name: "Vikram Nair",
    role: "Project Manager",
    bio: "Ensures project timelines, quality standards and engineering execution.",
  },
  {
    name: "Sanjay Patel",
    role: "Structural Engineer",
    bio: "Designs and oversees complex structural fabrication and bridge systems.",
  },
];

export default function TeamSection() {

  const [active, setActive] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("zoom-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();

  }, []);

  return (
    <section className="bg-white">

      {/* HERO BAR */}
      <div
        className="relative h-[260px] md:h-[320px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
        }}
      >

        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative text-3xl md:text-5xl font-bold">
          Team
        </h1>

      </div>


      {/* TEAM GRID */}
      <div className="py-20 md:py-24">
        <Container>

          <div className="grid gap-8 md:gap-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3">

            {team.map((member, i) => (

              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                onClick={() => setActive(i)}
                className="card-animate cursor-pointer border border-gray-200 hover:border-[#c26b6b]
                transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-md overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative h-56 bg-gray-200 flex items-center justify-center text-gray-400 group">

                  <span className="z-10">Member Photo</span>

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center 
                  opacity-0 group-hover:opacity-100 transition duration-300">

                    <span className="text-white text-sm md:text-base">
                      Click to view profile
                    </span>

                  </div>

                </div>

                {/* INFO */}
                <div className="p-6 text-center">

                  <h3 className="text-lg md:text-xl font-semibold">
                    {member.name}
                  </h3>

                  <p className="text-[#c26b6b] text-sm mt-1">
                    {member.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </Container>
      </div>


      {/* MODAL */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300
        ${active !== null ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        bg-black/60 px-4`}
        onClick={() => setActive(null)}
      >

        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white w-full max-w-4xl grid md:grid-cols-2 rounded-md overflow-hidden shadow-2xl
          transform transition-all duration-300
          ${active !== null ? "scale-100 translate-y-0" : "scale-95 translate-y-6"}`}
        >

          {/* IMAGE */}
          <div className="bg-gray-200 flex items-center justify-center text-gray-400 h-[260px] md:h-auto">
            Member Photo
          </div>


          {/* DETAILS */}
          {active !== null && (

            <div className="p-8 md:p-12 flex flex-col justify-center">

              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                {team[active].name}
              </h2>

              <p className="text-[#c26b6b] mb-4">
                {team[active].role}
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                {team[active].bio}
              </p>

              <button
                onClick={() => setActive(null)}
                className="bg-[#c26b6b] text-white px-6 py-3 w-fit hover:bg-[#a65454] transition"
              >
                Close
              </button>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}
