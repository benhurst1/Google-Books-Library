import { BookImage } from "./BookImage";

export function BookCard({ book, setOpenBook, bookId }) {
  function renderText(text) {
    if (text === undefined) {
      return "";
    } else if (text.length > 40) {
      return `${text.slice(0, 40).trim()}...`;
    }
    return text;
  }

  return (
    <button className="group relative " onClick={() => setOpenBook(bookId)}>
      <BookImage imageLink={book["volumeInfo"]["imageLinks"]["thumbnail"]} />
      <div className="absolute top-auto bg-gradient-to-t from-black via-transparent to-transparent bottom-0 opacity-0 duration-200 group-hover:opacity-100 group-hover:scale-110 rounded-xl h-full w-full ">
        <div className="flex flex-col justify-end h-full p-2">
          <p className="text-base text-white">
            {renderText(book["volumeInfo"]["title"])}
          </p>
          <p className="text-sm text-white">
            {renderText(book["volumeInfo"]["subtitle"])}
          </p>
        </div>
      </div>
    </button>
  );
}
