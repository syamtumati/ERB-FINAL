import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageDropdown.css";

import deFlag from "../assets/flags/de.png";
import enFlag from "../assets/flags/en.png";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  const current =
    i18n.language === "de"
      ? { code: "DE", flag: deFlag }
      : { code: "EN", flag: enFlag };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        className="lang-selected"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
      >
        <img src={current.flag} alt={current.code} />
        <span>{current.code}</span>
      </button>

      {open && (
        <div className="lang-menu">
          <button onClick={() => changeLang("de")}>
            <img src={deFlag} alt="DE" />
            <span>DE</span>
          </button>
          <button onClick={() => changeLang("en")}>
            <img src={enFlag} alt="EN" />
            <span>EN</span>
          </button>
        </div>
      )}
    </div>
  );
}

