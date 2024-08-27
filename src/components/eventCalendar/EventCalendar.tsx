"use client"
import { useState } from 'react';
import styled from "../../styles/allStyles/eventCalendar.module.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DotsThree } from '@phosphor-icons/react';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
]

export default function EventCalendar(){
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className={styled.container}>
            <Calendar onChange={onChange} value={value} className={styled.calendar}/>
            <div className={styled.title}>
                <h1>Events</h1>
                <DotsThree size={22} />
            </div>
            <div className={styled.eventSession}>
                {events.map((event) => (
                    <div className={styled.cardEvent} key={event.id}>
                        <div className={styled.cardDescription}>
                            <h1>{event.title}</h1>
                            <p>{event.time}</p>
                        </div>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        
        </div>
    )
}