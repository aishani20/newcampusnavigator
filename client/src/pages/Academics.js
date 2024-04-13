import React from 'react'
import { Link } from 'react-router-dom'

const Academics = () => {
    return (
        <div>
            <Link className="border" to="/academics/programming-books">ProgrammingBooks</Link>  
            <Link className="border" to="/academics/question-paper">QuestionPaper</Link>
        </div>
      );
}

export default Academics

