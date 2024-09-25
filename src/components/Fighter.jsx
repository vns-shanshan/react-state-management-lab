const Fighter = ({
  zombieFighter,
  money,
  setMoney,
  team,
  setTeam,
  setTotalAgility,
  setTotalStrength,
  calculateTeamStrengthTotal,
  calculateTeamAgilityTotal,
}) => {
  const { img, name, price, strength, agility } = zombieFighter;

  function handleAddFighter() {
    // Check if enough money
    if (money < price) {
      console.log("Not enough money");
      return;
    }

    // Add the selected character’s object to the team state array
    const newTeamArr = [...team, zombieFighter];
    setTeam(newTeamArr);
    // console.log(newTeamArr);

    // Upon adding, subtract current fighter price from money.
    setMoney(money - price); // Don't know if is correct????

    // When a character is added to the team, recalculate the total strength.
    setTotalStrength(calculateTeamStrengthTotal(newTeamArr));

    // When a character is added to the team, recalculate the total agility.
    setTotalAgility(calculateTeamAgilityTotal(newTeamArr));
  }

  return (
    <li>
      <img src={img} alt={name} />

      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Strength: {strength}</p>
      <p>Agility: {agility}</p>

      <button onClick={handleAddFighter}>Add</button>
    </li>
  );
};

export default Fighter;
