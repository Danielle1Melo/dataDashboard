"use client"
import { DotsThree } from "@phosphor-icons/react"
import styled from "../../styles/allStyles/userCard.module.css"

export default function UserCard({type}: {type:string}){
    return (
        <div className={styled.container}>
           <div className={styled.more}> 
            <p className={styled.dataSpan}>2024/05</p>
            <DotsThree size={22} color="#fff"/>
           </div>
           <h1>1,234</h1>
           <h2>{type}</h2>
        </div>
    )
}