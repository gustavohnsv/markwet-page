import { MdStar, MdStarBorder } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Lucas M.",
      role: t("testimonials.t1.role"),
      content: t("testimonials.t1.content"),
      rating: 5,
    },
    {
      name: "Ana Clara",
      role: t("testimonials.t2.role"),
      content: t("testimonials.t2.content"),
      rating: 5,
    },
    {
      name: "Pedro H.",
      role: t("testimonials.t3.role"),
      content: t("testimonials.t3.content"),
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="section"
      style={{ backgroundColor: "var(--surface-color)" }}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}
          >
            {t("testimonials.heading")}
          </h2>
        </div>

        <div className="grid grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div style={{ display: "flex", gap: "4px" }}>
                {[...Array(5)].map((_, i) =>
                  i < t.rating ? (
                    <MdStar key={i} size={20} color="#FB8C00" />
                  ) : (
                    <MdStarBorder key={i} size={20} color="#E0E0E0" />
                  ),
                )}
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--text-secondary)",
                  flex: 1,
                }}
              >
                "{t.content}"
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "auto",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--border-color)",
                  }}
                ></div>{" "}
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "0.95rem" }}>
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
