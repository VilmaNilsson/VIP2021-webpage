//Temporary date - we'll change it whenever we know that actual date
const EventDayTime = new Date("Jun 2, 2021 15:00:00").getTime();

//Run our countDown function every second to update the HTML
const countDown = setInterval(() => {

    //Get the local time of the user and get the remaining time between the two dates
    let localTimeNow = new Date().getTime();
    let timeLeft = EventDayTime - localTimeNow;

    //Calculating days, hours, minutes, seconds to the Event day
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(timeLeft % (1000 * 60) / 1000);

    //Add result to the website
    document.getElementById('release-timerDays').textContent = days;
    document.getElementById('release-timerHours').textContent = hours;
    document.getElementById('release-timerMinutes').textContent = minutes;
    document.getElementById('release-timerSeconds').textContent = seconds;

}, 1000)