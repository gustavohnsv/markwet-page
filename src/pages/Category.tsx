import { useNavigate, useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdArrowBack } from "react-icons/md";
import { HELP_ARTICLES } from "../data/helpArticles";

export default function Category() {
  const { t } = useTranslation();
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();

  const articlesList = HELP_ARTICLES || [];

  const categoryTitles: Record<string, string> = {
    "getting-started": "help.gettingStarted",
    account: "help.account",
    troubleshooting: "help.troubleshooting",
  };

  const currentCategory = category || "";
  const categoryTitleKey = categoryTitles[currentCategory];
  const isValidCategory = categoryTitleKey !== undefined;

  const title = isValidCategory ? t(categoryTitleKey) : t("help.title");

  const articles = articlesList.filter(
    (article) => article.category === currentCategory,
  );

  if (!isValidCategory) {
    return (
      <div
        className="container"
        style={{ paddingTop: "120px", textAlign: "center" }}
      >
        <h2>Categoria não encontrada / Category not found</h2>
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

      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "16px",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
          {articles.length}{" "}
          {articles.length === 1
            ? t("common.article", "artigo")
            : t("common.articles", "artigos")}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {articles.length > 0 ? (
          articles.map((article) => (
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
                transition: "transform 0.2s ease",
              }}
            >
              {t(article.titleKey)}
              <span
                style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}
              >
                {t("help.readMore", "Ler artigo →")}
              </span>
            </Link>
          ))
        ) : (
          <p style={{ color: "var(--text-secondary)" }}>
            {t(
              "help.noArticlesCategory",
              "Nenhum artigo encontrado nesta categoria.",
            )}
          </p>
        )}
      </div>
    </div>
  );
}
