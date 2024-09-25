const TeamMember = ({
  teamMember,
  team,
  setTeam,
  money,
  setMoney,
  setTotalAgility,
  setTotalStrength,
  calculateTeamStrengthTotal,
  calculateTeamAgilityTotal,
}) => {
  const { img, name, price, strength, agility } = teamMember;

  function handleRemoveFighter() {
    const newTeamArr = team.filter((teamMember) => teamMember.name !== name);
    setTeam(newTeamArr);

    setTotalStrength(calculateTeamStrengthTotal(newTeamArr));
    setTotalAgility(calculateTeamAgilityTotal(newTeamArr));

    setMoney(money + price);
  }

  return (
    <li>
      <img src={img} alt={name} />

      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>

      <button onClick={handleRemoveFighter}>Remove</button>
    </li>
  );
};

export default TeamMember;
