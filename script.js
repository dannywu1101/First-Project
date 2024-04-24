document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const image = document.querySelector('.sorry-image');
    const question1 = document.querySelector('.sorry-question1');
    const question2 = document.querySelector('.sorry-question2');
    const responseButtons = document.querySelector('.response-buttons');

    let isYesClicked = false;

    noButton.addEventListener('click', () => {
        if (!isYesClicked) {
            let currentScale = parseFloat(getComputedStyle(yesButton).transform.split(',')[0].split('(')[1]) || 1;
            currentScale += 0.2;
            yesButton.style.transform = 'scale(' + currentScale + ')';
            yesButton.style.transition = 'transform 0.3s ease';
        }
    });

    yesButton.addEventListener('click', () => {
        if (!isYesClicked) {
            console.log('Yes button clicked');
            isYesClicked = true;
            const newImageUrl = 'https://i.pinimg.com/originals/0f/25/27/0f25278f0de97b617b9486ba0cf61889.gif';
            image.src = newImageUrl;
            question1.textContent = 'Gracias 😊 tu dime cuando, para arreglar esto!'; 
            question2.textContent = ' ';
            responseButtons.style.display = 'none';
            yesButton.style.transform = 'scale(1)';
        } else {
            console.log('The image and text should have changed already');
        }
    });
});
