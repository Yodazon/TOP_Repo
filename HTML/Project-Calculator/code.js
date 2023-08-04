function mathFunction(mathNeeded){
    var operators = mathNeeded
        operators ={
        '+':function(a,b){return a+b},
        '-':function(a,b){return a-b},
        '*':function(a,b){return a*b},
        '/':function(a,b){return a/b}
    }
}
function mathIfFunction(opInput, valueStored, valueInputted){
let computedValue = 0
let a = parseInt(valueStored)
let b = parseInt(valueInputted)
    switch(opInput){
        case '+':
            computedValue = a+b;
            break;
        case '-':
            computedValue = a-b;
            break;
        case '/':
            computedValue = a/b;
            break;
        case '*':
            computedValue = a*b;
            break;
    }
    display(Math.floor(computedValue));
    mathReset(Math.floor(computedValue));

}

function inputMathFunction(opInput, valueStored, valueInputted){
    var key = opInput
    console.log(typeof(key))
    var c = c[key](parseInt(valueStored),parseInt(valueInputted))
    math_compute = false;
    return display(mathFunction(c));


}
function display(valueDisplayed){
    const parent = document.querySelector('#displayBox');
    return(parent.textContent = valueDisplayed)
}

let actualInt = '';
let mathInt = '';
function inputValue(number){
    if (math_compute === false){
        //COMPUTE the first number you want to do math with
        //actualInt = parseInt(number) + actualInt;
        actualInt =actualInt + number;
        console.log(typeof(actualInt));
        display(actualInt)
    }else{
        //COMPUTE to get number acting on stored intial value
        //mathInt = parseInt(number) + mathInt;
        mathInt = mathInt + number;
        console.log(typeof(mathInt));;
        display(mathInt)
    }
}

let math_compute = false
let mathOp = '';
function mathInput(value){
    mathOp = value;
    math_compute = true;
}
function mathReset(storedvalue){
    mathInt = '';
    actualInt = storedvalue;

}