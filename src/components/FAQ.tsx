import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t("faq.q1"),
      a: t("faq.a1"),
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2"),
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3"),
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
    },
    {
      q: t("faq.q5"),
      a: t("faq.a5"),
    },
  ];

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="text-center mb-12">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}
          >
            {t("faq.heading")}
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: "1px solid var(--border-color)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "var(--surface-color)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: "100%",
                    padding: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    textAlign: "left",
                    color: "var(--text-primary)",
                    fontSize: "1.1rem",
                  }}
                >
                  {faq.q}
                  {isOpen ? (
                    <ChevronUp color="var(--text-secondary)" />
                  ) : (
                    <ChevronDown color="var(--text-secondary)" />
                  )}
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 24px 24px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
