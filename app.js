
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

function updateTable()
{
   for(let x = 0; x < arr.length; x++)
   {
      for(let y = 0; y < arr[x].length; y++)
      {
            box = document.getElementById(toStr(x, y));
            box.innerHTML = arr[x][y].name;
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
   


