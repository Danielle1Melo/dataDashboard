"use client";
import styled from "../../styles/allStyles/announcements.module.css";

const announcements = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    date: "2025-01-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    date: "2025-02-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    date: "2025-04-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Annoucements() {
  return (
    <div className={styled.container}>
      <div className={styled.title}>
        <h1>Annoucements</h1>
        <p>View All</p>
      </div>

      <div className={styled.cardsSession}>
        {announcements.map((announcement) => (
          <div className={styled.cards} key={announcement.id}>
            <div className={styled.cardDescription}>
              <h2>{announcement.title}</h2>
              <p>{announcement.date}</p>
            </div>
            <p>
            {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
