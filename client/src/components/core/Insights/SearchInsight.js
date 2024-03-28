import React from "react";

const SearchInsight = () => {
  return (
    <div>
      <form >
        <input
          type="text"
          placeholder="Search for insights..."
          className="border px-4 py-2 rounded-md mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInsight;
