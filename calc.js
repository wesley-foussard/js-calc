const display= document.querySelector("#display");
const buttons=document.querySelectorAll("buttons");
buttons.forEach((button)=>{
    button.addEventListener("click",()=> {
        switch (button.id){
        case "=":
            display.value=eval(display.value);
        case 'ac':
            display.value="";
        case 'de':
            display.value=display.value.slice(0,-1);
        default:
            display.value+=button.id;   
        }
    })
})