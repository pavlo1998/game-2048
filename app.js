
let arr = [
   {id: '00', name: ''}, {id: '01', name: ''}, {id: '02', name: ''}, {id: '03', name: ''},
   {id: '10', name: ''}, {id: '11', name: ''}, {id: '12', name: ''}, {id: '13', name: ''},
   {id: '20', name: ''}, {id: '21', name: ''}, {id: '22', name: ''}, {id: '23', name: ''},
   {id: '30', name: ''}, {id: '31', name: ''}, {id: '32', name: ''}, {id: '33', name: ''}
]

function createElements(){

let x = Math.floor(Math.random() * 4);
let y = Math.floor(Math.random() * 4);
let box = document.getElementById('' + x + y);
let index = arr.findIndex(obj => obj.id == '' + x + y);
box.innerHTML = 2;
arr[index].name = box.innerHTML;

document.onkeydown = checkKey;

function checkKey(e) 
{

   e = e || window.event;

   if (e.keyCode == '38') 
   {    
      box.innerHTML = '';
      arr[index].name = '';
      console.log(arr[index].name);
      if(arr[arr.findIndex(obj => obj.id == '' + (x - 1) + y)] !== undefined && arr[index].name == '')
      {
         x = x - 1;
         arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
         box = document.getElementById('' + x + y);

         if(arr[arr.findIndex(obj => obj.id == '' + (x - 1) + y)] !== undefined && arr[index].name == '')
         {
            x = x - 1;
            arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
            box = document.getElementById('' + x + y);
                  
            if(arr[arr.findIndex(obj => obj.id == '' + (x - 1) + y)] !== undefined && arr[index].name == '')
            {
               x = x - 1;
               arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
               box = document.getElementById('' + x + y);
            }
         }
      }
      box.innerHTML = 2;
      arr[index].name = box.innerHTML;
      console.log(arr);
   }

   if (e.keyCode == '40') // down
   {
      box.innerHTML = '';
      arr[index].name = '';
      if(arr[arr.findIndex(obj => obj.id == '' + (x + 1) + y)] !== undefined && arr[index].name == '')
      {
         x = x + 1;
         arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)];
         box = document.getElementById('' + x + y);

         if(arr[arr.findIndex(obj => obj.id == '' + (x + 1) + y)] !== undefined && arr[index].name == '')
         {
            x = x + 1;
            arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)];
            box = document.getElementById('' + x + y);
                  
            if(arr[arr.findIndex(obj => obj.id == '' + (x + 1) + y)] !== undefined && arr[index].name == '')
            {
               x = x + 1;
               arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)];
               box = document.getElementById('' + x + y);
            }
         }
      }
      box.innerHTML = 2;
      arr[index].name = box.innerHTML;
      console.log(arr)
   }
   
   if (e.keyCode == '37') 
   {
      box.innerHTML = '';
      arr[index].name = '';
      if(arr[arr.findIndex(obj => obj.id == '' + x + (y - 1))] !== undefined && arr[index].name == '')
      {
         y = y - 1;
         arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
         box = document.getElementById('' + x + y);

         if(arr[arr.findIndex(obj => obj.id == '' + x + (y - 2))] !== undefined && arr[index].name == '')
         {
            y = y - 2;
            arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
            box = document.getElementById('' + x + y);
                  
            if(arr[arr.findIndex(obj => obj.id == '' + x + (y - 3))] !== undefined && arr[index].name == '')
            {
               y = y - 3;
               arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
               box = document.getElementById('' + x + y);
            }
         }
      }
      box.innerHTML = 2;
      arr[index].name = box.innerHTML;
      console.log(arr)
   }
   
   
   if (e.keyCode == '39') 
   {
      box.innerHTML = '';
      arr[index].name = '';
      if(arr[arr.findIndex(obj => obj.id == '' + x + (y + 1))] !== undefined && arr[index].name == '')
      {
         y = y + 1;
         arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
         box = document.getElementById('' + x + y);

         if(arr[arr.findIndex(obj => obj.id == '' + x + (y + 2))] !== undefined && arr[index].name == '')
         {
            y = y + 2;
            arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
            box = document.getElementById('' + x + y);
                  
            if(arr[arr.findIndex(obj => obj.id == '' + x + (y + 3))] !== undefined && arr[index].name == '')
            {
               y = y + 3;
               arr[index] = arr[arr.findIndex(obj => obj.id == '' + x + y)]
               box = document.getElementById('' + x + y);
            }
         }
      }
      box.innerHTML = 2;
      arr[index].name = box.innerHTML;
      console.log(arr)
   }
   console.log(x, y);
}
}
