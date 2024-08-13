"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styled from "../../styles/allStyles/login.module.css";

export default function Login() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className={styled.container}>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()} className={styled.buttonSignOut}>
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className={styled.loginContainer}>
      Sign In
    </button>
  );
}
