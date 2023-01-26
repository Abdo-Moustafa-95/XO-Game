let title = document.querySelector(".head");
let turn = "x";
let boxArray = [];

function end(n1, n2, n3) {
  title.innerHTML = boxArray[n1] + " winner";
  document.getElementById("item" + n1).style.backgroundColor = "#000";
  document.getElementById("item" + n2).style.backgroundColor = "#000";
  document.getElementById("item" + n3).style.backgroundColor = "#000";
  setInterval(() => {
    title.innerHTML += ".";
  }, 500);
  setTimeout(() => {
    location.reload();
  }, 2500);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    boxArray[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    boxArray[1] === boxArray[2] &&
    boxArray[2] === boxArray[3] &&
    boxArray[2] !== ""
  ) {
    end(1, 2, 3);
  } else if (
    boxArray[4] === boxArray[5] &&
    boxArray[5] === boxArray[6] &&
    boxArray[5] !== ""
  ) {
    end(4, 5, 6);
  } else if (
    boxArray[7] === boxArray[8] &&
    boxArray[8] === boxArray[9] &&
    boxArray[8] !== ""
  ) {
    end(7, 8, 9);
  } else if (
    boxArray[1] === boxArray[4] &&
    boxArray[4] === boxArray[7] &&
    boxArray[4] !== ""
  ) {
    end(1, 4, 7);
  } else if (
    boxArray[2] === boxArray[5] &&
    boxArray[5] === boxArray[8] &&
    boxArray[5] !== ""
  ) {
    end(2, 5, 8);
  } else if (
    boxArray[3] === boxArray[6] &&
    boxArray[3] === boxArray[9] &&
    boxArray[3] !== ""
  ) {
    end(3, 6, 9);
  } else if (
    boxArray[1] === boxArray[5] &&
    boxArray[5] === boxArray[9] &&
    boxArray[5] !== ""
  ) {
    end(1, 5, 9);
  } else if (
    boxArray[4] === boxArray[5] &&
    boxArray[5] === boxArray[7] &&
    boxArray[5] !== ""
  ) {
    end(4, 5, 7);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML === "") {
    element.innerHTML = "X";
    title.innerHTML = "O";
    turn = "o";
  } else if (turn === "o" && element.innerHTML === "") {
    element.innerHTML = "O";
    title.innerHTML = "X";
    turn = "x";
  }
  winner();
}

let reset = document.getElementById("reset");
reset.onclick = function () {
  location.reload();
};
