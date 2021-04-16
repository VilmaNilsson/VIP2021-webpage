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
      const times = [
        { days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)) },
        { hours: Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) },
        { minutes: Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60)) },
        { seconds: Math.floor(timeLeft % (1000 * 60) / 1000) },
      ];

      // Checking if times.objects is below 10 or 0 to add an extra 0
      for (let i = 0; i < times.length; i += 1) {
        if (times[i].days < 10) {
          times[i].days = `0${times[i].days}`;
        }
        if (times[i].hours < 10) {
          times[i].hours = `0${times[i].hours}`;
        }
        if (times[i].minutes < 10) {
          times[i].minutes = `0${times[i].minutes}`;
        }
        if (times[i].seconds < 10) {
          times[i].seconds = `0${times[i].seconds}`;
        }

        if (times[i].days === 0) {
          times[i].days = '00';
        }
        if (times[i].hours === 0) {
          times[i].hours = '00';
        }
        if (times[i].minutes === 0) {
          times[i].minutes = '00';
        }
        if (times[i].seconds === 0) {
          times[i].seconds = '00';
        }
      }

      // Add result to the website
      document.getElementById('release-timerDays').textContent = times[0].days;
      document.getElementById('release-timerHours').textContent = times[1].hours;
      document.getElementById('release-timerMinutes').textContent = times[2].minutes;
      document.getElementById('release-timerSeconds').textContent = times[3].seconds;
    }, 1000);
  });
