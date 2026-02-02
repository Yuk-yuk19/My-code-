import { useState } from "react";
import { useParams } from "react-router";
import "./Discussion.css";
import logo from "./Logo_Appli.png";

const discussionsData: { [key: string]: { id: number; title: string; author: string; date: string; content: string; replies: { id: number; author: string; date: string; content: string }[] } } = {
  "1": {
    id: 1,
    title: "Who is the best Counter Strike player?",
    author: "Killbuster",
    date: "27 January 2026",
    content: "Hello everyone! I would like to know your opinions on the best Cs:Go player. Share your favorites and why you think they stand out!",
    replies: [
      {
        id: 1,
        author: "Sachi",
        date: "27 January 2026",
        content: "For me it's definitely 'Yukimisu'. His precision and game sense are unmatched!"
      },
      {
        id: 2,
        author: "Scratch",
        date: "28 January 2026",
        content: "I think 'Killbuster' is also a strong contender. His aggressive playstyle really changes the game dynamics."
      }
    ]
  },
  "2": {
    id: 2,
    title: "Tips to Get Better at Video Games",
    author: "Koro",
    date: "24 January 2026",
    content: "Share your best tips for quickly improving at video games! Because I'am so bad lol",
    replies: [
      {
        id: 1,
        author: "Alta",
        date: "24 January 2026",
        content: "Practice regularly and watch tutorials from top players."
      }
    ]
  },
  "3": {
    id: 3,
    title: "Do you have any tips for accessing the Minotaur on Dofus?",
    author: "Yukimisu",
    date: "23 January 2026",
    content: "Does anyone know how to access the Minotaur on Dofus? It's getting complicated...",
    replies: [
      {
        id: 1,
        author: "WaZz",
        date: "23 January 2026",
        content: "You need to complete the Enurado dungeon first to get the key."
      },
      {
        id: 2,
        author: "FaRiIx",
        date: "23 January 2026",
        content: "Make sure your character is at least level 50 to handle the challenges ahead."
      }
    ]
  }
};

export default function Discussion() {
  const { id } = useParams<{ id: string }>();
  const [newReply, setNewReply] = useState("");
  
  const discussion = id ? discussionsData[id] : undefined;


  if (!discussion) {
    return (
      <div className="discussion-container">
        <img src={logo} alt="Gamity Logo" className="logo" />
        <h1>Discussion non trouvée</h1>
      </div>
    );
  }

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReply.trim()) {
      console.log("Nouvelle réponse:", newReply);
      setNewReply("");
      alert("Réponse envoyée !");
    }
  };

  return (
    <div className="discussion-container">
      <img src={logo} alt="Gamity Logo" className="logo" />
      
      <div className="discussion-header">
        <h1>{discussion.title}</h1>
        <div className="discussion-meta">
          <span className="author">Par {discussion.author}</span>
          <span className="date">{discussion.date}</span>
        </div>
      </div>

      <div className="discussion-main">
        <p>{discussion.content}</p>
      </div>

      <div className="replies-section">
        <h2>Réponses ({discussion.replies.length})</h2>
        
        {discussion.replies.map((reply) => (
          <div key={reply.id} className="reply-card">
            <div className="reply-header">
              <span className="reply-author">{reply.author}</span>
              <span className="reply-date">{reply.date}</span>
            </div>
            <p className="reply-content">{reply.content}</p>
          </div>
        ))}
      </div>

      <div className="reply-form-section">
        <h3>Ajouter une réponse</h3>
        <form onSubmit={handleSubmitReply} className="reply-form">
          <textarea
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Écrivez votre réponse ici..."
            rows={4}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
