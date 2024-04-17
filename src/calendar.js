import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css'

export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      currentDate: new Date()
    }
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDate: new Date(day.year, day.month, day.number) });
  }

  nextMonth = () => {
    this.setState({ currentDate: new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() + 1)) });
  }

  prevMonth = () => {
    this.setState({ currentDate: new Date(this.state.currentDate.setMonth(this.state.currentDate.getMonth() - 1)) });
  }

  returnCurrent = () => {
    this.setState({ currentDate: new Date() });
  }

  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <div className="title">
            <h2>{this.months[this.state.currentDate.getMonth()]} {this.state.currentDate.getFullYear()}</h2>
          </div>
          <div className="tools">
            <button onClick={this.prevMonth}>
              <span className="material-icons">
                arrow_back
                </span>
            </button>
            <p>{this.months[this.state.currentDate.getMonth()].substring(0, 3)} {this.state.currentDate.getDate()}</p>
            <button onClick={this.nextMonth}>
              <span className="material-icons">
                arrow_forward
                </span>
            </button>
            <button onClick={this.returnCurrent}>
              <span className="material-icons">
                return_current
                </span>
            </button>
          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
              this.weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={this.state.currentDate} changeCurrentDay={this.changeCurrentDay} />
        </div>
      </div>
    )
  }
}