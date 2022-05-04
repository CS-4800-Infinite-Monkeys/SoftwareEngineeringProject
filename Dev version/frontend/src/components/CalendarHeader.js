import dayjs from "dayjs";
import React, {useContext} from "react";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
   const {monthIndex, setMonthIndex} = useContext(GlobalContext)
    function handlePrevMonth(){
      setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth(){
      setMonthIndex(monthIndex + 1);
    }
    
    function handleReset(){
      setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
    }
  return (
    <header className="flex">
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">Today</button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
           &#x3c;
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          &#x3e;
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  )
}
