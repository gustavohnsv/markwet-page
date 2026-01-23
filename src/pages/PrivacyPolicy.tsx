import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
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
        {t("privacy.title")}
      </h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: "40px" }}>
        {t("privacy.lastUpdated")}
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
            {t("privacy.intro")}
          </h2>
          <p>{t("privacy.introText")}</p>
        </section>

        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            {t("privacy.collect")}
          </h2>
          <p>{t("privacy.collectText")}</p>
          <ul style={{ paddingLeft: "20px", marginTop: "16px" }}>
            <li>
              <strong style={{ fontWeight: 600 }}>
                {t("privacy.personalData")}
              </strong>{" "}
              {t("privacy.personalDataText")}
            </li>
            <li>
              <strong style={{ fontWeight: 600 }}>
                {t("privacy.usageData")}
              </strong>{" "}
              {t("privacy.usageDataText")}
            </li>
            <li>
              <strong style={{ fontWeight: 600 }}>
                {t("privacy.deviceData")}
              </strong>{" "}
              {t("privacy.deviceDataText")}
            </li>
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
            {t("privacy.use")}
          </h2>
          <p>{t("privacy.useText")}</p>
          <ul style={{ paddingLeft: "20px", marginTop: "16px" }}>
            <li>{t("privacy.useList1")}</li>
            <li>{t("privacy.useList2")}</li>
            <li>{t("privacy.useList3")}</li>
            <li>{t("privacy.useList4")}</li>
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
            {t("privacy.sharing")}
          </h2>
          <p>{t("privacy.sharingText")}</p>
        </section>
      </div>
    </div>
  );
}
