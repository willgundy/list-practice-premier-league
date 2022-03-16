export function renderButtonsEl(button) {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('headerButtons');

    buttonEl.textContent = button.name;

    if (button.active === true) {
        buttonEl.classList.add('active-button');
    }

    buttonEl.id = button.name;
    
    return buttonEl;
}