window.addEventListener("load", calculateTime);

function calculateTime() {
  const date = new Date();

  const dayNumber = date.getDay();
  const monthNumber = date.getMonth();
  let hourNumber = date.getHours();
  let minuteNumber = date.getMinutes();

  const day = document.querySelector(".day");
  const month = document.querySelector(".month");
  const hour = document.querySelector(".hour");
  const minute = document.querySelector(".minute");
  let monthName;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getMonthName() {
    let i = -1;
    while (i < monthNumber) {
      monthName = months[i + 1];
      i++;
    }
  }
  getMonthName();

  function doubleNum() {
    if ((hourNumber.length = 1)) {
      hourNumber = `0${hourNumber}`;
    }
    if ((minuteNumber.length = 1)) {
      minuteNumber = `0${minuteNumber}`;
    }
  }

  doubleNum();

  day.innerHTML = dayNumber - 1;
  month.innerHTML = monthName;
  hour.innerHTML = hourNumber;
  minute.innerHTML = minuteNumber;

  setTimeout(calculateTime, 200);
}
