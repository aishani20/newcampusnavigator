import React, { useState } from "react";
import Breadcrumbs from "../../common/Breadcrumbs";
import UploadNotes from "./UploadNotes";
import ShowNotes from "./ShowNotes";

const Notes = () => {
  const crumbs = [
    { text: "Home", link: "/" },
    { text: "Academics", link: "/academics" },
    { text: "Notes", link: "/academics/notes" },
  ];

  const branch = "Computer Science";
  const semester = 5;
  const examYear = 2022;
  const notes = [
    { name: "Note 1", url: "https://example.com/note1.pdf" },
    { name: "Note 2", url: "https://example.com/note2.pdf" },
    { name: "Note 3", url: "https://example.com/note3.pdf" },
  ];

  return (
    <div className="h-screen">
      <div>
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div>
        <UploadNotes />
      </div>
      <div>
        <ShowNotes
          branch={branch}
          semester={semester}
          examYear={examYear}
          notes={notes}
        />
      </div>
    </div>
  );
};

export default Notes;
