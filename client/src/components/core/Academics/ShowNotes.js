import React from 'react';

const ShowNotes = ({ branch, semester, examYear, notes }) => {
    return (
        <div>
            <div>
                <h2>Branch: {branch}</h2>
                <h2>Semester: {semester}</h2>
                <h2>Exam Year: {examYear}</h2>
            </div>
            <div>
                <h3>Notes:</h3>
                <ul>
                    {notes.map((note, index) => (
                        <li key={index}>
                            <a href={note.url} target="_blank" rel="noopener noreferrer">
                                {note.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ShowNotes;

