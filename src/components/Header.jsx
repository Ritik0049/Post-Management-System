import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold text-amber-800">Post Management System</div>

        <nav className="flex gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-amber-800 text-white' : 'text-amber-800 hover:bg-amber-100'}`
            }
          >
            Posts
          </NavLink>

          <NavLink
            to="/posts/new"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-amber-800 text-white' : 'text-amber-800 hover:bg-amber-100'}`
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