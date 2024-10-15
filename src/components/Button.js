export default function Button({ text, location }) {
  return (
    <button className="border-grey text-grey rounded-full border-2 px-4 text-xl text-white shadow-sm duration-500 ease-in-out hover:bg-gray-200 hover:text-teal-950">
      {text}
    </button>
  );
}
