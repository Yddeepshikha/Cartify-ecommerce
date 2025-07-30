// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Section from "../components/Section";

function Home() {
  const [novels, setNovels] = useState([]);
  const [academics, setAcademics] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [planners, setPlanners] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBooks = async (query, setter) => {
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`);
    const data = await res.json();
   // console.log(data,"data")
    const books = data.docs
      .filter((doc) => doc.cover_i || doc.isbn?.[0])
      .map((doc) => ({
        id: doc.key,
        name: doc.title,
        author: doc.author_name?.[0] || "Unknown",
        price: Math.floor(Math.random() * 500) + 50,
        image: doc.cover_i
          ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
          : doc.isbn?.[0]
          ? `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-M.jpg`
          : "https://via.placeholder.com/150x220.png?text=No+Cover",
      }));
    setter(books);
  };

  useEffect(() => {
    fetchBooks("fiction novel", setNovels);
    fetchBooks("engineering OR mathematics OR science OR physics OR chemistry", setAcademics);
    fetchBooks("bookmark journal", setBookmarks);
    fetchBooks("planner diary organizer", setPlanners);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      fetchBooks(searchTerm, setNovels);
    }
  };

  return (
    <div className="bg-gray-100 pb-10 overflow-x-hidden">

      {/* Search Bar - 4cm below navbar (mt-20), 4cm above banner (mb-20) */}
      <div className="flex justify-center mt-20 mb-20">
        <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow flex gap-3">
          <input
            type="text"
            placeholder="Search for books, authors, subjects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Banner */}
      <Banner />

      {/* Sections */}
      <Section title="📚 Featured Novels" items={novels} />
      <Section title="📘 Academic Books" items={academics} />
      <Section title="🔖 Bookmarks" items={bookmarks} />
      <Section title="🗓️ Planners" items={planners} />
    </div>
  );
}

export default Home;
