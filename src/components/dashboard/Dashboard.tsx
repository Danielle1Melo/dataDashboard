"use client";

import React from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please log in to access the dashboard.</div>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard, {session.user?.name}!</h1>
    </div>
  );
}
