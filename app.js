
let leftKeyCode = 37;
let rightKeyCode = 39;
let upKeyCode = 38;
let downKeyCode = 40;
let value;


let arr = [
   [ {name: ''}, {name: ''}, {name: ''}, {name: ''} ],
   [ {name: ''}, {name: ''}, {name: ''}, {name: ''} ],
   [ {name: ''}, {name: ''}, {name: ''}, {name: ''} ],
   [ {name: ''}, {name: ''}, {name: ''}, {name: ''} ]
]

function toStr(x, y)
{
   return `${x}${y}`;
}
let score; 

function updateTable()
{
   score = document.getElementById('scores');
   
   for(let x = 0; x < arr.length; x++)
   {
      for(let y = 0; y < arr[x].length; y++)
      {
            box = document.getElementById(toStr(x, y));
            box.innerHTML = arr[x][y].name;
            switch(arr[x][y].name){
               case '2':
                  box.style.backgroundColor = 'grey'
                  
                  break;
               case '4':
                  box.style.backgroundColor = '#b3b3af'
                  
                  break;
               case '8':
                  box.style.backgroundColor = '#f5d33b'
                  score.innerHTML = +score.innerHTML + 4;
                  break;
               case '16':
                  box.style.backgroundColor = '#f0b324'
                  score.innerHTML = +score.innerHTML + 8;
                  break;
               case '32':
                  box.style.backgroundColor = '#d17a08'
                  score.innerHTML = +score.innerHTML + 16;
                  break;
               case '64':
                  box.style.backgroundColor = '#d16608'
                  score.innerHTML = +score.innerHTML + 32;
                  break;
               case '128':
                  box.style.backgroundColor = '#ad3d09'
                  score.innerHTML = +score.innerHTML + 64;
                  break;   
               case '256':
                  box.style.backgroundColor = '#ad2209'
                  score.innerHTML = +score.innerHTML + 128;
                  break;  
               case '512':
                  box.style.backgroundColor = '#6bad09'
                  score.innerHTML = +score.innerHTML + 256;
                  break;
               case '1024':
                  box.style.backgroundColor = '#17ad09'
                  score.innerHTML = +score.innerHTML + 512;
                  break; 
               case '2048':
                  box.style.backgroundColor = '#4386d9'
                  score.innerHTML = +score.innerHTML + 124;
               case '4096':
                  box.style.backgroundColor = '#7743d9'
                  score.innerHTML = +score.innerHTML + 2048;
                  break;            

               default:
                  box.style.backgroundColor = 'white'
                  break;
            }
      }
   }
}

let array = [];
let x;
let y;
let box;
let random;
let a;
let r;

function createElements(){

   

   for(let x = 0; x < arr.length; x++){
      for(let y = 0; y < arr[x].length; y++){
         if(arr[x][y].name == ''){
            array.push({x: x, y: y})
         }
      }
   }

r = Math.floor(Math.random() * array.length);
x = array[r].x;
y = array[r].y;
box = document.getElementById('' + x + y);
random = Math.floor(Math.random() * 2);
random == 0 ? box.innerHTML = 2 : box.innerHTML = 4;
switch(box.innerHTML)
{
   case '2':
      box.style.backgroundColor = 'grey'
      break;
   case '4':
      box.style.backgroundColor = '#b3b3af'
      break;
   default:
      box.style.backgroundColor = 'white'
      break;
}
a = box.innerHTML;
arr[x][y].name = box.innerHTML;

array = [];
document.onkeydown = checkKey;
}

   function checkKey(e) 
   {
      e = e || window.event;
      if(e.keyCode == leftKeyCode ||
         e.keyCode == rightKeyCode ||
         e.keyCode == upKeyCode ||
         e.keyCode == downKeyCode)
      {

      switch(e.keyCode)
      {
         case leftKeyCode:
            
            for(let x = 0; x < arr.length; x++)
            {
               for(let y = 0; y < arr[x].length; y++)
               {
                  if(arr[x][y].name != '')
                  {
                     let symb = arr[x][y].name;
                     arr[x][y].name = ''; 
                     let tempY = y;
                      
                     //  let res;
                     
                     while(tempY > 0 && arr[x][tempY - 1].name == '')
                     { 
                        
                         tempY--;
                        
                     }
                     arr[x][tempY].name = symb;
                     if(tempY > 0 && 
                        arr[x][tempY].name == arr[x][tempY - 1].name)
                     {
                        value = (+arr[x][tempY].name * 2).toString();
                        arr[x][tempY - 1].name = value;
                        arr[x][tempY].name = '';
                        
                     }

                     
                     
                  }
               }
            }
         break;

         case rightKeyCode:
            
            for(let x = arr.length - 1; x >= 0; x--)
            {
               for(let y = arr[x].length - 1; y >= 0; y--)
               {
                  if(arr[x][y].name != '')
                  {
                     let symb = arr[x][y].name;
                     arr[x][y].name = ''; 
                     let tempY = y;
                     while(tempY < 3 && arr[x][tempY + 1].name == '')
                     {
                        tempY++;
                     }  
                     arr[x][tempY].name = symb;

                     if(tempY < 3 && 
                        arr[x][tempY].name == arr[x][tempY + 1].name)
                     {
                        value = (+arr[x][tempY].name * 2).toString();
                        arr[x][tempY + 1].name = value;
                        arr[x][tempY].name = '';
                        
                     }
                  }
               }
            }
         break;

         case upKeyCode:
            
         for(let x = 0; x < arr.length; x++)
            {
               for(let y = 0; y < arr[x].length; y++)
               {
                  if(arr[x][y].name != '')
                  {
                     let symb = arr[x][y].name;
                     arr[x][y].name = ''; 
                     let tempX = x;
                     while(tempX > 0 && arr[tempX - 1][y].name == '')
                     {
                        tempX--;
                     }  
                     arr[tempX][y].name = symb;

                     if(tempX > 0 && 
                        arr[tempX][y].name == arr[tempX - 1][y].name)
                     {
                        value = (+arr[tempX][y].name * 2).toString();
                        arr[tempX - 1][y].name = value;
                        arr[tempX][y].name = '';
                       
                     }
                  }
               }
            }
         break;
         
         case downKeyCode:
            for(let x = arr.length - 1; x >= 0; x--)
            {
               for(let y = arr[x].length - 1; y >= 0; y--)
               {
                  if(arr[x][y].name != '')
                  {
                     let symb = arr[x][y].name;
                     arr[x][y].name = ''; 
                     let tempX = x;
                     while(tempX < 3 && arr[tempX + 1][y].name == '')
                     {
                        tempX++;
                     }  
                     arr[tempX][y].name = symb;

                     if(tempX < 3 && 
                        arr[tempX][y].name == arr[tempX + 1][y].name)
                     {
                        value = (+arr[tempX][y].name * 2).toString();
                        arr[tempX + 1][y].name = value;
                        arr[tempX][y].name = '';
                        
                     }

                  }
               }
            }
            while(x < 3 && arr[x + 1][y].name == '')
            {
               x++;
            }
         break;
      }
      }
      createElements()
      updateTable();
   }
   


