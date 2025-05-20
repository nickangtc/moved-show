import * as React from "react";
import { Helmet } from "react-helmet";

const blurbs = [
  {
    avatar: "/khaled.png", // static image
    name: "Khaled",
    from: "Lebanon",
    to: "Germany",
    quote: "Honestly, I would not move to Berlin if I had to do it again.",
    videoUrl: "https://www.youtube.com/watch?v=Jqhv9vCrGkQ",
  },
  {
    avatar: "/simran.png", // static image
    name: "Simran",
    from: "India",
    to: "Germany",
    quote: "There's always this guilt that I left my family behind...",
    videoUrl: "https://www.youtube.com/watch?v=e05p9Y7cVQg",
  },
];

const HomePage = () => {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        background: "#fff",
        color: "#000",
        fontSize: 20,
      }}
    >
      <Helmet>
        <title>Moved – Stories of people who moved abroad</title>
        <meta
          name="description"
          content="Real interviews with expats about why they moved abroad, how it's going, and what they've learned."
        />
        <link rel="icon" href="/favicon.png" />
      </Helmet>

      <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <h1 style={{ fontSize: "2rem", maxWidth: 800, margin: "0 auto" }}>
          Probably the last place you'll visit before{" "}
          <span style={{ color: "#ffcc00" }}>you</span> move abroad.
        </h1>
        <p>
          <a
            href="https://youtube.com/@MovedShow"
            style={{ color: "#ff0000", textDecoration: "underline" }}
          >
            Watch the videos on YouTube
          </a>
        </p>
      </section>

      <section style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Jqhv9vCrGkQ?si=ElkVga4oEChHL82s"
          title="Latest Moved video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>

      <section
        style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}
      >
        <h2 style={{ textAlign: "center" }}>Why we made the Moved Show</h2>
        <p>
          Thinking of moving abroad? You're not alone, but it sure can feel like
          it. Most people who *did* leave aren't around to ask questions. What
          was it *really* like? How do you deal with the fear, the paperwork,
          the culture shock?
        </p>
        <p>
          Moved shares real, long-form interviews with expats who have already
          done it. Their stories are raw, honest, and full of the hard-earned
          wisdom you're probably looking for.
        </p>
      </section>

      <section style={{ maxWidth: 1000, margin: "2rem auto" }}>
        <h2 style={{ textAlign: "center" }}>
          Stories from people who've done it
        </h2>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {blurbs.map((b, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                padding: "1.5rem 2rem",
                minWidth: 320,
                maxWidth: 350,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "1rem",
                position: "relative",
              }}
            >
              <a
                href={b.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${b.name}'s story on YouTube`}
                style={{
                  position: "absolute",
                  top: 18,
                  right: 24,
                  background: "#fff",
                  borderRadius: "50%",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  padding: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 2,
                  transition: "box-shadow 0.2s",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14" cy="14" r="14" fill="#FF0000" />
                  <polygon points="12,10 19,14 12,18" fill="#fff" />
                </svg>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={b.avatar}
                  alt={b.name}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "2px solid #eee",
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>{b.name}</div>
                  <div style={{ color: "#888", fontSize: 14 }}>
                    {b.from}
                    {b.to ? ` → ${b.to}` : ""}
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: "#222",
                  fontSize: 17,
                  lineHeight: 1.6,
                  marginTop: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    verticalAlign: "middle",
                    color: "#ccc",
                    marginRight: 8,
                  }}
                >
                  &ldquo;
                </span>
                {b.quote}
                <span
                  style={{
                    fontSize: 22,
                    verticalAlign: "middle",
                    color: "#ccc",
                    marginLeft: 8,
                  }}
                >
                  &rdquo;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
