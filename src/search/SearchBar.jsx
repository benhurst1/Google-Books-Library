export function SearchBar({ setSearchBox, searchBooks }) {
  const clickHandle = (event) => {
    event.preventDefault();
    searchBooks();
  };

  return (
    <div className="p-2 flex gap-10 w-fill bg-gray-100">
      <form onSubmit={clickHandle} className="flex gap-3">
        <input
          type="search"
          onChange={(e) => setSearchBox(e.target.value)}
          className="bg-gray-500 px-3 py-1 w-3/6 rounded-full"
        ></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}
