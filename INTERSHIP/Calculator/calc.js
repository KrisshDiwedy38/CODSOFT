let input = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
// -- main calculator function -- 
arr.forEach(buttons => 
   {
      buttons.addEventListener('click' , (click) => 
         {
            if (click.target.innerText === "="){
               string = eval(string)
               input.value = string;
            }
            else if(click.target.innerText === "AC"){
               string = "";
               input.value = string;
            }
            else if(click.target.innerText === "C"){
               string = string.substring(0 , string.length-1);
               input.value=string;
            }
            else{
            string += click.target.innerText;
            input.value = string;
            };
         
      })
   }
)
