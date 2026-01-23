import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div
      className="container"
      style={{
        paddingTop: "calc(var(--header-height) + 40px)",
        paddingBottom: "80px",
        maxWidth: "800px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          marginBottom: "16px",
          color: "var(--text-primary)",
        }}
      >
        {t("terms.title")}
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "40px" }}>
        {t("terms.lastUpdated")}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          color: "var(--text-primary)",
          lineHeight: 1.8,
        }}
      >
        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            {t("terms.agreement")}
          </h2>
          <p>{t("terms.agreementText")}</p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            {t("terms.reps")}
          </h2>
          <p>{t("terms.repsText")}</p>
          <ul style={{ paddingLeft: "20px", marginTop: "16px" }}>
            <li>{t("terms.repsList1")}</li>
            <li>{t("terms.repsList2")}</li>
            <li>{t("terms.repsList3")}</li>
            <li>{t("terms.repsList4")}</li>
          </ul>
        </section>

        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            {t("terms.prohibited")}
          </h2>
          <p>{t("terms.prohibitedText")}</p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            {t("terms.termination")}
          </h2>
          <p>{t("terms.terminationText")}</p>
        </section>
      </div>
    </div>
  );
}
