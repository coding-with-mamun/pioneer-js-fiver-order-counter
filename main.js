const fiverr_order = document.getElementById("fiverr_order");
const counter = document.querySelector(".counter");

let countdownInterval;

// Submit form
fiverr_order.addEventListener("submit", function (e) {
  e.preventDefault();

  let dateAndTime = this.querySelector('input[type="datetime-local"]').value;

  // Clear existing interval if any
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    let startTime = new Date();
    let endTime = new Date(dateAndTime);

    let timeDifference = endTime.getTime() - startTime.getTime();

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      alert("Time is up!");
      return;
    }

    let totalSecond = Math.floor(timeDifference / 1000);
    let totalMinute = Math.floor(totalSecond / 60);
    let totalHours = Math.floor(totalMinute / 60);
    let totalDay = Math.floor(totalHours / 24);

    // Get current time
    let hours = totalHours - totalDay * 24;
    let minute = totalMinute - totalDay * 24 * 60 - hours * 60;
    let second =
      totalSecond - totalDay * 24 * 60 * 60 - hours * 60 * 60 - minute * 60;

    let [dayTens, dayUnits] = formatTwoDigits(totalDay);
    let [hourTens, hourUnits] = formatTwoDigits(hours);
    let [minuteTens, minuteUnits] = formatTwoDigits(minute);
    let [secondTens, secondUnits] = formatTwoDigits(second);

    counter.innerHTML = `
      <div class="day count_parent">
        <div class="count_item">
          <div class="count_box">
            <h4>${dayTens}</h4>
            <div class="divider"></div>
          </div>
          <div class="count_box">
            <h4>${dayUnits}</h4>
            <div class="divider"></div>
          </div>
        </div>
        <h4 class="count_name">Days</h4>
      </div>

      <div class="count_border">
        <h5>:</h5>
      </div>

      <div class="hours count_parent">
        <div class="count_item">
          <div class="count_box">
            <h4>${hourTens}</h4>
            <div class="divider"></div>
          </div>
          <div class="count_box">
            <h4>${hourUnits}</h4>
            <div class="divider"></div>
          </div>
        </div>
        <h4 class="count_name">Hours</h4>
      </div>
      <div class="count_border">
        <h5>:</h5>
      </div>

      <div class="minutes count_parent">
        <div class="count_item">
          <div class="count_box">
            <h4>${minuteTens}</h4>
            <div class="divider"></div>
          </div>
          <div class="count_box">
            <h4>${minuteUnits}</h4>
            <div class="divider"></div>
          </div>
        </div>
        <h4 class="count_name">Minutes</h4>
      </div>
      <div class="count_border">
        <h5>:</h5>
      </div>

      <div class="second count_parent">
        <div class="count_item">
          <div class="count_box">
            <h4>${secondTens}</h4>
            <div class="divider"></div>
          </div>
          <div class="count_box">
            <h4>${secondUnits}</h4>
            <div class="divider"></div>
          </div>
        </div>
        <h4 class="count_name">Seconds</h4>
      </div>
    `;
  }, 1000);
});
