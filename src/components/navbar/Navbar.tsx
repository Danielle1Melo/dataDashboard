"use client"
import { ChatCircleDots, MagnifyingGlass, Megaphone, User } from "@phosphor-icons/react"
import styled from "../../styles/allStyles/navbar.module.css"

export default function Navbar(){
    return (
        <div className={styled.container}>
           <div className={styled.search}>
                <MagnifyingGlass size={20}/>
                <input type="text" placeholder="Search..." className={styled.inputSearch}/>
           </div>

           <div className={styled.user}> 
                <button className={styled.messageIcon}>
                    <ChatCircleDots size={20} color="#6b7280"/>
                </button>
                <button className={styled.megafoneIcon}>
                    <Megaphone size={20} color="#6b7280"/>
                    <div className={styled.notification}>1</div>
                </button>
                <div className={styled.userName}>
                    <span className={styled.nameSpan}>Dani Melo</span>
                    <p>Admin</p>
                </div>
                <User size={30} color="#ffff" className={styled.userIcon}/>
           </div>
        </div>
    )
}