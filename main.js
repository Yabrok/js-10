
var cars = ['Bugatti', 'Corvette', 'BMW', 'Lamborghini', 'Mersedes', 'Tayota'];

var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.input');
var elInput2 = document.querySelector('.input2');
var elText = document.querySelector('.js-text');

var elBtn = document.querySelector('.js-btn')
var elBtn2 = document.querySelector('.js-btn2')

elText.textContent = cars;

elForm.addEventListener('submit', function (evt){
    evt.preventDefault();

    if (elInput.value !== '' && elInput2.value !== '') {
        cars.unshift(elInput.value);
        elText.textContent = cars;

        cars.push(elInput2.value);
        elText.textContent = cars;
        return;
    }
})

elBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    if (elInput.value == '') {
        return;
    }
    cars.unshift(elInput.value);
    elText.textContent = cars;
})

elBtn2.addEventListener('click', function(evt){
    evt.preventDefault();
    if (elInput2.value == '') {
        return;
    }
    cars.push(elInput2.value);
    elText.textContent = cars;
})


