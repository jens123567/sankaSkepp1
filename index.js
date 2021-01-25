const rows = 10;
const columns = 10;
const cellSize = "50px";
const boats1 = [];
const allCells = [];
let showHide1 = 0;

//brädes färg
let color1 = "#5d9ad4";
//markera båt-färg
let color2 = "#373b40";
//miss färg
let color3 = "#dce8f7";
//träff färg
let color4 = "#e60000";

console.log(allCells);

// genererar brädet
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
    cell.addEventListener("click", switch1);

    cell.id = `s:${x}:${y}`;
    let newLength = allCells.push(cell.id);
    //cell.innerHTML = `s:${x}:${y}`;
  }
}

//ändrar värdet som används i switchen
const p1toggle = document.querySelector("#p1done");
p1toggle.addEventListener("click", function () {
  if (showHide1 == 0) {
    showHide1 = 1;

    //ändrar färgen på rutorna (döljer)
    for (let i = 0; i < boats1.length; i++) {
      let id1 = boats1[i];
      document.getElementById(id1).style.backgroundColor = color1;
      score1();
    }
  } else if (showHide1 == 1) {
    showHide1 = 0;

    //ändrar färgen på rutorna (visar)
    for (let i = 0; i < boats1.length; i++) {
      let id1 = boats1[i];
      document.getElementById(id1).style.backgroundColor = color2;
    }
  }
});

// startar om spelet
const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  console.log("funkar");
  for (let i = 0; i < allCells.length; i++) {
    let id = allCells[i];
    document.getElementById(id).style.backgroundColor = color1;

    let last = boats1.pop();
    showHide1 = 0;
  }
});

//visar poängen
function score1() {
  document.getElementById("#player1Score").innerText = `score:${boats1.length}`;
}

//switch för om man ska placera båtar eller spela
function switch1() {
  switch (showHide1) {
    //case 0 för att placera båtar
    case 0:
      if (boats1.includes(this.id)) {
        let pos = boats1.indexOf(this.id);
        let removedItem = boats1.splice(pos, 1);
        document.getElementById(this.id).style.backgroundColor = color1;
      } else {
        if (boats1.length < 24) {
          let newLength = boats1.push(this.id);
          console.log(boats1);
          document.getElementById(this.id).style.backgroundColor = color2;
        } else {
          alert("båtarna är slut");
        }
      }
      break;
    //case 1 för att spela mot varandra
    case 1:
      score1();

      if (boats1.includes(this.id)) {
        let pos = boats1.indexOf(this.id);
        let removedItem = boats1.splice(pos, 1);
        this.style.backgroundColor = color4;

        score1();
      } else {
        document.getElementById(this.id).style.backgroundColor = color3;
      }

      break;

    default:
      break;
  }
}
