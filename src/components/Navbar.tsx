import {
  MdMenu,
  MdClose,
  MdDownload,
  MdSunny,
  MdDarkMode,
  MdLanguage,
} from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLang = () => {
    const newLang = i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { key: "features", label: t("navbar.features"), href: "/#features" },
    {
      key: "howItWorks",
      label: t("navbar.howItWorks"),
      href: "/#how-it-works",
    },
    { key: "pricing", label: t("navbar.pricing"), href: "/#pricing" },
    { key: "reviews", label: t("navbar.reviews"), href: "/#reviews" },
    { key: "faq", label: t("navbar.faq"), href: "/#faq" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--header-height)",
        backgroundColor: "var(--bg-color)",
        borderBottom: "1px solid var(--border-color)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>
            Mark<span style={{ color: "var(--btn-primary-bg)" }}>[we]</span>t
          </span>
        </Link>

        {/* Desktop Menu */}
        <div
          className="desktop-menu"
          style={{ display: "none", gap: "32px", alignItems: "center" }}
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div
          className="desktop-actions"
          style={{ display: "none", alignItems: "center", gap: "16px" }}
        >
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            style={{
              background: "var(--surface-color)",
              border: "1px solid var(--border-color)",
              borderRadius: "20px",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.85rem",
              color: "var(--text-primary)",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            <MdLanguage size={16} />
            <span>{i18n.language.substring(0, 2).toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: "var(--input-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "30px",
              padding: "0",
              display: "flex",
              alignItems: "center",
              width: "60px",
              height: "32px",
              position: "relative",
              cursor: "pointer",
            }}
            aria-label="Toggle theme"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                padding: "0 8px",
                color: "var(--text-secondary)",
              }}
            >
              <MdSunny size={14} />
              <MdDarkMode size={14} />
            </div>
            <div
              style={{
                position: "absolute",
                top: "3px",
                left: theme === "dark" ? "31px" : "3px",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "var(--surface-color)",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                transition: "left 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
              }}
            >
              {theme === "dark" ? (
                <MdDarkMode size={14} />
              ) : (
                <MdSunny size={14} />
              )}
            </div>
          </button>

          <a
            href="#download"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "0.9rem" }}
          >
            {t("navbar.download")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "transparent",
            padding: 8,
            color: "var(--text-primary)",
          }}
        >
          {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-color)",
            borderBottom: "1px solid var(--border-color)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: "1rem",
                color: "var(--text-primary)",
                fontWeight: 500,
              }}
            >
              {item.label}
            </a>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "16px",
              borderTop: "1px solid var(--border-color)",
            }}
          >
            <span style={{ color: "var(--text-secondary)" }}>
              {t("navbar.theme")}
            </span>
            <button
              onClick={toggleTheme}
              style={{
                background: "var(--input-bg)",
                borderRadius: "20px",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              {theme === "dark" ? t("navbar.darkMode") : t("navbar.lightMode")}{" "}
              {theme === "dark" ? (
                <MdDarkMode size={16} />
              ) : (
                <MdSunny size={16} />
              )}
            </button>
          </div>

          <a
            href="#download"
            className="btn-primary"
            onClick={() => setIsOpen(false)}
            style={{ justifyContent: "center" }}
          >
            {t("navbar.downloadApp")} <MdDownload size={18} />
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
