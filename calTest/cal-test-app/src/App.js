import React, { useState } from 'react';
import './App.css';
import { getMonth } from './util'
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import { current } from 'tailwindcss/colors';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  return (
    <div className="App">
      <React.Fragment>
        <div className = "h-screen flex flex-columns">
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

export default App;
