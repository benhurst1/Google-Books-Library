import "./output.css";
import { SearchArea } from "./search/SearchArea";

export function App() {
  return (
    <>
      <div className="h-32 bg-gray-500">Header</div>
      <div className="flex">
        <div className="w-40 min-h-screen bg-gray-300">Side Bar</div>
        <SearchArea />
      </div>
    </>
  );
}
