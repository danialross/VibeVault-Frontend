function SearchType() {
  const option = ["Track", "Artist", "Genre"];
  return (
    <div className="flex justify-center w-full bg-dark-violet pb-8 ">
      <ul className="w-full text- font-medium text-center ">
        <li className="w-full focus-within:z-10 rounded-xl">
          {option.map((item, index) => {
            let rounded = "";
            if (index === 0) {
              rounded = "rounded-s-xl";
            }
            if (index === option.length - 1) {
              rounded = "rounded-e-xl";
            }
            return (
              <button
                className={`inline-block p-4 ${rounded} text-dark-violet bg-gray-100 border-gray-200 focus:outline-none hover:bg-gray-300`}
              >
                {item}
              </button>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

export default SearchType;
