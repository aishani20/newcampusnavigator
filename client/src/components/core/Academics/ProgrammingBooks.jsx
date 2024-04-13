import React from 'react';

const programmingBooks = [
  { id: 1, title: 'Let Us C', author: 'Yashavant Kanetkar', imageUrl: 'https://m.media-amazon.com/images/I/91AOF8enwNL._SY522_.jpg', downloadUrl: 'http://pdvpmtasgaon.edu.in/uploads/dptcomputer/Let%20us%20c%20-%20yashwantkanetkar.pdf' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin', imageUrl: 'https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg', downloadUrl: 'https://thixalongmy.haugiang.gov.vn/media/1175/clean_code.pdf' },
  // Add more books as needed
];

const ProgrammingBooks = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-wrap gap-4">
      {programmingBooks.map(book => (
        <div key={book.id} className="book-card w-64 p-4 border rounded-lg shadow-md bg-white">
          <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover rounded-md" />
          <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
          <p className="text-sm text-gray-600">{book.author}</p>
          <a href={book.downloadUrl} className="mt-4 block w-full text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out" download>Download</a>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingBooks;
