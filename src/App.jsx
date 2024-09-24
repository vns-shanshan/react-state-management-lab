// src/App.jsx
import { useState } from "react";
import "./App.css";

// ------- Data ----------
const zombieFighters = [
  {
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://via.placeholder.com/150/92c952",
  },
  {
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://via.placeholder.com/150/771796",
  },
  {
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://via.placeholder.com/150/24f355",
  },
  {
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/d32776",
  },
  {
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://via.placeholder.com/150/66b7d2",
  },
  {
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://via.placeholder.com/150/56acb2",
  },
  {
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://via.placeholder.com/150/8985dc",
  },
  {
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://via.placeholder.com/150/392537",
  },
  {
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/602b9e",
  },
];
// -----------------------------------

// ---------- Helper function ------------
function calculateTotalStrength(team) {
  return team.reduce((total, fighter) => total + fighter.strength, 0);
}

function calculateTotalAgility(team) {
  return team.reduce((total, fighter) => total + fighter.agility, 0);
}
// -----------------------------------

// ---------- ZombieFighter Component ------------
export function ZombieFighter({
  zombieFighter,
  money,
  setMoney,
  team,
  setTeam,
  setTotalStrength,
  setTotalAgility,
}) {
  const { name, price, strength, agility, img } = zombieFighter;

  function handleAddFighter() {
    // Check if have enough money
    if (money < price) {
      console.log("Not enough money!");
      return;
    }

    // Update the team
    const newTeamArr = [...team, zombieFighter];
    setTeam(newTeamArr);

    // Subtract fighter price from money
    setMoney(money - price);

    // Recalculate total strength
    setTotalStrength(calculateTotalStrength(newTeamArr));

    // Recalculate total agility
    setTotalAgility(calculateTotalAgility(newTeamArr));
  }

  return (
    <li>
      <img src={img} alt={name} />

      <p>{name}</p>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>

      <button onClick={handleAddFighter}>Add</button>
    </li>
  );
}
// -----------------------------------

// ---------- TeamZombieFighter Component ------------
export function TeamZombieFighter({
  teamZombiefighter,
  setTotalStrength,
  setTotalAgility,
  team,
  setTeam,
  money,
  setMoney,
}) {
  const { img, name, price, strength, agility } = teamZombiefighter;

  function handleRemoveFighter() {
    // remove fighter from team array
    const idx = team.indexOf(teamZombiefighter);

    if (idx > -1) {
      const newTeamArr = [...team];
      newTeamArr.splice(idx, 1);
      setTeam(newTeamArr);

      // Recalculate total strength
      setTotalStrength(calculateTotalStrength(newTeamArr));

      // Recalculate total agility
      setTotalAgility(calculateTotalAgility(newTeamArr));

      // Recalculate money
      setMoney(money + price);
    }
  }

  return (
    <li>
      <img src={img} alt={name} />

      <p>{name}</p>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>

      <button onClick={handleRemoveFighter}>Remove</button>
    </li>
  );
}
// -----------------------------------

// ----------- App -----------------
const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  return (
    <>
      <h1>Zombie Fighters</h1>

      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>

      <h2>Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((teamZombiefighter, index) => (
            <TeamZombieFighter
              teamZombiefighter={teamZombiefighter}
              key={index}
              totalStrength={totalStrength}
              setTotalStrength={setTotalStrength}
              setTotalAgility={setTotalAgility}
              team={team}
              setTeam={setTeam}
              money={money}
              setMoney={setMoney}
            />
          ))}
        </ul>
      )}

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <ZombieFighter
            key={index}
            zombieFighter={zombieFighter}
            money={money}
            setMoney={setMoney}
            team={team}
            setTeam={setTeam}
            totalStrength={totalStrength}
            setTotalStrength={setTotalStrength}
            setTotalAgility={setTotalAgility}
          />
        ))}
      </ul>
    </>
  );
};
// -----------------------------------

export default App;
