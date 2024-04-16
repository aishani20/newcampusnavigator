import React from 'react';
import { Link } from "react-router-dom";
import Breadcrumbs from '../../common/Breadcrumbs';


const ProgrammingBooks = () => {
    const crumbs = [
      { text: 'Home', link: '/' },
      { text: 'Academics', link: '/academics' },
      { text: 'Programming Books', link: '/academics/programming-books' },
    ];
  
    
const programmingBooks = [
  { id: 1, title: 'Let Us C', author: 'Yashavant Kanetkar', imageUrl: 'https://m.media-amazon.com/images/I/91AOF8enwNL._SY522_.jpg', downloadUrl: 'http://pdvpmtasgaon.edu.in/uploads/dptcomputer/Let%20us%20c%20-%20yashwantkanetkar.pdf' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin', imageUrl: 'https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg', downloadUrl: 'https://thixalongmy.haugiang.gov.vn/media/1175/clean_code.pdf' },
  // Add more books as needed
  { id: 3, title: 'Python Crash Course', author: 'Eric Matthes', imageUrl: 'https://m.media-amazon.com/images/I/51JcFufVwGL._SY445_SX342_.jpg', downloadUrlurl: 'https://bedford-computing.co.uk/learning/wp-content/uploads/2015/10/No.Starch.Python.Oct_.2015.ISBN_.1593276036.pdf' },
  { id: 4, title: 'Head First Java', author: 'Kathy Sierra & Bert Bates', imageUrl: 'https://m.media-amazon.com/images/I/51zTrLnLLDL._SX342_SY445_.jpg', downloadUrlurl: 'https://www.oreilly.com/library/view/head-first-java/9781492091646/' },
  { id: 5, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', imageUrl: 'https://m.media-amazon.com/images/I/41VvIauMuuL._SY445_SX342_.jpg', downloadUrlurl: 'https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf' },
];

  return (
    <div className="min-h-screen">
    <div>
      <Breadcrumbs crumbs={crumbs} />
    </div>
    <div className="container mx-auto px-4 py-8 flex flex-wrap gap-4">
      {programmingBooks.map(book => (
        <div key={book.id} className="book-card w-64 p-4 border rounded-lg shadow-md  focus:border-blue-300 dark:bg-[#32373A] dark:border-[#877C6E] bg-white">
          <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mt-2 dark:text-[#FFFFFF]">{book.title}</h3>
          <p className="text-sm text-gray-600 dark:text-[#C6BDB0]">{book.author}</p>
          <a href={book.downloadUrl} className="mt-4 block w-full text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out dark:bg-[#034CC2]" download>Download</a>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProgrammingBooks;
