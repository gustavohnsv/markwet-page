import { MdSearch, MdBook, MdMessage, MdHelpOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HELP_ARTICLES } from "../data/helpArticles";

export default function HelpCenter() {
  const { t } = useTranslation();

  return (
    <div
      className="container"
      style={{
        paddingTop: "calc(var(--header-height) + 40px)",
        paddingBottom: "80px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: "24px",
            color: "var(--text-primary)",
          }}
        >
          {t("help.title")}
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--text-secondary)",
            marginBottom: "32px",
          }}
        >
          {t("help.subtitle")}
        </p>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MdSearch
            style={{
              position: "absolute",
              left: "16px",
              color: "var(--text-secondary)",
            }}
            size={20}
          />
          <input
            type="text"
            placeholder={t("help.placeholder")}
            style={{
              width: "100%",
              padding: "16px 16px 16px 48px",
              borderRadius: "100px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--surface-color)",
              fontSize: "1rem",
              color: "var(--text-primary)",
              outline: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3">
        {[
          {
            icon: <MdBook size={32} />,
            title: t("help.gettingStarted"),
            desc: t("help.gettingStartedDesc"),
            link: "/help/category/getting-started",
          },
          {
            icon: <MdMessage size={32} />,
            title: t("help.account"),
            desc: t("help.accountDesc"),
            link: "/help/category/account",
          },
          {
            icon: <MdHelpOutline size={32} />,
            title: t("help.troubleshooting"),
            desc: t("help.troubleshootingDesc"),
            link: "/help/category/troubleshooting",
          },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="card"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                padding: "16px",
                background: "var(--btn-secondary-bg)",
                borderRadius: "50%",
                color: "var(--btn-primary-bg)",
              }}
            >
              {item.icon}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              {item.title}
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: "60px" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "32px",
            color: "var(--text-primary)",
          }}
        >
          {t("help.popular")}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {HELP_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to={`/help/${article.slug}`}
              style={{
                textDecoration: "none",
                padding: "20px",
                backgroundColor: "var(--surface-color)",
                border: "1px solid var(--border-color)",
                borderRadius: "12px",
                color: "var(--btn-primary-bg)",
                fontWeight: 500,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {t(article.titleKey)}
              <span
                style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}
              >
                {t("help.readMore")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
