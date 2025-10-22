
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { validatePost } from '../utils/validators';


function PostEdit({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => String(p.id) === String(id));

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setAuthor(post.author);
      setContent(post.content);
      setTags(post.tags ? post.tags.join(', ') : '');
    }
  }, [post]);

  if (!post) return <div className="text-red-600">Post not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    const validationError = validatePost({ title, author, content });
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    const updatedPost = {
      ...post,
      title,
      author,
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
    };
    setPosts(posts.map(p => String(p.id) === String(id) ? updatedPost : p));
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-amber-800">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input className="w-full border rounded px-3 py-2" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input className="w-full border rounded px-3 py-2" value={author} onChange={e => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea className="w-full border rounded px-3 py-2" value={content} onChange={e => setContent(e.target.value)} required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Tags (comma separated)</label>
          <input className="w-full border rounded px-3 py-2" value={tags} onChange={e => setTags(e.target.value)} />
        </div>
        <button type="submit" className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition">Update Post</button>
      </form>
    </div>
  );
}

export default PostEdit