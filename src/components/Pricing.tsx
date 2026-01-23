import { MdCheck, MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="section">
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
            {t("pricing.heading")}
          </h2>
          <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>
            {t("pricing.subheading")}
          </p>
        </div>

        <div
          className="grid grid-cols-2"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          <div
            className="card"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                paddingBottom: "24px",
                borderBottom: "1px solid var(--border-color)",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                {t("pricing.free.title")}
              </h3>
              <div style={{ fontSize: "3rem", fontWeight: "800" }}>
                {t("pricing.free.price")}{" "}
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "normal",
                    color: "var(--text-secondary)",
                  }}
                >
                  {t("pricing.free.period")}
                </span>
              </div>
              <p style={{ color: "var(--text-secondary)" }}>
                {t("pricing.free.desc")}
              </p>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px 0",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <li className="flex items-center gap-2">
                <MdCheck size={20} color="var(--success-color)" />{" "}
                {t("pricing.free.feat1")}
              </li>
              <li className="flex items-center gap-2">
                <MdCheck size={20} color="var(--success-color)" />{" "}
                {t("pricing.free.feat2")}
              </li>
              <li className="flex items-center gap-2">
                <MdCheck size={20} color="var(--success-color)" />{" "}
                {t("pricing.free.feat3")}
              </li>
              <li
                className="flex items-center gap-2"
                style={{ color: "var(--text-deactivated)" }}
              >
                <MdClose size={20} /> {t("pricing.free.feat4")}
              </li>
              <li
                className="flex items-center gap-2"
                style={{ color: "var(--text-deactivated)" }}
              >
                <MdClose size={20} /> {t("pricing.free.feat5")}
              </li>
            </ul>

            <a
              href="#download"
              className="btn-secondary"
              style={{ width: "100%" }}
            >
              {t("pricing.free.cta")}
            </a>
          </div>

          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              border: "2px solid var(--btn-primary-bg)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--btn-primary-bg)",
                color: "#fff",
                padding: "4px 12px",
                borderRadius: "100px",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              {t("pricing.premium.badge")}
            </div>

            <div
              style={{
                paddingBottom: "24px",
                borderBottom: "1px solid var(--border-color)",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "var(--btn-primary-bg)",
                }}
              >
                {t("pricing.premium.title")}
              </h3>
              <div style={{ fontSize: "3rem", fontWeight: "800" }}>
                {t("pricing.premium.price")}{" "}
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "normal",
                    color: "var(--text-secondary)",
                  }}
                >
                  {t("pricing.premium.period")}
                </span>
              </div>
              <p style={{ color: "var(--text-secondary)" }}>
                {t("pricing.premium.desc")}
              </p>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px 0",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <li className="flex items-center gap-2">
                <MdCheck size={20} color="var(--success-color)" />{" "}
                {t("pricing.premium.feat1")}
              </li>
              <li className="flex items-center gap-2">
                <MdCheck size={20} color="var(--success-color)" />{" "}
                {t("pricing.premium.feat2")}
              </li>
              <li className="flex items-center gap-2">
                <MdCheck size={20} color="var(--success-color)" />{" "}
                {t("pricing.premium.feat3")}
              </li>
              <li className="flex items-center gap-2">
                <MdCheck size={20} color="var(--success-color)" />{" "}
                {t("pricing.premium.feat4")}
              </li>
              <li className="flex items-center gap-2">
                <MdCheck size={20} color="var(--success-color)" />{" "}
                {t("pricing.premium.feat5")}
              </li>
            </ul>

            <a
              href="#download"
              className="btn-primary"
              style={{ width: "100%" }}
            >
              {t("pricing.premium.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
