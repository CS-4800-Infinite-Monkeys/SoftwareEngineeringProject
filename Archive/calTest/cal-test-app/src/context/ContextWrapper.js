import React, {useEffect, useState, useReducer} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { values } from "lodash";

function savedEventsReducer(state, { type, payload }) {
    switch (type) {
        case "push":
            return [...state, payload];
        case "update":
            return state.map(evt => evt.id === payload.id ? payload : evt);
        case "delete":
            return state.filter(evt => evt.id !== payload.id);
        default:
            throw new Error();
    }
}

function initEvents() {
    const storageEvents = localStorage.getItem("savedEvents")
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents
}

export default function ContextWrapper(props) {
    const[monthIndex, setMonthIndex] = useState(dayjs().month());
    const[smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents);

    useEffect(() => {
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    }, [savedEvents])

    useEffect(() => {
        if(smallCalendarMonth !== null){
            setMonthIndex(smallCalendarMonth)
        }
    }, [smallCalendarMonth])
  return (
      <GlobalContext.Provider value ={{
            monthIndex, 
            setMonthIndex, 
            setSmallCalendarMonth, 
            smallCalendarMonth,
            daySelected,
          setDaySelected,
          showEventModal,
          setShowEventModal,
          dispatchCalEvent,
          selectedEvent,
          setSelectedEvent,
            savedEvents
            }}>
          {props.children}
      </GlobalContext.Provider>
  )
}
