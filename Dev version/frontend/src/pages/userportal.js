import "../index.css"
import {useState, useCallback} from 'react'
import Calendar from 'react-calendar'
import './calendar/calendar.css'

//const datesToAddClassTo = [tomorrow, in3Days, in5Days];

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
      return 'react-calendar__month-view__days__day--weekday';    
  }
}

const UserPortal = () => {
    const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <h1>Your Calendar</h1>
      <Calendar
        className="react-calendar"
        onChange={onChange}
        value={value}
        tileClassName={tileClassName}
      />
    </div>
  );
}

export default UserPortal;