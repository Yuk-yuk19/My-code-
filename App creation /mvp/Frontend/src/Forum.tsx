import { Link } from "react-router";
import { useState } from "react";
import "./Forum.css";
import logo from "./Logo_Appli.png";

const initialPosts = [
  {
    id: 1,
    title: "Who is the best Counter Strike player?",
    author: "Killbuster",
    date: "27 January 2026",
    replies: 2,
    preview: "Hello everyone! I would like to know your opinions on the best Cs:Go player..."
  },
  {
    id: 2,
    title: "Tips to Get Better at Video Games",
    author: "Koro",
    date: "24 January 2026",
    replies: 1,
    preview: "Share your best tips for quickly improving at video games!"
  },
  {
    id: 3,
    title: "Do you have any tips for accessing the Minotaur on Dofus?",
    author: "Yukimisu",
    date: "23 January 2026",
    replies: 2,
    preview: "Does anyone know how to access the Minotaur on Dofus? It's getting complicated..."
  }
];

export default function Forum() {
  const [posts, setPosts] = useState(initialPosts);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: "", author: "", preview: "" });

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title.trim() && formData.author.trim() && formData.preview.trim()) {
      const newPost = {
        id: Math.max(...posts.map(p => p.id), 0) + 1,
        title: formData.title,
        author: formData.author,
        date: new Date().toLocaleDateString(),
        replies: 0,
        preview: formData.preview
      };
      setPosts([newPost, ...posts]);
      setFormData({ title: "", author: "", preview: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="forum-container">
      <img src={logo} alt="Gamity Logo" className="logo" />

      <h1>Forum</h1>

      <div className="forum-content">
        <p className="forum-description">
          Welcomme to the Gamity forum! Here, you can discuss various topics related to gaming, share tips, and connect with other gamers. Choose a discussion below to get started.
        </p>

        <button 
          className="add-post-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Annuler" : "+ Nouveau post"}
        </button>

        {showForm && (
          <form className="add-post-form" onSubmit={handleAddPost}>
            <input
              type="text"
              placeholder="Titre du post"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Votre nom"
              value={formData.author}
              onChange={(e) => setFormData({...formData, author: e.target.value})}
              required
            />
            <textarea
              placeholder="Aperçu du message..."
              value={formData.preview}
              onChange={(e) => setFormData({...formData, preview: e.target.value})}
              rows={3}
              required
            />
            <button type="submit" className="submit-btn">Publier</button>
          </form>
        )}

        <div className="forum-posts">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/forum/${post.id}`} 
              className="forum-post-link"
            >
              <div className="forum-post">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-preview">{post.preview}</p>
                <div className="post-meta">
                  <span className="post-author">By {post.author}</span>
                  <span className="post-info">
                    <span className="post-date">{post.date}</span>
                    <span className="post-replies">💬 {post.replies} reply{post.replies > 1 ? 'ies' : ''}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

