import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import { seedPosts } from '../data/seed';
import PostList from './pages/PostList';
import PostCreate from './pages/PostCreate';
import PostEdit from './pages/PostEdit';
import PostView from './pages/PostView';
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  const [posts, setPosts] = useLocalStorage('posts', seedPosts);

  // Example delete handler (optional, can be improved)
  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };


  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<PostList posts={posts} onDeletePost={handleDeletePost} />} />
          <Route path='/posts/new' element={<PostCreate setPosts={setPosts} />} />
          <Route path='/posts/:id/edit' element={<PostEdit posts={posts} setPosts={setPosts} />} />
          <Route path='/posts/:id' element={<PostView posts={posts} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
