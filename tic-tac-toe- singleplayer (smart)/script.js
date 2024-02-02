let cell = document.querySelectorAll(".cell button");
let grid = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];
let winc1 = 0,
  winc2 = 0;
let moves = 0;
let chance = true;
let player1 = false,
  player2 = false;

cell.forEach((c) => {
  c.addEventListener("click", (ele) => {
    startgame(ele.target);
  });
});

const rbtn = document.getElementById("resett");
rbtn.addEventListener("click", reset);

function randomnum() {
  let min = 0;
  let max = 8;
  let t = Math.floor(Math.random() * (max - min + 1)) + min;
  return t;
}

function startgame(ele) {
  if (!player1 && !player2 && moves < 9) {
    let bx = ele.querySelector("img");
    let id = parseInt(bx.getAttribute("id"));

    // console.log(id);
    switch (id) {
      case 1:
        grid[0][0] = 1;
        break;
      case 2:
        grid[0][1] = 1;
        break;
      case 3:
        grid[0][2] = 1;
        break;
      case 4:
        grid[1][0] = 1;
        break;
      case 5:
        grid[1][1] = 1;
        break;
      case 6:
        grid[1][2] = 1;
        break;
      case 7:
        grid[2][0] = 1;
        break;
      case 8:
        grid[2][1] = 1;
        break;
      case 9:
        grid[2][2] = 1;
        break;
    }

    bx.src = "./X.png";
    // bx.style.display="block";
    bx.classList.add("after");
    bx.classList.remove("before");
    moves++;
    checkwin();
    if (player1 || player2) {
      return;
    }

    if (!player1 && !player2) {
      setTimeout(() => {
        computer(id);
      }, 0);
    }
  } else {
    reset();
  }
}
function getrandom(min, max) {
  const minCeiled = min;
  const maxFloored = max;
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function checkvalid(id) {
  // console.log(id);
  switch (id) {
    case 1:
      if (grid[0][0] == -1 && grid[0][0] !== 1 && grid[0][0] !== 2) return true;
      else return false;

    case 2:
      if (grid[0][1] == -1 && grid[0][1] != 1 && grid[0][1] != 2) return true;
      else return false;

    case 3:
      if (grid[0][2] == -1 && grid[0][2] != 1 && grid[0][2] != 2) return true;
      else return false;

    case 4:
      if (grid[1][0] == -1 && grid[1][0] != 1 && grid[1][0] != 2) return true;
      else return false;

    case 5:
      if (grid[1][1] == -1 && grid[1][1] != 1 && grid[1][1] != 2) return true;
      else return false;

    case 6:
      if (grid[1][2] == -1 && grid[1][2] != 1 && grid[1][2] != 2) return true;
      else return false;

    case 7:
      if (grid[2][0] === -1 && grid[2][0] !== 1 && grid[2][0] !== 2)
        return true;
      else return false;

    case 8:
      if (grid[2][1] == -1 && grid[2][1] != 1 && grid[2][1] != 2) return true;
      else return false;

    case 9:
      if (grid[2][2] == -1 && grid[2][2] != 1 && grid[2][2] != 2) return true;
      else return false;
  }
}
function randomMove(id) {
  let t = id;

  while (t === id) {
    t = getrandom(1, 9);
    while (!checkvalid(t)) {
      t = getrandom(1, 9);
    }
  }
  switch (t) {
    case 1:
      grid[0][0] = 2;
      break;
    case 2:
      grid[0][1] = 2;
      break;
    case 3:
      grid[0][2] = 2;
      break;
    case 4:
      grid[1][0] = 2;
      break;
    case 5:
      grid[1][1] = 2;
      break;
    case 6:
      grid[1][2] = 2;
      break;
    case 7:
      grid[2][0] = 2;
      break;
    case 8:
      grid[2][1] = 2;
      break;
    case 9:
      grid[2][2] = 2;
      break;
  }

  let comturn = document.getElementById(t);
  comturn.src = "./0.png";
  // comturn.style.display="block";
  comturn.classList.add("after");
  comturn.classList.remove("before");
}

function computer(id) {
  let tempmoves = moves;
  if (!player1 && !player2) {
    chance = !chance;
    if (moves >= 9) {
      alert("Draw");
    //   reset();
      // return;
    } else if (moves === 1) {
      randomMove(id);
    } else if (moves >= 1) {
      tempmoves = defend(moves);
      if (tempmoves === moves) {
        randomMove(id);
      }
    }
    if(moves>0 && moves<9){
    checkwin();
    moves++;
    chance = !chance;
    // console.log(moves);
    }
  } else reset();
}

function defend(moves) {
  if (grid[0][0] == 1) {
    if (grid[0][1] == 1) {
      if (grid[0][2] == -1) {
        grid[0][2] = 2;
        let comturn = document.getElementById(3);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        //
        return moves;
      }
    }
    if (grid[0][2] == 1) {
      if (grid[0][1] == -1) {
        grid[0][1] = 2;
        let comturn = document.getElementById(2);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[1][0] == 1) {
      if (grid[2][0] == -1) {
        grid[2][0] = 2;
        let comturn = document.getElementById(7);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][0] == 1) {
      if (grid[1][0] == -1) {
        grid[1][0] = 2;
        let comturn = document.getElementById(4);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[1][1] == 1) {
      if (grid[2][2] == -1) {
        grid[2][2] = 2;
        let comturn = document.getElementById(9);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][2] == 1) {
      if (grid[1][1] == -1) {
        grid[1][1] = 2;
        let comturn = document.getElementById(5);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
  }
  if (grid[0][1] == 1) {
    if (grid[0][2] == 1) {
      if (grid[0][0] == -1) {
        grid[0][0] = 2;
        let comturn = document.getElementById(1);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[1][1] == 1) {
      if (grid[2][1] == -1) {
        grid[2][1] = 2;
        let comturn = document.getElementById(8);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][1] == 1) {
      if (grid[1][1] == -1) {
        grid[1][1] = 2;
        let comturn = document.getElementById(5);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
  }
  if (grid[0][2] == 1) {
    if (grid[1][2] == 1) {
      if (grid[2][2] == -1) {
        grid[2][2] = 2;
        let comturn = document.getElementById(9);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][2] == 1) {
      if (grid[1][2] == -1) {
        grid[1][2] = 2;
        let comturn = document.getElementById(6);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[1][1] == 1) {
      if (grid[2][0] == -1) {
        grid[2][0] = 2;
        let comturn = document.getElementById(7);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][0] == 1) {
      if (grid[1][1] == -1) {
        grid[1][1] = 2;
        let comturn = document.getElementById(5);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
  }
  if (grid[1][0] == 1) {
    if (grid[1][1] == 1) {
      if (grid[1][2] == -1) {
        grid[1][2] = 2;
        let comturn = document.getElementById(6);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[1][2] == 1) {
      if (grid[1][1] == -1) {
        grid[1][1] = 2;
        let comturn = document.getElementById(5);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][0] == 1) {
      if (grid[0][0] == -1) {
        grid[0][0] = 2;
        let comturn = document.getElementById(1);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
  }
  if (grid[1][1] == 1) {
    if (grid[1][2] == 1) {
      if (grid[1][0] == -1) {
        grid[1][0] = 2;
        let comturn = document.getElementById(4);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][0] == 1) {
      if (grid[0][2] == -1) {
        grid[0][2] = 2;
        let comturn = document.getElementById(3);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][2] == 1) {
      if (grid[0][0] == -1) {
        grid[0][0] = 2;
        let comturn = document.getElementById(1);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][1] == 1) {
      if (grid[0][1] == -1) {
        grid[0][1] = 2;
        let comturn = document.getElementById(2);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
  }
  if (grid[1][2] == 1) {
    if (grid[2][2] == 1) {
      if (grid[0][2] == -1) {
        grid[0][2] = 2;
        let comturn = document.getElementById(3);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
  }
  if (grid[2][0] == 1) {
    if (grid[2][1] == 1) {
      if (grid[2][2] == -1) {
        grid[2][2] = 2;
        let comturn = document.getElementById(9);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
    if (grid[2][2] == 1) {
      if (grid[2][1] == -1) {
        grid[2][1] = 2;
        let comturn = document.getElementById(8);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
  }
  if (grid[2][1] == 1) {
    if (grid[2][2] == 1) {
      if (grid[2][0] == -1) {
        grid[2][0] = 2;
        let comturn = document.getElementById(7);
        comturn.src = "./0.png";
        comturn.classList.add("after");

        moves++;
        return moves;
      }
    }
  }
  return moves;
}

function checkwin() {
  if (
    grid[0][0] == grid[0][1] &&
    grid[0][1] == grid[0][2] &&
    grid[0][0] != -1
  ) {
    if (chance) {
      setTimeout(() => {
        alert("Player 1 wins");
      }, 0);
      winc1++;
      player1 = true;
    } else {
      setTimeout(() => {
        alert("Player 2 wins");
      }, 0);
      winc2++;
      player2 = true;
    }
  } else if (
    grid[1][0] == grid[1][1] &&
    grid[1][1] == grid[1][2] &&
    grid[1][0] != -1
  ) {
    if (chance) {
      setTimeout(() => {
        alert("Player 1 wins");
      }, 0);
      winc1++;
      player1 = true;
    } else {
      setTimeout(() => {
        alert("Player 2 wins");
      }, 0);
      winc2++;
      player2 = true;
    }
  } else if (
    grid[2][0] == grid[2][1] &&
    grid[2][1] == grid[2][2] &&
    grid[2][0] != -1
  ) {
    if (chance) {
      setTimeout(() => {
        alert("Player 1 wins");
      }, 0);
      winc1++;
      player1 = true;
    } else {
      setTimeout(() => {
        alert("Player 2 wins");
      }, 0);
      winc2++;
      player2 = true;
    }
  } else if (
    grid[0][0] == grid[1][0] &&
    grid[1][0] == grid[2][0] &&
    grid[0][0] != -1
  ) {
    if (chance) {
      setTimeout(() => {
        alert("Player 1 wins");
      }, 0);
      winc1++;
      player1 = true;
    } else {
      setTimeout(() => {
        alert("Player 2 wins");
      }, 0);
      winc2++;
      player2 = true;
    }
  } else if (
    grid[0][1] == grid[1][1] &&
    grid[1][1] == grid[2][1] &&
    grid[0][1] != -1
  ) {
    if (chance) {
      setTimeout(() => {
        alert("Player 1 wins");
      }, 0);
      winc1++;
      player1 = true;
    } else {
      setTimeout(() => {
        alert("Player 2 wins");
      }, 0);
      winc2++;
      player2 = true;
    }
  } else if (
    grid[0][2] == grid[1][2] &&
    grid[1][2] == grid[2][2] &&
    grid[0][2] != -1
  ) {
    if (chance) {
      setTimeout(() => {
        alert("Player 1 wins");
      }, 0);
      winc1++;
      player1 = true;
    } else {
      setTimeout(() => {
        alert("Player 2 wins");
      }, 0);
      winc2++;
      player2 = true;
    }
  } else if (
    grid[0][0] == grid[1][1] &&
    grid[1][1] == grid[2][2] &&
    grid[0][0] != -1
  ) {
    if (chance) {
      setTimeout(() => {
        alert("Player 1 wins");
      }, 0);
      winc1++;
      player1 = true;
    } else {
      setTimeout(() => {
        alert("Player 2 wins");
      }, 0);
      winc2++;
      player2 = true;
    }
  } else if (
    grid[0][2] == grid[1][1] &&
    grid[1][1] == grid[2][0] &&
    grid[0][2] != -1
  ) {
    if (chance) {
      setTimeout(() => {
        alert("Player 1 wins");
      }, 0);
      winc1++;
      player1 = true;
    } else {
      setTimeout(() => {
        alert("Player 2 wins");
      }, 0);
      winc2++;
      player2 = true;
    }
  } else if (moves >= 9) {
    setTimeout(alert("Draw"), 200);
    reset();
    // return;
  }

  if (player1 || player2) {
    updatescore();
  }
}

function updatescore() {
  document.getElementById("score1").innerHTML = winc1;
  document.getElementById("score2").innerHTML = winc2;
}

function reset() {
  grid = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
  chance = true;
  cell.forEach((c) => {
    c.querySelector("img").classList.remove("after");
  });

  cell.forEach((c) => {
    c.querySelector("img").classList.add("before");
  });

  moves = 0;

  player1 = false;
  player2 = false;
  // console.log(grid);
}
