import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdArrowBack } from "react-icons/md";
import { useEffect } from "react";

export default function Article() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();

  const titleKey = `help.articles.${slug}.title`;
  const contentKey = `help.articles.${slug}.content`;

  const title = t(titleKey);
  const content = t(contentKey, { returnObjects: true });

  const exists = title !== titleKey;

  useEffect(() => {
    if (!exists) {
    }
  }, [exists, navigate]);

  if (!exists) {
    return (
      <div
        className="container"
        style={{ paddingTop: "120px", textAlign: "center" }}
      >
        <h2>Artigo não encontrado / Article not found</h2>
        <button onClick={() => navigate("/help")} style={{ marginTop: 20 }}>
          Voltar / Back
        </button>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{
        paddingTop: "calc(var(--header-height) + 40px)",
        paddingBottom: "80px",
        maxWidth: "800px",
      }}
    >
      <button
        onClick={() => navigate("/help")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "none",
          border: "none",
          color: "var(--text-secondary)",
          cursor: "pointer",
          marginBottom: "32px",
          fontSize: "1rem",
        }}
      >
        <MdArrowBack size={20} />
        {t("common.back", "Voltar")}
      </button>

      <article>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "32px",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h1>

        <div
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "var(--text-secondary)",
            whiteSpace: "pre-line",
          }}
        >
          {Array.isArray(content) ? (
            content.map((paragraph, index) => (
              <p key={index} style={{ marginBottom: "1.5rem" }}>
                {paragraph}
              </p>
            ))
          ) : (
            <p>{content as unknown as string}</p>
          )}
        </div>
      </article>
    </div>
  );
}
