"use client"
import Link from "next/link";
import styled from "../../styles/allStyles/menu.module.css"

import { House, GraduationCap, Student, User, UserCircle, Gear, SignOut, Scroll, BookBookmark, Exam, CalendarDots, ChatCircleDots, Megaphone, AddressBookTabs } from "@phosphor-icons/react"

import { role } from "@/lib/data";
import { UsersFour } from "@phosphor-icons/react/dist/ssr";

export const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: <House size={20}  color="#050505" />,
          label: "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <GraduationCap size={20}  color="#050505" />,
          label: "Teachers",
          href: "/list/teachers",
          visible: ["admin", "teacher"],
        },
        {
          icon: <Student size={20}  color="#050505" />,
          label: "Students",
          href: "/list/students",
          visible: ["admin", "teacher"],
        },
        {
          icon: <User size={20}  color="#050505" />,
          label: "Parents",
          href: "/list/parents",
          visible: ["admin", "teacher"],
        },
        // {
        //   icon: "/subject.png",
        //   label: "Subjects",
        //   href: "/list/subjects",
        //   visible: ["admin"],
        // },
        {
          icon: <BookBookmark size={20} color="#050505"  />,
          label: "Classes",
          href: "/list/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: <Scroll size={20} color="#050505" />,
          label: "Lessons",
          href: "/list/lessons",
          visible: ["admin", "teacher"],
        },
        {
          icon: <Exam size={20}  color="#050505" />,
          label: "Exams",
          href: "/list/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <AddressBookTabs size={20}  color="#050505" />,
          label: "Assignments",
          href: "/list/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        // {
        //   icon: "/result.png",
        //   label: "Results",
        //   href: "/list/results",
        //   visible: ["admin", "teacher", "student", "parent"],
        // },
        {
          icon: <UsersFour size={20}  color="#050505" />,
          label: "Attendance",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <CalendarDots size={20}  color="#050505" />,
          label: "Events",
          href: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <ChatCircleDots size={20}  color="#050505" />,
          label: "Messages",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Megaphone size={20}  color="#050505" />,
          label: "Announcements",
          href: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: <UserCircle size={20}  color="#050505" />,
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Gear size={20}  color="#050505" />,
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <SignOut size={20} color="#050505" />,
          label: "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];

export default function Menu(){
    return (
        <div className={styled.container}>
            {menuItems.map((item, idx) => (
                <div key={idx} className={styled.titleSession}>
                    <p className={styled.title}>
                        {item.title}
                    </p>
                    {item.items.map((item, idx) => {
                        if(item.visible.includes(role)){
                            return (
                                <Link 
                                href={item.href}
                                key={idx}
                                className={styled.links}
                                >
                                   { item.icon }
                                   <p className={styled.label}>{item.label}</p>
                                </Link>
                            )
                        }
                    })}
                </div>
            ))}
        </div>
    )
}