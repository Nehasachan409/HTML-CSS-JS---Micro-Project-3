let display=document.getElementById("result");
let buttons=document.querySelectorAll("button");
let buttonArray=Array.from(buttons);
let string="0";
buttonArray.forEach(btn=>{
    
    btn.addEventListener("click",(event)=>{

        if(event.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            display.value=string;
        }else if(event.target.innerHTML=="RESET"){
            string="";
            display.value=string;
        }else if(event.target.innerHTML=="="){
            string=eval(string);
            display.value=string;
        } else{
       string += event.target.innerHTML;
       display.value=string;
        }
    });

});
