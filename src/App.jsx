// src/App.jsx
import { useState } from "react";
import "./App.css";

import Fighter from "./components/Fighter";
import TeamMember from "./components/TeamMember";

// ---------- Helper function ------------
function calculateTeamStrengthTotal(arr) {
  return arr.reduce((acc, cur) => acc + cur.strength, 0);
}

function calculateTeamAgilityTotal(arr) {
  return arr.reduce((acc, cur) => acc + cur.agility, 0);
}
// -----------------------------------

// ---------- ZombieFighter Component ------------

// -----------------------------------

// ---------- TeamZombieFighter Component ------------

// -----------------------------------

// ----------- App -----------------
const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
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
  ]);

  return (
    <>
      <h1>Zombie Fighters</h1>

      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>

      <h2>Team</h2>
      <ul>
        {team.length === 0 ? (
          <p>Pick some team members!</p>
        ) : (
          team.map((teamMember, index) => (
            <TeamMember
              key={index}
              teamMember={teamMember}
              team={team}
              setTeam={setTeam}
              money={money}
              setMoney={setMoney}
              setTotalStrength={setTotalStrength}
              setTotalAgility={setTotalAgility}
              calculateTeamStrengthTotal={calculateTeamStrengthTotal}
              calculateTeamAgilityTotal={calculateTeamAgilityTotal}
            />
          ))
        )}
      </ul>

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <Fighter
            key={index}
            zombieFighter={zombieFighter}
            money={money}
            setMoney={setMoney}
            team={team}
            setTeam={setTeam}
            setTotalStrength={setTotalStrength}
            setTotalAgility={setTotalAgility}
            calculateTeamStrengthTotal={calculateTeamStrengthTotal}
            calculateTeamAgilityTotal={calculateTeamAgilityTotal}
          />
        ))}
      </ul>
    </>
  );
};
// -----------------------------------

export default App;
