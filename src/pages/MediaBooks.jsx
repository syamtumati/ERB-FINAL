import { useTranslation } from "react-i18next";
import "./MediaBooks.css";

/* ===================================================== */
/* BOOK IMAGES – EXACT PATHS YOU REQUESTED */
/* ===================================================== */

import b1 from "../assets/books/biblische-brautwerbung-ebook.jpg";
import b2 from "../assets/books/eine-frau-die-zu-ruehmen-ist-print.jpg";
import b3 from "../assets/books/eine-frau-die-zu-ruehmen-ist-ebook.jpg";
import b4 from "../assets/books/gemeinde-und-mission-print.jpg";
import b5 from "../assets/books/gemeinde-und-mission-ebook.jpg";
import b6 from "../assets/books/gemeinde-und-mission-hoerbuch.jpg";
import b7 from "../assets/books/treue-maenner-wer-findet-sie-print.jpg";
import b8 from "../assets/books/treue-maenner-wer-findet-sie-ebook.jpg";
import b9 from "../assets/books/biblische-brautwerbung-print.jpg";

export default function MediaBooks() {
  const { i18n } = useTranslation();
  const isGerman = i18n.language === "de";

  const books = [
    { image: b1, price: "4,99 €" },
    { image: b2, price: "15,90 €" },
    { image: b3, price: "4,99 €" },
    { image: b4, price: "ab 7,50 €" },
    { image: b5, price: "4,99 €" },
    { image: b6, price: "4,99 €" },
    { image: b7, price: "15,90 €" },
    { image: b8, price: "5,99 €" },
    { image: b9, price: "ab 7,50 €" },
  ];

  return (
    <div className="media-books">
      <h2>
        {isGerman ? "Bücher von Peter Schild" : "Books by Peter Schild"}
      </h2>

      <p className="books-subtitle">
        {isGerman
          ? "Alle Bücher sind im offiziellen Voice of Hope Shop erhältlich"
          : "All books are available in the official Voice of Hope store"}
      </p>

      {/* BOOK GRID */}
      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="book-image-wrapper">
              <img src={book.image} alt="Book cover" loading="lazy" />
            </div>
            <span className="book-price">{book.price}</span>
          </div>
        ))}
      </div>

      {/* GLOBAL STORE BUTTON */}
      <div className="books-store-link">
        <a
          href="https://www.voh-shop.de/s01.php?cur=EUR&sp=de&ag=1&pp=sucheper&per=551&pern=Peter%20Schild&pert=8&perbio=1#Start"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn"
        >
          {isGerman
            ? "Zum Voice of Hope Bücher-Shop"
            : "Go to Voice of Hope Book Store"}
          <div className="shine"></div>
        </a>
      </div>
    </div>
  );
}

