const display = document.querySelector(".display");
 const buttons = document.querySelectorAll("btn");
 const specialChars = ["%","*", "/", "-", "+","="];
 let output = "";

 //Define function to calculate based on the button clicked.

 const calculate = (btnValue) =>{

 }
    if(btnValue === "=" && btnValue !== "" ){

      output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
      output = ""
    }else if(btnValue ==="DEL"){

      output = output.toString().slice(0, -1);

    }else{
 const calculate = (btnValue) => {  
      if( output === "" &&  specialChars.includes(btnValue))return;
      output += btnValue;
    }
display.value = output;

 }
 
 //console.log(display,btns)


 //Add event listener to buttons, call calculate() on click.
 buttons.forEach((button) => {
    button.addEventListener("click" ,(e)=> calculate(e.target.dataset.value));
});

