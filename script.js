

let stack = [];

function renderStack() {

    const stackContainer = document.getElementById('stack-container');
    stackContainer.innerHTML = '';

    stack.forEach(element => {

        const div = document.createElement('div');
        div.className = 'stack-element';
        div.textContent = element;
        stackContainer.appendChild(div);

    });
}

function pushElement() {

    const input = document.getElementById('element-input');
    const value = input.value;

    if (value) {
        stack.push(value);
        input.value = '';
        renderStack();
        showMessage(`Pushed: ${value}`);
    } else {
        showMessage('Please enter a value to push.');
    }

}

function popElement() {

    if (stack.length > 0) {
        const value = stack.pop();
        renderStack();
        showMessage(`Popped: ${value}`);
    } else {
        showMessage('Stack is empty.');
    }

}

function peekElement() {

    if (stack.length > 0) {
        const value = stack[stack.length - 1];
        showMessage(`Peek: ${value}`);
    } else {
        showMessage('Stack is empty.');
    }
    
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}