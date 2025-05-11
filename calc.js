display=getElementById("display");


function appendtoDisplay(input){
    display.value+=input;

}



function calculateResult(){
    display.value=eval(display.value);


}

function clearDisplay(){
    display.value="";
}