let BlurExcept = (elements, expcept) => {
    for (const key in elements) {
        const element = elements[key];
        if (element !== expcept && typeof element === 'object') {
            element.classList.add('blur');
        }
    }
} 

let UnBlur = (elements) => {
    for (const element of elements) {
        if(typeof element === 'object') {
        element.classList.remove('blur');}
    }
}

document.querySelectorAll('section').forEach(section => {
    let cards = section.querySelectorAll('.card');
    for (const card of cards) {
        card.addEventListener('mouseover', function () {
            BlurExcept(cards, card);
        });
        card.addEventListener('mouseout', function () {
            UnBlur(cards);
        });
    }
});
