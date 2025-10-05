const rate = document.getElementById('rate');
const thanks = document.getElementById('thanks');
const buttons = document.querySelectorAll('#buttons button');
const submit = document.getElementById('submit');
let rating = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(b => {b.classList.remove('selected')});
        button.classList.add('selected');
        rating = parseInt(button.textContent, 10);
        if (rating > 0 && !submit.classList.contains('submitHover')) {
            submit.classList.add('submitHover');
        }
    });
});

submit.addEventListener('click', () => {
    if (rating > 0) {
        rate.classList.add('hidden');
        thanks.classList.remove('hidden');
        document.getElementById('ratingDisplay').innerHTML = rating;
    }
});