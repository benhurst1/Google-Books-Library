import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { BookImage } from "./BookImage";

export function BookDescription({ openBook, setOpenBook }) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    if (isOpen == false) {
      setOpenBook(0);
    } else {
      fetchOpenBookData();
    }
  }, [isOpen]);

  useEffect(() => {
    if (openBook != 0) {
      toggleExpansion();
    }
  }, [openBook]);

  const toggleExpansion = () => {
    setIsOpen(!isOpen);
  };

  async function fetchOpenBookData() {
    const searchTerm = `https://www.googleapis.com/books/v1/volumes/${openBook}`;
    const response = await fetch(searchTerm);
    const res = await response.json();
    setBookData(res);
    console.log(res);
  }

  function displayBook() {
    if (bookData != null) {
      return (
        <div className="flex flex-row justify-between h-full w-full">
          <img
            src={`${bookData["volumeInfo"]["imageLinks"]["thumbnail"]}&fife=w800`}
            alt=""
            className="w-5/6 object-cover rounded-l-xl"
          />
          <div className="flex flex-col w-full">
            <button onClick={() => toggleExpansion()}>X</button>
            <p>Title: {bookData["volumeInfo"]["title"]}</p>
            <p>Subtitle: {bookData["volumeInfo"]["subtitle"]}</p>
            <p>Authors: {bookData["volumeInfo"]["authors"].join(", ")}</p>
            {/* <p>Categories: {bookData["volumeInfo"]["categories"]}</p> */}
            <p>Description: {bookData["volumeInfo"]["description"]}</p>
          </div>
        </div>
      );
    }
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-3/6 h-4/6 rounded-xl bg-white">
          {displayBook()}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
