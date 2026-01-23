import {
  MdPersonAdd,
  MdFactCheck,
  MdShare,
  MdCheckCircle,
} from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <MdFactCheck size={40} />,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.desc"),
    },
    {
      icon: <MdPersonAdd size={40} />,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.desc"),
    },
    {
      icon: <MdShare size={40} />,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.desc"),
    },
    {
      icon: <MdCheckCircle size={40} />,
      title: t("howItWorks.step4.title"),
      description: t("howItWorks.step4.desc"),
    },
  ];

  return (
    <section id="how-it-works" className="section">
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
            {t("howItWorks.heading")}
          </h2>
          <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>
            {t("howItWorks.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-4" style={{ gap: "24px" }}></div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "32px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{ textAlign: "center", position: "relative" }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "var(--surface-color)",
                  border: "2px solid var(--border-color)",
                  color: "var(--btn-primary-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {step.icon}
              </div>

              {index < steps.length - 1 && (
                <div
                  className="connector"
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: "50%",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "var(--border-color)",
                    zIndex: 1,
                    display: "none",
                  }}
                />
              )}

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <style>{`
            @media (min-width: 1024px) {
                .connector { display: block !important; }
            }
         `}</style>
      </div>
    </section>
  );
}
