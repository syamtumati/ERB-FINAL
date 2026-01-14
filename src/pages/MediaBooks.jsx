import { useTranslation } from "react-i18next";
import "./MediaBooks.css";

/* BOOK IMAGES */
import missionMp3 from "../assets/books/gemeinde-und-mission-hoerbuch.jpg";
import missionEbook from "../assets/books/gemeinde-und-mission-ebook.jpg";
import brautwerbungEbook from "../assets/books/biblische-brautwerbung-ebook.jpg";
import treueMaennerEbook from "../assets/books/treue-maenner-wer-findet-sie-ebook.jpg";

export default function MediaBooks() {
  const { i18n } = useTranslation();
  const isGerman = i18n.language === "de";

  const books = [
    {
      title: "Gemeinde und Mission – Hörbuch",
      image: missionMp3,
      link: "https://www.voh-shop.de/Gemeinde-und-Mission-Online-Hoerbuch-Download.html"
    },
    {
      title: "Gemeinde und Mission – eBook",
      image: missionEbook,
      link: "https://www.voh-shop.de/Gemeinde-und-Mission-eBook-Download.html"
    },
    {
      title: "Biblische Brautwerbung – eBook",
      image: brautwerbungEbook,
      link: "https://www.voh-shop.de/Biblische-Brautwerbung-eBook-Download.html"
    },
    {
      title: "Treue Männer – wer findet sie? – eBook",
      image: treueMaennerEbook,
      link: "https://www.voh-shop.de/Treue-Maenner-wer-findet-sie-eBook-Download.html"
    }
  ];

  return (
    <div className="media-books">
      <h2>
        {isGerman ? "Bücher von Peter Schild" : "Books by Peter Schild"}
      </h2>

      <p className="books-subtitle">
        {isGerman
          ? "Erhältlich im offiziellen Voice of Hope Shop"
          : "Available in the official Voice of Hope store"}
      </p>

      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="book-link"
            >
              <div className="book-image-wrapper">
                <img src={book.image} alt={book.title} loading="lazy" />
              </div>

              <h3 className="book-title">{book.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

