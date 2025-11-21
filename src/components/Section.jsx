import React from "react";
import "../styles/Section.css";

export default function Section({
  id,
  title,
  text,
  img,
  imgAlt = "",
  reverse = false,
  background = "none",
}) {
  return (
    <section
      id={id}
      className={`section-wrapper py-12 md:py-24 ${background}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid items-center gap-8 md:gap-12 lg:grid-cols-2 ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* IMAGE (if provided) */}
          {img && (
            <div className={`section-image`}>
              <div
                className="aspect-video rounded-xl bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url("${img}")` }}
                aria-label={imgAlt}
              />
            </div>
          )}

          {/* TEXT BLOCK */}
          <div
            className={`section-text flex flex-col space-y-4 ${
              reverse ? "lg:order-first" : ""
            }`}
          >
            <h2 className="section-title">{title}</h2>

            <p className="section-body max-w-[650px]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
