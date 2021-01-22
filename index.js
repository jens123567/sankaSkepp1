const rows = 10;
const columns = 10;
const cellSize = "50px";
const boats = [];

const battleBoard = document.querySelector("#board");

battleBoard.style.display = "grid";
battleBoard.style.gridTemplateColumns = new Array(columns)
  .fill(cellSize)
  .join(" ");
battleBoard.style.gridTemplateRows = new Array(rows).fill(cellSize).join(" ");

for (let x = 0; x < columns; x++) {
  for (let y = 0; y < rows; y++) {
    const cell = document.createElement("div");
    battleBoard.appendChild(cell);
    cell.addEventListener("click", fire);

    cell.id = `s:${x}:${y}`;
    cell.innerHTML = `s:${x}:${y}`;
  }
}

function fire() {
  console.log(this.id);

  if (boats.includes(this.id)) {
    let pos = boats.indexOf(this.id);
    let removedItem = boats.splice(pos, 1);
    document.getElementById(this.id).style.backgroundColor = "#f6f8f9";
  } else {
    if (boats.length < 24) {
      let newLength = boats.push(this.id);
      console.log(boats);
      document.getElementById(this.id).style.backgroundColor = "red";
    } else {
      alert("båtarna är slut");
    }
  }
}
