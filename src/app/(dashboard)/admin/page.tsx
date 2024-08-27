"use client";
import UserCard from "@/components/userCard/UserCard";
import styled from "../../../styles/allStyles/admin.module.css";
import CountChart from "@/components/countChart/CountChart";
import AttendanceChart from "@/components/attendanceChart/AttendanceChart";
import FinanceChart from "@/components/financeChart/FinanceChart";
import EventCalendar from "@/components/eventCalendar/EventCalendar";
import Annoucements from "@/components/announcements/Announcements";

export default function AdminPage() {
  return (
    <div className={styled.container}>
      <div className={styled.left}>
        <div className={styled.cards}>
            <UserCard type="students"/>
            <UserCard type="teachers"/>
            <UserCard type="parents"/>
            <UserCard type="staffs"/>
        </div>

        <div className={styled.graphContainer}>
          <div className={styled.countChart}>
            <CountChart />
          </div>

          <div className={styled.attendanceChart}>
            <AttendanceChart />
          </div>
        </div>

        <div>
            <FinanceChart />
        </div>
      </div>

      <div className={styled.eventCalendar}>
        <EventCalendar />
        <Annoucements />
      </div>

      
    </div>
  );
}
