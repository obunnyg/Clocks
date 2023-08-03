window.addEventListener("load", calculateTime);

function calculateTime() {
  const date = new Date();

  const dayNumber = date.getDay();
  const monthNumber = date.getMonth();
  const hourNumber = date.getHours();
  const minuteNumber = date.getMinutes();

  console.log(date);

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

  function getMonthName(month) {
    let i = -1;
    while (i < monthNumber) {
      monthName = months[i + 1];
      i++;
    }
  }
  getMonthName();

  day.innerHTML = dayNumber - 1;
  month.innerHTML = monthName;
  hour.innerHTML = hourNumber;
  minute.innerHTML = minuteNumber;
}
