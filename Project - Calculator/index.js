let screen = document.querySelector("h2");
var screenValue = '';

var buttons = document.querySelectorAll("button");
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        
        if(buttonText=='AC'){
            screen.innerText = '';
            screenValue = '';
        }
        else if(buttonText=='.' || buttonText=='0' || buttonText=='1' || buttonText=='2' || buttonText=='3' || buttonText=='4' || buttonText=='5' || buttonText=='6' || buttonText=='7' || buttonText=='8' || buttonText=='9'){
            screenValue+=buttonText;
            screen.innerText+=buttonText;
        }
        else if(buttonText=="DEL"){
            screen.innerText=screen.innerText.slice(0,screen.innerText.length-1);
            screenValue=screenValue.slice(0,screenValue.length-1);
        }
        else if(buttonText=='/' || buttonText=='*' || buttonText=='+' || buttonText=='-'){
            if(screenValue[screenValue.length-1]!=buttonText){
                screen.innerText+= buttonText;
                screenValue+=buttonText;
            }
        }
        else if(buttonText == '√'){
            screen.innerText+=buttonText;
            var number = parseInt(screenValue);
            number = Math.sqrt(number);
            screen.innerText = number;
        }
        else if(buttonText=='='){
            screen.innerText = eval(screenValue);
        }
        else if(buttonText == 'Sin X'){
            var number = parseInt(screenValue);
            number = number * (3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679/180);
            number = Math.sin(number);
            screen.innerText= number;
        }
        else if(buttonText == 'Cos X'){
            var number = parseInt(screenValue);
            number = number * (3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679/180);
            number = Math.cos(number);
            screen.innerText= number;
        }
        else if(buttonText == "tan X"){
            var number = parseInt(screenValue);
            number = number * (3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679/180);
            number = Math.tan(number);
            screen.innerText= number;
        }
        
    })
}