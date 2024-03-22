// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// Projet de Nejma ARAKI

function appendToDisplay(value) {
    var display = document.querySelector('.calculator__display');
    display.textContent += value;
}

function clear() {
    var display = document.querySelector('.calculator__display');
    display.textContent = '0';
}

function calcul() {
    var display = document.querySelector('.calculator__display');
    display.textContent = eval(display.textContent); 
}

function un_decimal() {
    var display = document.querySelector('.calculator__display');
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

document.querySelectorAll('.calculator__keys button').forEach(button => {
    button.addEventListener('click', function() {
        var action = this.getAttribute('data-action');
        var value = this.textContent;
        
        if (action === 'clear') {
            clear(); 
        } else if (action === 'calculate') {
            calcul(); 
        } else if (action === 'decimal') {
            un_decimal(); 
        }
    });
});

// malheureusement, la suite qui consiste à effectuer les opérations ne marche pas 
function operation(num1, num2, op) {
    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '÷':
            return num1 / num2;
        default:
            return 'Error';
    }
}


// ===============
