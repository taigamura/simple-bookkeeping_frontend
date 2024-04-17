import axios from 'axios';

function CalendarDays(props) {
  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDates = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    // retrieve from server
    state = {
      data: []
    }

    let retrievedAmount = axios.get('http://localhost:3000/record?username=admin')
      .then(function (res) {
        // console.log(res.data[0].amount);
        const data = res.data[0]
        this.setState({data});
      })
      .catch(function (err) {
        console.log(err);
      });

    // set fields
    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: (new Date(firstDayOfMonth)),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear(),
      amount: retrievedAmount
    }

    currentDates.push(calendarDay);
  }

  return (
    <div className="table-content">
      {
        currentDates.map((day) => {
          return (
            <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                onClick={() => props.changeCurrentDay(day)}>
              <p>{day.number}<br></br>{day.amount}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default CalendarDays;