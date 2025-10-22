import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PostCard from '../components/PostCard'
import Pagination from '../components/Pagination'


function PostList({ posts = [], onDeletePost }) {
  const [search, setSearch] = useState('');
  const [author, setAuthor] = useState('');
  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 5;

  // Get unique authors for filter dropdown
  const authors = Array.from(new Set(posts.map(p => p.author))).filter(Boolean);

  const filteredPosts = posts.filter(post => {
    const matchesTitle = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesAuthor = author ? post.author === author : true;
    return matchesTitle && matchesAuthor;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = filteredPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handlePrev = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(totalPages, p + 1));

  // Reset to page 1 if filters/search change
  React.useEffect(() => { setPage(1); }, [search, author]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-amber-800">All Posts</h1>
        <Link to='/posts/new' className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition">+ Add New Post</Link>
      </div>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          className="border rounded px-3 py-2 w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="border rounded px-3 py-2"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="">All Authors</option>
          {authors.map(a => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>
      <div className="space-y-6">
        {paginatedPosts.length ? (
          paginatedPosts.map((post) => (
            <PostCard key={post.id} post={post} onDeletePost={onDeletePost} />
          ))
        ) : (
          <p className="text-gray-500">No posts available</p>
        )}
      </div>
      <Pagination page={page} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
    </div>
  )
}

export default PostList;