/* eslint-disable no-mixed-operators */
// Temporary date - we'll change it whenever we know that actual date
const newReq = new Request('/release/getTime');
fetch(newReq)
  .then((response) => response.json())
  .then((response) => {
    // eslint-disable-next-line max-len
    // Response is the date of the release day, I (Petter) choose to get the time in the server so the that the date and time will be the same no matter where you are in the world - that is so the time is set to the servers local time
    const EventDayTime = response;

    // Run our countDown function every second to update the HTML
    // eslint-disable-next-line no-unused-vars
    const countDown = setInterval(() => {
      // Get the local time of the user and get the remaining time between the two dates
      const localTimeNow = new Date().getTime();
      const timeLeft = EventDayTime - localTimeNow;

      // Calculating days, hours, minutes, seconds to the Event day
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(timeLeft % (1000 * 60) / 1000);

      // Add result to the website
      document.getElementById('release-timerDays').textContent = days;
      document.getElementById('release-timerHours').textContent = hours;
      document.getElementById('release-timerMinutes').textContent = minutes;
      document.getElementById('release-timerSeconds').textContent = seconds;
    }, 1000);
  });
