// src/components/HomeLayout.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaGraduationCap,
  FaBookmark,
  FaCalendarAlt,
  FaUserCircle,
  FaList,
} from "react-icons/fa";

const categories = [
  { name: "All", icon: <FaList /> },
  { name: "Academic Books", icon: <FaGraduationCap /> },
  { name: "Novels", icon: <FaBook /> },
  { name: "Bookmarks", icon: <FaBookmark /> },
  { name: "Planners", icon: <FaCalendarAlt /> },
  { name: "Self-help", icon: <FaUserCircle /> },
];

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-4 px-4">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 mb-4 md:mb-0">
        <div className="bg-white rounded shadow p-4 sticky top-20">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link
                  to="#"
                  className="flex-center gap-2 text-blue-600 hover:underline text-sm"
                >
                  {cat.icon}
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main */}
      <main className="w-full md:w-4/5 md:pl-6">{children}</main>
    </div>
  );
};

export default HomeLayout;
