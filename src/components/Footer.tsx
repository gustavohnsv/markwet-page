import { SiGithub, SiApple, SiGoogleplay, SiAndroid } from "react-icons/si";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export default function Footer() {
  const { t } = useTranslation();
  const baseUrl = import.meta.env.BASE_URL || "/";
  const envApkUrl = import.meta.env.VITE_APK_URL;
  const hasApk = typeof envApkUrl === "string" && envApkUrl.trim() !== "";
  const APK_URL = hasApk ? envApkUrl : `${baseUrl.replace(/\/$/, "")}/404.html`;
  const APK_FILENAME = hasApk
    ? import.meta.env.VITE_APK_FILENAME || "markwet.apk"
    : undefined;

  return (
    <>
      <section
        id="download"
        className="section"
        style={{
          backgroundColor: "var(--green-dark)",
          textAlign: "center",
          color: "#ffffff",
          padding: "80px 24px",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>
            {t("footer.ready")}
          </h2>
          <div
            className="flex justify-center gap-4"
            style={{ flexWrap: "wrap" }}
          >
            <button
              onClick={() => toast.info(t("toasts.unavailable"))}
              style={{
                backgroundColor: "#fff",
                color: "var(--green-dark)",
                padding: "16px 32px",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                minWidth: "200px",
                justifyContent: "center",
              }}
            >
              <SiApple size={24} />
              App Store
            </button>
            <button
              onClick={() => toast.info(t("toasts.unavailable"))}
              style={{
                backgroundColor: "transparent",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                minWidth: "200px",
                justifyContent: "center",
              }}
            >
              <SiGoogleplay size={24} />
              Google Play
            </button>
            <a
              href={APK_URL}
              download={APK_FILENAME}
              style={{
                backgroundColor: "transparent",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                minWidth: "200px",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <SiAndroid size={24} />
              {t("footer.downloadAPK")}
            </a>
          </div>
          <p
            style={{
              marginTop: "16px",
              opacity: 0.7,
              fontStyle: "italic",
              fontSize: "0.9rem",
            }}
          >
            {t("footer.apkNote")}
          </p>
        </div>
      </section>

      <footer
        style={{
          backgroundColor: "var(--bg-color)",
          borderTop: "1px solid var(--border-color)",
          padding: "60px 0 20px",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-3" style={{ marginBottom: "60px" }}>
            <div style={{ gridColumn: "span 1" }}>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "var(--text-primary)" }}>
                  Mark
                  <span style={{ color: "var(--success-color)" }}>[we]</span>t
                </span>
              </div>
              <p style={{ color: "var(--text-secondary)" }}>
                {t("footer.desc")}
              </p>
            </div>

            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "20px" }}>
                {t("footer.product")}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <li>
                  <a
                    href={`${baseUrl}#features`}
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t("navbar.features")}
                  </a>
                </li>
                <li>
                  <a
                    href={`${baseUrl}#pricing`}
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t("navbar.pricing")}
                  </a>
                </li>
                <li>
                  <a
                    href={`${baseUrl}#download`}
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t("navbar.download")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 700, marginBottom: "20px" }}>
                {t("footer.support")}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <li>
                  <Link to="/help" style={{ color: "var(--text-secondary)" }}>
                    {t("help.title")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {t("privacy.title")}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" style={{ color: "var(--text-secondary)" }}>
                    {t("terms.title")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <style>{`
                @media (max-width: 768px) {
                    .grid-cols-4 { grid-template-columns: 1fr; gap: 40px; }
                }
             `}</style>

          <div
            style={{
              borderTop: "1px solid var(--border-color)",
              paddingTop: "32px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              © {new Date().getFullYear()} Mark[we]t. All rights reserved -{" "}
              {`${t("footer.madeBy")} `}
              <a
                target="_blank"
                href="https://github.com/gustavohnsv"
                style={{ textDecoration: "underline" }}
              >
                @gustavohnsv
              </a>
            </p>

            <div style={{ display: "flex", gap: "24px" }}>
              <a
                target="_blank"
                href="https://github.com/gustavohnsv/markwet-page"
                style={{ color: "var(--text-secondary)" }}
              >
                <SiGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
