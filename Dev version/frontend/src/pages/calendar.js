import React, { useState, useContext, useEffect} from 'react';
import './calendar.css';
import { getMonth } from '../util'
import CalendarHeader from '../components/CalendarHeader';
import Sidebar from '../components/Sidebar';
import Month from '../components/Month';
import { current } from 'tailwindcss/colors';
import GlobalContext from '../context/GlobalContext';
import EventModal from "../components/EventModal";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex, showEventModal} = useContext(GlobalContext)
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div className="App">
          <React.Fragment>
              {showEventModal && <EventModal />}
        <div className = "h-screen flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <Sidebar />
            <Month month = {currentMonth}/>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Calendar;
