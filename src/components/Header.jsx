import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-100 to-white shadow-md sticky top-0 z-20">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">P</span>
          <span className="text-2xl font-extrabold text-amber-800 tracking-tight">Post Management</span>
        </div>
        <nav className="flex gap-2 sm:gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-150 ${isActive ? 'bg-amber-800 text-white shadow' : 'text-amber-800 hover:bg-amber-200 hover:text-amber-900'}`
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/posts/new"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-150 ${isActive ? 'bg-amber-800 text-white shadow' : 'text-amber-800 hover:bg-amber-200 hover:text-amber-900'}`
            }
          >
            New Post
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header;