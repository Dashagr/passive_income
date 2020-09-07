const countDownDate = new Date('Sept 12, 2020 00:00:00').getTime();

let countDownFunction = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60) / 1000));

    $('#days').html(`0${days}`);
    $('#hours').html(`${hours}`);
    $('#minutes').html(`${minutes}`);
    $('#seconds').html(`${seconds}`);
    if (distance < 0) {
        clearInterval.$('#timer').html(`time is up :(`);
    }
}, 1000);