
let N = 10;
let state = new Array(N*N).fill(0);
let op = new Array(N*N).fill(0);
let boxes = document.querySelectorAll(".box");
let lefts = document.querySelectorAll(".left");
let rights = document.querySelectorAll(".right");
let ups = document.querySelectorAll(".up");
let downs = document.querySelectorAll(".down");
for (let k = 20; k < 80; k++) {
  boxes.item(k).textContent = "-";
  updateC(k);
}
boxes.item(43).textContent = "+";
updateC(43);
function updateC(ind) {
  var j = ind%N;
  var i = parseInt((ind-j)/N);
  state[getIndex(i,j)] = !state[getIndex(i,j)];
  op[getIndex(i,j)] = 1-op[getIndex(i,j)];
  
  updateNB(i,j+1,state[getIndex(i,j)],'left');
  updateNB(i,j-1,state[getIndex(i,j)],'right');
  updateNB(i-1,j,state[getIndex(i,j)],'down');
  updateNB(i+1,j,state[getIndex(i,j)],'up');
  
}
function getIndex(i,j,) {
  if(i == -1)
  {
    i=N-1;
  }
  if(j == -1)
  {
    j=N-1;
  }
  return (i%N)*N+(j%N);
}
function updateNB(i,j,NBstate,dir) {
  switch (dir) {
    case 'left':
      if(state[getIndex(i,j)] == NBstate)
      {
        lefts.item(getIndex(i,j)).style.opacity = '0.0';
        rights.item(getIndex(i,j-1)).style.opacity = '0.0';
      }
      else
      {
        lefts.item(getIndex(i,j)).style.opacity = '0.1';
        rights.item(getIndex(i,j-1)).style.opacity = '0.1';
      }
      break;
    case 'down':
      if(state[getIndex(i,j)] == NBstate)
      {
        downs.item(getIndex(i,j)).style.opacity = '0.0';
        ups.item(getIndex(i+1,j)).style.opacity = '0.0';
      }
      else
      {
        downs.item(getIndex(i,j)).style.opacity = '0.1';
        ups.item(getIndex(i+1,j)).style.opacity = '0.1';
      }
      break;
    case 'up':
      if(state[getIndex(i,j)] == NBstate)
      {
        ups.item(getIndex(i,j)).style.opacity = '0.0';
        downs.item(getIndex(i-1,j)).style.opacity = '0.0';
      }
      else
      {
        ups.item(getIndex(i,j)).style.opacity = '0.1';
        downs.item(getIndex(i-1,j)).style.opacity = '0.1';
      }
      break;
    case 'right':
      if(state[getIndex(i,j)] == NBstate)
      {
        rights.item(getIndex(i,j)).style.opacity = '0.0';
        lefts.item(getIndex(i,j+1)).style.opacity = '0.0';
      }
      else
      {
        rights.item(getIndex(i,j)).style.opacity = '0.1';
        lefts.item(getIndex(i,j+1)).style.opacity = '0.1';
      }
      break;
    default:
  }
}
window.addEventListener("DOMContentLoaded", function() {
  
    Array.from(boxes, function(box) {
      box.addEventListener("click", function() { 
        if(this.textContent == "+") {
          this.textContent = "-";
          //this.style.backgroundColor = "red";
        }
        else {
            this.textContent = "+";
            //this.style.backgroundColor = "blue";
        }
        //boxes.item(parseInt(this.classList[1])).style.backgroundColor = 'rgba(256, 0, 0, 0.10)';
        updateC(parseInt(this.classList[1]));
        //alert();
       // boxes.item(parseInt(this.classList[1])).textContent = "j";
      });
    });
  });