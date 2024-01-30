import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { BookList } from "../books/BookList";
import { BookDescription } from "../books/BookDescription";

export function SearchArea() {
  const [searchBox, setSearchBox] = useState();
  const [books, setBooks] = useState({});
  const [openBook, setOpenBook] = useState(0);

  async function searchBooks() {
    const searchTerm = `https://www.googleapis.com/books/v1/volumes?q=${searchBox}&key=${process.env.REACT_APP_API_KEY}&limit=10`;

    const response = await fetch(searchTerm);
    const res = await response.json();
    setBooks(res);
  }

  return (
    <div>
      <SearchBar setSearchBox={setSearchBox} searchBooks={searchBooks} />
      <div className="flex">
        <BookList books={books} setOpenBook={setOpenBook} />
        <BookDescription openBook={openBook} setOpenBook={setOpenBook} />
      </div>
    </div>
  );
}
