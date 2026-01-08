import { useTranslation } from "react-i18next";
import "./LanguageDropdown.css";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();

  const changeLang = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="lang-dropdown">
      <select value={i18n.language} onChange={changeLang}>
        <option value="de">DE</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}

