window.addEventListener("load", calculateTime);

function calculateTime() {
  window.addEventListener("load", doubleNum);
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
    return;
  }
  getMonthName();

  let hourNum;
  let minuteNum;

  function doubleNum() {
    const strHour = String(hourNumber);
    if (strHour.length === 1) {
      hourNum = `0${hourNumber}`;
    } else {
      hourNum = date.getHours();
    }
    const strMinute = String(minuteNumber);
    if (strMinute.length === 1) {
      minuteNum = `0${minuteNumber}`;
    } else {
      minuteNum = date.getMinutes();
    }
  }
  doubleNum();

  day.innerHTML = dayNumber - 1;
  month.innerHTML = monthName;
  hour.innerHTML = hourNum;
  minute.innerHTML = minuteNum;

  setTimeout(calculateTime, 200);
}
