let game = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

let pl1 = true,
  pl2 = false;
let turn = 1;

let count=0;

let winc1=0,winc2=0;

let winp1 = false,
  winp2 = false;

const r1c1 = document.querySelector('.cell-1 button');
const r1c2 = document.querySelector('.cell-2 button');
const r1c3 = document.querySelector('.cell-3 button');
const r2c1 = document.querySelector('.cell-4 button');
const r2c2 = document.querySelector('.cell-5 button');
const r2c3 = document.querySelector('.cell-6 button');
const r3c1 = document.querySelector('.cell-7 button');
const r3c2 = document.querySelector('.cell-8 button');
const r3c3 = document.querySelector('.cell-9 button');


const rbtn=document.getElementById('resett');

rbtn.addEventListener('click',reset);

function reset() {
	game = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
    ];
    pl1 = true;
    pl2 = false;
    turn = 1;
    count=0;
    winp1 = false;
    winp2 = false;
    r1c1.querySelector("img").classList.remove('after');
    r1c2.querySelector("img").classList.remove('after');
    r1c3.querySelector("img").classList.remove('after');
    r2c1.querySelector("img").classList.remove('after');
    r2c2.querySelector("img").classList.remove('after');
    r2c3.querySelector("img").classList.remove('after');
    r3c1.querySelector("img").classList.remove('after');
    r3c2.querySelector("img").classList.remove('after');
    r3c3.querySelector("img").classList.remove('after');
	r1c1.querySelector("img").classList.add('before');
	r1c2.querySelector("img").classList.add('before');
	r1c3.querySelector("img").classList.add('before');
	r2c1.querySelector("img").classList.add('before');
	r2c2.querySelector("img").classList.add('before');
	r2c3.querySelector("img").classList.add('before');
	r3c1.querySelector("img").classList.add('before');
	r3c2.querySelector("img").classList.add('before');
	r3c3.querySelector("img").classList.add('before');
		
}
 function playgame(plturn, ele, matPos) {

	// console.log(ele);
  let cell = ele.querySelector("img");
  
	let id = (cell || ele).getAttribute("id");
  if (matPos === -1 && !winp1 && count<9) {
		// switch(id){
		// 	case 1:
		// 		plturn == 1 ? game[0][0]=1 : game[0][0]=2;
			
		// }
		if(id==1){
			if(plturn == 1)
			game[0][0]=1;
		else game[0][0]=2;
		}
		else if(id==2){
			if(plturn == 1)
			game[0][1]=1;
		else game[0][1]=2;
    } 
		else if(id==3){
			if(plturn == 1)
			game[0][2]=1;
		else game[0][2]=2;
		}
		else if(id==4){
      if(plturn == 1)
			game[1][0]=1;
		else game[1][0]=2;
    }
		else if(id==5){
      if(plturn == 1)
			game[1][1]=1;
		else game[1][1]=2;
    }
		else if(id==6){
      if(plturn == 1)
			game[1][2]=1;
		else game[1][2]=2;
    }
		else if(id==7){
      if(plturn == 1)
			game[2][0]=1;
		else game[2][0]=2;
    }
		else if(id==8){
      if(plturn == 1)
			game[2][1]=1;
		else game[2][1]=2;
    }
		else if(id==9){
			if(plturn == 1)
			game[2][2]=1;
		else game[2][2]=2;
		}

    if (plturn == 1) {
      cell.src = './x.png';
    //   cell.style.display = 'block';
	cell.classList.add("after");
			turn=2;
			count++;
    }
		else if (plturn == 2) {
      cell.src = './0.png';
      cell.classList.add("after");
      turn =1;
			count++;
			
    }
		
			checkwin();
		 function checkwin() {
			if (game[0][0] == game[0][1] && game[0][1] == game[0][2] && game[0][0] != -1) {
				if (plturn == 1) {
					( setTimeout(alert('Player 1 wins'), 3000));
					winc1++;
				} else if (plturn == 2) {
					(setTimeout(	alert('Player 2 wins'), 3000));
					winc2++;
				}
				winp1=true;winp2=true;
			} else if (game[1][0] == game[1][1] && game[1][1] == game[1][2] && game[1][0] != -1) {
				if (plturn == 1) {
				setTimeout(	alert('Player 1 wins'), 100);
				winc1++;
				} else if (plturn == 2) {
				setTimeout(	alert('Player 2 wins'), 100);
				winc2++;
				}
				winp1=true;winp2=true;
			} else if (game[2][0] == game[2][1] && game[2][1] == game[2][2] && game[2][0] != -1) {
				if (plturn == 1) {
				setTimeout(	alert('Player 1 wins'), 100);
				winc1++;
				} else if (plturn == 2) {
				setTimeout(	alert('Player 2 wins'), 100);
				winc2++;
				}
				winp1=true;winp2=true;
			} else if (game[0][0] == game[1][0] && game[1][0] == game[2][0] && game[0][0] != -1) {
				if (plturn == 1) {
				setTimeout(	alert('Player 1 wins'), 100);
				winc1++;
				} else if (plturn == 2) {
				setTimeout(	alert('Player 2 wins'), 100);
				winc2++;
				}
				winp1=true;winp2=true;
			} else if (game[0][1] == game[1][1] && game[1][1] == game[2][1] && game[0][1] != -1) {
				if (plturn == 1) {
				setTimeout(	alert('Player 1 wins'), 100);
				winc1++;
				} else if (plturn == 2) {
				setTimeout(	alert('Player 2 wins'), 100);
				winc2++;
				}
				winp1=true;winp2=true;
			} else if (game[0][2] == game[1][2] && game[1][2] == game[2][2] && game[0][2] != -1) {
				if (plturn == 1) {
				setTimeout(	alert('Player 1 wins'), 100);
				winc1++;
				} else if (plturn == 2) {
				setTimeout(	alert('Player 2 wins'), 100);
				winc2++;
				}
				winp1=true;winp2=true;
			} else if (game[0][0] == game[1][1] && game[1][1] == game[2][2] && game[0][0] != -1) {
				if (plturn == 1) {
				setTimeout(	alert('Player 1 wins'), 100);
				win1++;
				} else if (plturn == 2) {
				setTimeout(	alert('Player 2 wins'), 100);
				winc2++;
				}
				winp1=true;winp2=true;
			}
			else if (game[0][2] == game[1][1] && game[1][1] == game[2][0] && game[0][2] != -1) {
				if (plturn == 1) {
				setTimeout(	alert('Player 1 wins'), 100);
				winc1++;
				} else if (plturn == 2) {
				setTimeout(	alert('Player 2 wins'), 100);
				winc2++;
				}
				winp1=true;winp2=true;
			}
			else if(count==9 ){
				setTimeout(alert("Draw"),200);
			}
			
		};
  } 
	else if(winp1 || winp2 || count==9){
		alert("Game Over, Refresh to start again");
	}
	else {
	alert('Click on another box! This is already filled');
	}
}

r1c1.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[0][0]);
  updatescore(winc1,winc2);

});
r1c2.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[0][1]);
  updatescore(winc1,winc2);
});
r1c3.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[0][2]);
  updatescore(winc1,winc2);
});
r2c1.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[1][0]);
  updatescore(winc1,winc2);
});
r2c2.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[1][1]);
  updatescore(winc1,winc2);
});
r2c3.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[1][2]);
  updatescore(winc1,winc2);
});
r3c1.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[2][0]);
  updatescore(winc1,winc2);
});
r3c2.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[2][1]);
  updatescore(winc1,winc2);
});
r3c3.addEventListener('click', (ele) => {
  playgame(turn, ele.target,game[2][2]);
  updatescore(winc1,winc2);
});

function updatescore(winc1,winc2) {
	document.getElementById("score1").innerHTML=winc1;
    document.getElementById("score2").innerHTML=winc2;
}
