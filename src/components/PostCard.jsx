import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({ post, onDeletePost }) {
  return (
    <div className="bg-white shadow rounded p-5">
              <div className="mb-2">
                <h2 className="text-xl font-semibold text-amber-900">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-1">By {post.author}</p>
                <p className="mb-2 text-gray-700">{post.content.slice(0, 80)}.....</p>
                {post?.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-3 mt-3">
                <Link to={`/posts/${post.id}`} className="text-amber-800 hover:underline">View</Link>
                <Link to={`/posts/${post.id}/edit`} className="text-blue-700 hover:underline">Edit</Link>
                <button onClick={() => onDeletePost(post.id)} className="text-red-600 hover:underline">Delete</button>
              </div>
            </div>
         
  )
}

export default PostCard