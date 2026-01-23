import { WifiOff, Users, Bell, RefreshCw, Globe, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Users size={32} />,
      title: t("features.realtime.title"),
      description: t("features.realtime.desc"),
    },
    {
      icon: <RefreshCw size={32} />,
      title: t("features.autosync.title"),
      description: t("features.autosync.desc"),
    },
    {
      icon: <WifiOff size={32} />,
      title: t("features.offline.title"),
      description: t("features.offline.desc"),
    },
    {
      icon: <Globe size={32} />,
      title: t("features.multilanguage.title"),
      description: t("features.multilanguage.desc"),
    },
    {
      icon: <Volume2 size={32} />,
      title: t("features.sounds.title"),
      description: t("features.sounds.desc"),
    },
    {
      icon: <Bell size={32} />,
      title: t("features.notifications.title"),
      description: t("features.notifications.desc"),
    },
  ];

  return (
    <section
      id="features"
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
            {t("features.heading")}
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {t("features.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  color: "var(--btn-primary-bg)",
                  backgroundColor: "var(--btn-secondary-bg)",
                  padding: "12px",
                  borderRadius: "12px",
                  display: "inline-block",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
