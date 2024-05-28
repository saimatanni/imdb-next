"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const SearchBox = () => {
    const router=useRouter()
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form className="flex justify-between max-w-6xl px-5 mx-auto" >
      <input
        type="search"
        placeholder="Search Here.."
        className="flex-1 w-full placeholder-gray-500 bg-transparent rounded-md outline-none h-14"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
