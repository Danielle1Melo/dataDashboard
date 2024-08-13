"use client"

import { Avatar } from "@mui/material"
import { useSession } from "next-auth/react";

export function Header(){
    const {data : session} = useSession();
    const userProfileImg = session?.user?.image as string;

    return (
        <div>
            <h1>Header</h1>
            
            <Avatar alt={session?.user?.name as string} src={userProfileImg} />
        </div>
    )
}