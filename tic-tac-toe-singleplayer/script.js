let cell = document.querySelectorAll('.cell button');
let grid = [
    [-1,-1,-1],[-1,-1,-1],[-1,-1,-1]
];
let winc1=0,winc2=0;
let moves=0;
let chance=true;
let p1=false,p2=false;
function randomnum() {
let min = 0;
let max = 8;
let t=(Math.floor(Math.random() * (max - min + 1)) + min);
return t;
}

function startgame(ele) {
    
    if(!p1 && ! p2)
   
    {
        let bx=ele.querySelector('img');
        let id=parseInt((bx).getAttribute('id'));

        // console.log(id);
        switch(id){
			case 1:
				grid[0][0]=1;
			break;
            case 2:
				grid[0][1]=1;
			break;
            case 3:
				grid[0][2]=1;
			break;
            case 4:
				grid[1][0]=1;
			break;
            case 5:
				grid[1][1]=1;
			break;
            case 6:
				grid[1][2]=1;
			break;
            case 7:
				grid[2][0]=1;
			break;
            case 8:
				grid[2][1]=1;
			break;
            case 9:
				grid[2][2]=1;
			break;

		}
        
        bx.src='./X.png';
        // bx.style.display="block";
        bx.classList.add('after');
        bx.classList.remove('before');
        checkwin();
       

        moves++;
        updatescore();
        if(!p1 && !p2)
        {
        setTimeout(()=> {computer(id)}, 0); 
        }
        
    }
    else {
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
    switch(id){
        case 1:
            if(grid[0][0]==-1 && grid[0][0]!==1 && grid[0][0]!==2)
            return true;
            else return false;
        
        case 2:
            if(grid[0][1]==-1 && grid[0][1]!=1 && grid[0][1]!=2)
            return true;
            else return false;
            
       
        case 3:
            if(grid[0][2]==-1 && grid[0][2]!=1 && grid[0][2]!=2)
            return true;
            else return false;
           
       
        case 4:
         if(grid[1][0]==-1  && grid[1][0]!=1 && grid[1][0]!=2)
            return true;
            else return false;
             
        case 5:
            if(grid[1][1]==-1  && grid[1][1]!=1 && grid[1][1]!=2)
            return true;
            else return false;
            
        
        case 6:
            if(grid[1][2]==-1  && grid[1][2]!=1 && grid[1][2]!=2)
            return true;
            else return false;
           
        
        case 7:
            if(grid[2][0]=== -1  && grid[2][0] !==1 && grid[2][0] !==2)
            return true;
            else return false;
           
        
        case 8:
            if(grid[2][1]==-1  && grid[2][1]!=1 && grid[2][1]!=2)
            return true;
            else return false;
            
        case 9:
         if(grid[2][2]==-1  && grid[2][2]!=1 && grid[2][2]!=2)
            return true;
            else return false;
                  

    }
    


}
function computer(id)
{
    if(!p1 && !p2){
    chance=!chance;
        if(moves===9)
        {
            alert("Draw");
            return;
        }



    let t=id;
   
    while(t===id) 
    {
        t=getrandom(1,9);
        while(!checkvalid(t)){
        t=getrandom(1,9);
        }
    }
    switch(t){
        case 1:
            grid[0][0]=2;
        break;
        case 2:
            grid[0][1]=2;
        break;
        case 3:
            grid[0][2]=2;
        break;
        case 4:
            grid[1][0]=2;
        break;
        case 5:
            grid[1][1]=2;
        break;
        case 6:
            grid[1][2]=2;
        break;
        case 7:
            grid[2][0]=2;
        break;
        case 8:
            grid[2][1]=2;
        break;
        case 9:
            grid[2][2]=2;
        break;

    }
    
    let comturn=document.getElementById(t);
    comturn.src='./0.png';
    // comturn.style.display="block";
    comturn.classList.add('after');
        comturn.classList.remove('before');
    moves++;
    checkwin();
    updatescore();
    chance=!chance;
}
else reset();


}


cell.forEach(c => {
    c.addEventListener('click',(ele) => {
        startgame(ele.target)});
});



function checkwin() {
    if (grid[0][0] == grid[0][1] && grid[0][1] == grid[0][2] && grid[0][0] != -1) {
        if (chance) {
            ( setTimeout(()=>{alert('Player 1 wins')}, 0));
            winc1++;
            p1=true;
        } else{
            (setTimeout(	()=>{alert('Player 2 wins')}, 0));
            winc2++;
            p2=true;
        }
       
    } else if (grid[1][0] == grid[1][1] && grid[1][1] == grid[1][2] && grid[1][0] != -1) {
        if (chance) {
        setTimeout(	()=>{alert('Player 1 wins')}, 0);
        winc1++;
        p1=true;
        } else {
        setTimeout(	()=>{alert('Player 2 wins')}, 0);
        winc2++;
        p2=true;
        }
        
    } else if (grid[2][0] == grid[2][1] && grid[2][1] == grid[2][2] && grid[2][0] != -1) {
        if (chance) {
        setTimeout(	()=>{alert('Player 1 wins')}, 0);
        winc1++;
        p1=true;
        } else  {
        setTimeout(	()=>{alert('Player 2 wins')}, 0);
        winc2++;
        p2=true;
        }
        
    } else if (grid[0][0] == grid[1][0] && grid[1][0] == grid[2][0] && grid[0][0] != -1) {
        if (chance) {
        setTimeout(	()=>{alert('Player 1 wins')}, 0);
        winc1++;
        p1=true;
        } else  {
        setTimeout(	()=>{alert('Player 2 wins')}, 0);
        winc2++;
        p2=true;
        }
        
    } else if (grid[0][1] == grid[1][1] && grid[1][1] == grid[2][1] && grid[0][1] != -1) {
        if (chance) {
        setTimeout(	()=>{alert('Player 1 wins')}, 0);
        winc1++;
        p1=true;
        } else {
        setTimeout(	()=>{alert('Player 2 wins')}, 0);
        winc2++;
        p2=true;
        }
        
    } else if (grid[0][2] == grid[1][2] && grid[1][2] == grid[2][2] && grid[0][2] != -1) {
        if (chance) {
        setTimeout(	()=>{alert('Player 1 wins')}, 0);
        winc1++;
        p1=true;
        } else  {
        setTimeout(	()=>{alert('Player 2 wins')}, 0);
        winc2++;
        p2=true;
        }
        
    } else if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[0][0] != -1) {
        if (chance) {
        setTimeout(	()=>{alert('Player 1 wins')}, 0);
        winc1++;
        p1=true;
        } else  {
        setTimeout(	()=>{alert('Player 2 wins')}, 0);
        winc2++;
        p2=true;
        }
        
    }
    else if (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0] && grid[0][2] != -1) {
        if (chance) {
        setTimeout(	()=>{alert('Player 1 wins')}, 0);
        winc1++;
        p1=true;
        } else  {
        setTimeout(	()=>{alert('Player 2 wins')}, 0);
        winc2++;
        p2=true;
        }
        
    }
    else if(moves>=9 ){
        setTimeout(alert("Draw"),200);
    }
    
};

function updatescore() {
	document.getElementById("score1").innerHTML=winc1;
    document.getElementById("score2").innerHTML=winc2;
}

const rbtn=document.getElementById('resett');

rbtn.addEventListener('click',reset);

function reset() {
	grid = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
    ];
    chance=true;
    cell.forEach(c => {
        c.querySelector('img').classList.remove('after');
    });

    cell.forEach(c => {
        c.querySelector('img').classList.add('before');
    });

   moves=0;

    p1=false;
    p2=false;
    // console.log(grid);
}