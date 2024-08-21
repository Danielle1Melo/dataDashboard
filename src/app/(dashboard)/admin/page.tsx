"use client";
import UserCard from "@/components/userCard/UserCard";
import styled from "../../../styles/allStyles/admin.module.css";

export default function AdminPage() {
  return (
    <div className={styled.container}>
      <div className={styled.left}>
        <div className={styled.cards}>
            <UserCard type="stydent"/>
            <UserCard type="teacher"/>
            <UserCard type="parent"/>
            <UserCard type="staff"/>
        </div>

      </div>

      <div className={styled.right}>r</div>
    </div>
  );
}
