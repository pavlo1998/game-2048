let array = [[ , , , ], 
             [ , , , ],
             [ , , , ], 
             [ , , , ]];

document.onkeydown = checkKey;
let box;
let x;
let y;
function createElements()
{
   let x =  Math.floor(Math.random() * 4);
   let y =  Math.floor(Math.random() * 4);
   box = document.getElementById('box' + x + y);
   array[x][y] = box;

   box.innerHTML = 2;
  

}

function checkKey(e) {

   e = e || window.event;

   if (e.keyCode == '38') {
      box.innerHTML = '';
      array[x][y] = '';
      x = 0;
      box = document.getElementById('box' + 0 + y)
      box.innerHTML = 2;
      array[0][y] = box;
  
   }
     if (e.keyCode == '40') {
     box.innerHTML = '';
     array[x][y] = '';
     x = 3;
     box = document.getElementById('box' + 3 + y)
     box.innerHTML = 2;
     array[3][y] = box;

   }
     if (e.keyCode == '37') {
     box.innerHTML = '';
     array[x][y] = '';
     y = 0;
     box = document.getElementById('box' + x + 0)
     box.innerHTML = 2;
     array[x][0] = box;

   }
     if (e.keyCode == '39') {
     box.innerHTML = '';
     array[x][y] = '';
     y = 3;
     box = document.getElementById('box' + x + 3)
     box.innerHTML = 2;
     array[x][3] = box;

   }

}
