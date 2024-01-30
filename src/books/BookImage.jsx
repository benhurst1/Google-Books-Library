export function BookImage({ imageLink }) {
  return (
    <img
      src={`${imageLink}&fife=w800`}
      alt=""
      className="h-full w-44 object-cover rounded-xl m-auto drop-shadow-md shadow-md bg-gray-500  duration-200 group-hover:scale-110 "
    />
  );
}
