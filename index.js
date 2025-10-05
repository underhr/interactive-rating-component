const rate = document.getElementById('rate');
const thanks = document.getElementById('thanks');
const buttons = document.querySelectorAll('#buttons button');
const submit = document.getElementById('submit');
let rating = 0;

buttons.forEach(b => {
    b.addEventListener('click', () => {
        buttons.forEach(b => {b.classList.remove('selected')});
        b.classList.add('selected');
        rating = b.innerHTML;
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