import scHomepage from "../../assets/screenshots/sc_homepage.png";
import scItems from "../../assets/screenshots/sc_items.png";
import scLists from "../../assets/screenshots/sc_lists.png";
import scListSettings from "../../assets/screenshots/sc_list_settings.png";
import scProfile from "../../assets/screenshots/sc_profile.png";
import { useTranslation } from "react-i18next";

export default function Screenshots() {
  const { t } = useTranslation();

  const screens = [
    { title: "Home", img: scHomepage },
    { title: "My Lists", img: scLists },
    { title: "Shopping List", img: scItems },
    { title: "List Settings", img: scListSettings },
    { title: "User Profile", img: scProfile },
  ];

  return (
    <section
      id="screenshots"
      className="section"
      style={{
        backgroundColor: "var(--surface-color)",
        overflow: "hidden",
      }}
    >
      <div className="container text-center mb-12">
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "16px",
            color: "var(--text-primary)",
          }}
        >
          {t("screenshots.heading")}
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "32px",
          overflowX: "auto",
          padding: "20px",
          scrollSnapType: "x mandatory",
          justifyContent: "center",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="no-scrollbar"
      >
        {screens.map((screen, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                flex: "0 0 auto",
                width: "280px",
                height: "580px",
                backgroundColor: "#121212", // Dark bezel background
                borderRadius: "40px",
                border: "12px solid #2d2d2d", // Bezel border
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.2), inset 0 0 0 2px rgba(255,255,255,0.1)", // Shadow + Gloss hint
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Notch decoration */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "120px",
                  height: "24px",
                  backgroundColor: "#2d2d2d",
                  borderBottomLeftRadius: "16px",
                  borderBottomRightRadius: "16px",
                  zIndex: 10,
                }}
              />

              <img
                src={screen.img}
                alt={screen.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill", // Ensures it fills the frame. Since we use a standard ratio, this should look good.
                  zIndex: 1,
                }}
              />
            </div>

            <h3
              style={{
                margin: 0,
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              {screen.title}
            </h3>
          </div>
        ))}
        {/* Spacer at the end for scrolling comfort */}
        <div style={{ flex: "0 0 20px" }} />
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
}
