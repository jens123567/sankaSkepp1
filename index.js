const rows = 10;
const columns = 10;
const cellSize = "50px";
const boats1 = [];
var showHide1 = 0;

const battleBoard1 = document.querySelector("#board");

battleBoard1.style.display = "grid";
battleBoard1.style.gridTemplateColumns = new Array(columns)
  .fill(cellSize)
  .join(" ");
battleBoard1.style.gridTemplateRows = new Array(rows).fill(cellSize).join(" ");

for (let x = 0; x < columns; x++) {
  for (let y = 0; y < rows; y++) {
    const cell = document.createElement("div");
    battleBoard1.appendChild(cell);
    cell.addEventListener("click", fire);

    cell.id = `s:${x}:${y}`;
    cell.innerHTML = `s:${x}:${y}`;
  }
}

function fire() {
  console.log(this.id);

  if (boats1.includes(this.id)) {
    let pos = boats1.indexOf(this.id);
    let removedItem = boats1.splice(pos, 1);
    document.getElementById(this.id).style.backgroundColor = "#f6f8f9";
  } else {
    if (boats1.length < 24) {
      let newLength = boats1.push(this.id);
      console.log(boats1);
      document.getElementById(this.id).style.backgroundColor = "red";
    } else {
      alert("båtarna är slut");
    }
  }
}

const p1toggle = document.querySelector("#p1done");
p1toggle.addEventListener("click", function () {
  if (showHide == 1) {
    showHide1 = 0;
  }
});
