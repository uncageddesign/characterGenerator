const equipHelper = (character) => {
  character.start_equipment = []
  fetch('158').
  then(res => res.json())
  .then((data) => {
      character.start_equipment.push(data);
  })
}
