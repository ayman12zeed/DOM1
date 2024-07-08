 function addClass() {
            const input = document.getElementById('classInput').value;
            const paragraph = document.getElementById('paragraph');
            if (input) {
                paragraph.classList.add(input);
                console.log('Added class:', input);
                console.log('Current class list:', paragraph.classList.toString());
            } else {
                alert('Please enter a class name.');
            }
        }

// Visibility Toggle
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    } else {
        element.classList.remove('hidden');
        element.classList.add('visible');
    }
}

// Button Text Change and Disable
function changeButtonText() {
    const button = document.getElementById('clickButton');
    button.innerText = 'Clicked!';
    button.disabled = true;
}

