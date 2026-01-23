import { MdDownload, MdBolt, MdSettings, MdAdd } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="section"
      style={{
        minHeight: "90vh",
        paddingTop: "calc(var(--header-height) + 60px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container grid grid-cols-2"
        style={{ alignItems: "center" }}
      >
        <div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            {t("hero.headline").replace(/<[^>]*>/g, "")}
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--text-secondary)",
              marginBottom: "40px",
              maxWidth: "500px",
              lineHeight: 1.6,
            }}
          >
            {t("hero.subheadline").replace(/<[^>]*>/g, "")}
          </p>

          <div className="flex gap-4" style={{ flexWrap: "wrap" }}>
            <a
              href="#download"
              className="btn-primary"
              style={{ padding: "16px 32px", fontSize: "1.1rem" }}
            >
              {t("hero.ctaDownload")} <MdDownload size={20} />
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary"
              style={{ padding: "16px 32px", fontSize: "1.1rem" }}
            >
              {t("hero.ctaHowItWorks")}
            </a>
          </div>

          <div
            style={{
              marginTop: "48px",
              display: "flex",
              gap: "32px",
              color: "var(--text-secondary)",
            }}
          >
            <div className="flex items-center">
              <MdBolt size={20} color="var(--status-warning)" />
              <span style={{ paddingLeft: "5px", fontSize: "0.9rem" }}>
                {t("hero.realtimeSync")}
              </span>
            </div>
            <div className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span style={{ paddingLeft: "5px", fontSize: "0.9rem" }}>
                {t("hero.securePrivate")}
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200%",
              height: "200%",
              zIndex: -1,
              opacity: 1,
            }}
          />

          <div
            style={{
              width: "300px",
              maxWidth: "100%",
              height: "600px",
              maxHeight: "80vh",
              backgroundColor: "var(--bg-color)",
              border: "12px solid var(--text-primary)",
              borderRadius: "48px",
              position: "relative",
              overflow: "hidden",
              boxShadow:
                "0 0 50px 10px rgba(46, 125, 50, 0.3), 0 25px 50px -20px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, 0)",
                width: "120px",
                height: "30px",
                backgroundColor: "var(--text-primary)",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                zIndex: 2,
              }}
            />

            <div
              style={{
                padding: "50px 20px 20px",
                height: "100%",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                scrollbarWidth: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ fontWeight: "bold" }}>Groceries</div>
                <MdSettings size={24} color="var(--text-secondary)" />
              </div>

              {[
                { text: "Avocados", checked: false },
                { text: "Bread", checked: false },
                { text: "Eggs", checked: true },
                { text: "Coffee", checked: false },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    background: item.checked
                      ? "var(--btn-secondary-bg)"
                      : "var(--input-bg)",
                    borderRadius: "12px",
                    opacity: item.checked ? 0.6 : 1,
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      minWidth: 20,
                      borderRadius: "6px",
                      border: "2px solid",
                      borderColor: item.checked
                        ? "var(--success-color)"
                        : "var(--text-deactivated)",
                      background: item.checked
                        ? "var(--success-color)"
                        : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.checked && (
                      <span style={{ color: "#fff", fontSize: "12px" }}>✓</span>
                    )}
                  </div>
                  <span
                    style={{
                      textDecoration: item.checked ? "line-through" : "none",
                      color: item.checked
                        ? "var(--text-secondary)"
                        : "var(--text-primary)",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}

              <div
                style={{
                  marginTop: "auto",
                  background: "var(--btn-primary-bg)",
                  color: "#fff",
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "flex-end",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                <MdAdd size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
