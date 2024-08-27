"use client";
import EventCalendar from "@/components/eventCalendar/EventCalendar";
import styled from "../../../styles/allStyles/student.module.css";
import Annoucements from "@/components/announcements/Announcements";

export default function StudentPage() {
  return (
    <div className={styled.container}>
      <div className={styled.left}>
        <div className={styled.session}> 
            <h1>Danielle (4A)</h1>
        </div>
      </div>

      <div className={styled.right}>
        <EventCalendar />
        <Annoucements />
      </div>
    </div>
  );
}
