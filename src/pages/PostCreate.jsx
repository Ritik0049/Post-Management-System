
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePost } from '../utils/validators';


function PostCreate({ setPosts }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    const validationError = validatePost({ title, author, content });
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    const newPost = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      title,
      author,
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      timestamp: Date.now(),
    };
    setPosts(prevPosts => [...prevPosts, newPost]);
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-2xl border border-amber-100">
      <h2 className="text-3xl font-bold mb-6 text-amber-800 text-center tracking-tight">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div className="text-red-600 text-sm mb-4 text-center font-medium">{error}</div>}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Title</label>
          <input
            className="w-full border border-amber-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Author</label>
          <input
            className="w-full border border-amber-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Content</label>
          <textarea
            className="w-full border border-amber-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition min-h-[120px]"
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            placeholder="Write your post here..."
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Tags <span className="text-gray-400 font-normal">(comma separated)</span></label>
          <input
            className="w-full border border-amber-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder="e.g. react, javascript, webdev"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-amber-700 transition"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default PostCreate