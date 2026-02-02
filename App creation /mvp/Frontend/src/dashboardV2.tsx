import InfoCard from "./dashboard";
import Naviguation from "./naviguation";
import "./dashboard.css"
import { useState } from 'react';

export default function DashboardV2() {
  const [cards, setCards] = useState([
    {
      title: "Valorant",
      description: "FPS compÃ©titif",
      slots: 5
    },
    {
      title: "Minecraft",
      description: "Jeu de construction",
      slots: 3
    },
    {
      title: "GTA V",
      description: "Open world action",
      slots: 4
    },
        {
      title: "GTA V",
      description: "Open world action",
      slots: 4
    },  
  ]);

  const [showForm, setShowForm] = useState(false);
  const [game, setGame] = useState("Valorant");
  const [slots, setSlots] = useState(1);

  const addCard = () => {
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCards([...cards, { title: game, description: "", slots: slots }]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className="create-card-container">
        {!showForm && <button onClick={addCard} className="create-card-btn">Create a new card</button>}
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="create-card-form">
          <label>
            Game:
            <select value={game} onChange={(e) => setGame(e.target.value)}>
              <option value="Valorant">Valorant</option>
              <option value="Minecraft">Minecraft</option>
              <option value="GTA V">GTA V</option>
            </select>
          </label>
          <label>
            Slots:
            <input type="number" value={slots} onChange={(e) => setSlots(parseInt(e.target.value, 10))} min="1" />
          </label>
          <button type="submit">Add</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      )}
      <div className="cards">
        {cards.map((card, index) => (<InfoCard key={index} title={card.title} description={card.description} slots={card.slots} />))}

      </div>
      <footer>
        <Naviguation />
      </footer>
    </div>
  );
}