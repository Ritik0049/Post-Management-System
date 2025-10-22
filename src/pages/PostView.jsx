
import { useParams, Link } from 'react-router-dom';

function PostView({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => String(p.id) === String(id));

  if (!post) return <div className="text-red-600">Post not found.</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-amber-800">{post.title}</h2>
      <div className="mb-2 text-gray-600 text-sm">By {post.author}</div>
      {post.timestamp && (
        <div className="mb-2 text-gray-400 text-xs">{new Date(post.timestamp).toLocaleString()}</div>
      )}
      <div className="mb-4 text-gray-800 whitespace-pre-line">{post.content}</div>
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">{tag}</span>
          ))}
        </div>
      )}
      <div className="flex gap-4 mt-4">
        <Link to={`/posts/${post.id}/edit`} className="text-blue-700 hover:underline">Edit</Link>
        <Link to="/" className="text-amber-800 hover:underline">Back to List</Link>
      </div>
    </div>
  );
}

export default PostView