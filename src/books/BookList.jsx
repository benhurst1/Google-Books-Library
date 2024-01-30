import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

export function BookList({ books, setOpenBook }) {
  const [bookCards, setBookCards] = useState([]);

  useEffect(() => {
    if ("items" in books) {
      const cards = books["items"].map((book) => (
        <BookCard
          key={book["id"]}
          book={book}
          bookId={book["id"]}
          setOpenBook={setOpenBook}
        />
      ));
      setBookCards(cards);
    }
  }, [books]);

  return <div className="flex flex-row flex-wrap gap-10 m-8">{bookCards}</div>;
}
