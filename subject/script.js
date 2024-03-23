// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// Projet de Nejma ARAKI
var currentoperation = "add"
var storage = 0

function appendToDisplay(value) {
    var display = document.querySelector('.calculator__display');
    display.textContent += value;
}

function clear() {
    var display = document.querySelector('.calculator__display');
    display.textContent = '0';
}



function store() {
    var display = document.querySelector('.calculator__display');
    storage = display.textContent;

}

function un_decimal() {
    var display = document.querySelector('.calculator__display');
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

document.querySelectorAll('.calculator__keys button').forEach(button => {
    button.addEventListener('click', function() {
        var display = document.querySelector('.calculator__display');
        var action = this.getAttribute('data-action');
        var value = display.textContent;
        
        if (action === 'clear') {
            clear(); 
        } else if (action === 'calculate') {
            value = operation(value, storage, currentoperation)
            console.log(value)
            clear()
            
            display.textContent = value;
        } else if (action === 'decimal') {
            un_decimal(); 
        }
        else if (this.getAttribute('class')=== 'key--operator') {
            currentoperation = action;
            store();
            clear();
        }
        
    });
});

// malheureusement, la suite qui consiste à effectuer les opérations ne marche pas 
function operation(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch(op) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return 'Error';
    }
}


// ===============
