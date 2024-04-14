// import React, { useState } from 'react';

// const SemesterPage = () => {
//   const [selectedSemester, setSelectedSemester] = useState('');
//   const [selectedBranch, setSelectedBranch] = useState('');
//   const [books, setBooks] = useState([]);
//   const allBranches = ['CSE', 'Mechanical', 'Civil', 'EC', 'EE', 'AI', 'IoT'];

//   const handleSemesterSelection = (semester) => {
//     setSelectedSemester(semester);
//     setSelectedBranch(''); // Clear branch selection
//     setBooks([]); // Reset books
//   };

//   const handleBranchSelection = (branch) => {
//     setSelectedBranch(branch);
//     // Fetch books for the selected branch and semester (replace with actual API call)
//     setBooks([]); // For demonstration, reset books
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">Semester-wise Books</h1>

//       {/* Semester Selection */}
//       <div className="flex space-x-4 mb-6">
//         <button
//           className={`rounded-lg px-4 py-2 bg-blue-500 text-white ${selectedSemester === '1&2' ? 'bg-blue-700' : ''}`}
//           onClick={() => handleSemesterSelection('1&2')}
//         >
//           Semester 1&2
//         </button>
//         <button
//           className={`rounded-lg px-4 py-2 bg-blue-500 text-white ${selectedSemester === '3&4' ? 'bg-blue-700' : ''}`}
//           onClick={() => handleSemesterSelection('3&4')}
//         >
//           Semester 3&4
//         </button>
//         <button
//           className={`rounded-lg px-4 py-2 bg-blue-500 text-white ${selectedSemester === '5&6' ? 'bg-blue-700' : ''}`}
//           onClick={() => handleSemesterSelection('5&6')}
//         >
//           Semester 5&6
//         </button>
//         <button
//           className={`rounded-lg px-4 py-2 bg-blue-500 text-white ${selectedSemester === '7&8' ? 'bg-blue-700' : ''}`}
//           onClick={() => handleSemesterSelection('7&8')}
//         >
//           Semester 7&8
//         </button>
//       </div>

//       {/* Branch Filter Dropdown */}
//       {selectedSemester && (
//         <div className="mb-6">
//           <h2 className="text-xl font-bold mb-4">Filter by Branch:</h2>
//           <select
//             value={selectedBranch}
//             onChange={(e) => handleBranchSelection(e.target.value)}
//             className="rounded-lg px-4 py-2 bg-blue-100 text-blue-700 focus:outline-none focus:bg-blue-200 hover:bg-blue-200 transition duration-300"
//           >
//             <option value="">Select Branch</option>
//             {allBranches.map((branch) => (
//               <option key={branch} value={branch}>{branch}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {/* Display Books */}
//       <div>
//         {books.length === 0 ? (
//           <p className="text-gray-500">No books available for the selected semester and branch.</p>
//         ) : (
//           <ul>
//             {books.map((book) => (
//               <li key={book.id}>{book.title}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SemesterPage;

// import React, { useState } from 'react';

// const SemesterPage = () => {
//   const [selectedSemester, setSelectedSemester] = useState('');
//   const [selectedBranch, setSelectedBranch] = useState('');
//   const [books, setBooks] = useState([]);
//   const allBranches = ['CSE', 'Mechanical', 'Civil', 'EC', 'EE', 'AI', 'IoT'];

//   // Dummy data for books
//   const dummyBooks = [
//     {
//       id: 1,
//       title: 'Basic Electrical Engineering',
//       author: 'VK Mehta',
//       branch: 'CSE',
//       imageUrl: 'https://m.media-amazon.com/images/I/914KyyGbzDL._SY522_.jpg',
//     },
//     {
//       id: 2,
//       title: 'Engineering Mathematics',
//       author: 'BS Grewal',
//       branch: 'EE',
//       imageUrl: 'https://m.media-amazon.com/images/I/51QIQ5F3+SL._SY445_SX342_.jpg',
//     },
//     {
//       id: 3,
//       title: 'Engineering Drawing',
//       author: 'ND Bhatt',
//       branch: 'Mechanical',
//       imageUrl: 'https://bookstation.in/cdn/shop/products/5708_front.jpg?v=1674973268&width=1200',
//     },
//   ];

//   const handleSemesterSelection = (semester) => {
//     setSelectedSemester(semester);
//     setSelectedBranch(''); // Clear branch selection

//     if (semester === '1&2') {
//       // Dummy data for books (replace with actual API call)
//       setBooks(dummyBooks.filter(book => book.branch === selectedBranch));
//     } else {
//       setBooks([]);
//     }
//   };

//   const handleBranchSelection = (branch) => {
//     setSelectedBranch(branch);
//     // Fetch books for the selected branch and semester (replace with actual API call)
//     // For demonstration, using the same dummyBooks data
//     setBooks(dummyBooks.filter(book => book.branch === branch && book.semester === selectedSemester));
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">Semester-wise Books</h1>

//       {/* Semester Selection */}
//       <div className="flex space-x-4 mb-6">
//         <button
//           className={`rounded-lg px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 focus:outline-none ${selectedSemester === '1&2' ? 'bg-blue-700' : ''}`}
//           onClick={() => handleSemesterSelection('1&2')}
//         >
//           Semester 1&2
//         </button>
//         <button
//           className={`rounded-lg px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 focus:outline-none ${selectedSemester === '3&4' ? 'bg-blue-700' : ''}`}
//           onClick={() => handleSemesterSelection('3&4')}
//         >
//           Semester 3&4
//         </button>
//         <button
//           className={`rounded-lg px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 focus:outline-none ${selectedSemester === '5&6' ? 'bg-blue-700' : ''}`}
//           onClick={() => handleSemesterSelection('5&6')}
//         >
//           Semester 5&6
//         </button>
//         <button
//           className={`rounded-lg px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 focus:outline-none ${selectedSemester === '7&8' ? 'bg-blue-700' : ''}`}
//           onClick={() => handleSemesterSelection('7&8')}
//         >
//           Semester 7&8
//         </button>
//       </div>

    
      
//       {/* Branch Filter Dropdown */}
//       {selectedSemester && (
//         <div className="mb-6">
//           <h2 className="text-xl font-bold mb-4">Filter by Branch:</h2>
//           <select
//             value={selectedBranch}
//             onChange={(e) => handleBranchSelection(e.target.value)}
//             className="rounded-lg px-4 py-2 bg-blue-100 text-blue-700 focus:outline-none focus:bg-blue-200 hover:bg-blue-200 transition duration-300"
//           >
//             <option value="">Select Branch</option>
//             {allBranches.map((branch) => (
//               <option key={branch} value={branch}>{branch}</option>
//             ))}
//           </select>
//         </div>
//       )}
    
//         {/* Display Books */}
//         {books.length === 0 ? (
//         <p className="text-gray-500">No books available for the selected semester and branch.</p>
//       ) : (
//         <div className="flex flex-wrap gap-4">
//           {books.map((book) => (
//             <div key={book.id} className="w-1/4 bg-white rounded-lg shadow-md p-4">
//               <img src={book.imageUrl} alt={book.title} className="w-full h-40 mb-2" />
//               <h3 className="text-sm font-semibold mb-1">{book.title}</h3>
//               <p className="text-gray-500">Author: {book.author}</p>
//               <p className="text-gray-500">Branch: {book.branch}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SemesterPage;


//new code
import React, { useState } from 'react';
import Breadcrumbs from "../../common/Breadcrumbs";
import { LuEye } from "react-icons/lu";
import { Link } from 'react-router-dom';


const SemesterPage = () => {
  const crumbs = [
    { text: "Home", link: "/" },
    { text: "Academics", link: "/academics" },
    { text: "SemesterBooks", link: "/academics/semester-books" },
  ];
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [books, setBooks] = useState([]);
  const allBranches = ['CSE', 'Mechanical', 'Civil', 'EC', 'EE', 'AI', 'IoT'];

  // Dummy data for books
  const dummyBooks = [
    {
      id: 1,
      title: 'Basic Electrical Engineering',
      author: 'VK Mehta',
      branch: 'CSE',
      semester: '1&2',
      imageUrl: 'https://m.media-amazon.com/images/I/914KyyGbzDL._SY522_.jpg',
      downloadUrl: 'http://www.pce-fet.com/common/library/books/39/173_BasicElectricalEngineeringbyV.K.MehtaandRohitMehta.pdf',
    },
    {
      id: 2,
      title: 'Engineering Mathematics',
      author: 'BS Grewal',
      branch: 'EE',
      semester: '1&2',
      imageUrl: 'https://m.media-amazon.com/images/I/51QIQ5F3+SL._SY445_SX342_.jpg',
      downloadUrl: 'https://archive.org/details/higher-engineering-mathematics-bs-grewal',
    },
    {
      id: 3,
      title: 'Engineering Drawing',
      author: 'ND Bhatt',
      branch: 'Mechanical',
      semester: '1&2',
      imageUrl: 'https://bookstation.in/cdn/shop/products/5708_front.jpg?v=1674973268&width=1200',
      downloadUrl: 'https://ggnindia.dronacharya.info/Downloads/Sub-info/ME-RAA/ENGINEERING-DRAWING-BY-ND-BHATT.pdf',
    },
    {
      id: 4,
      title: 'Engineering Chemistry',
      author: 'Shashi Chawla',
      branch: 'EC',
      semester: '3&4',
      imageUrl: 'https://m.media-amazon.com/images/I/51UOkmfP+tL._SY445_SX342_.jpg',
      downloadUrl: 'https://ggnindia.dronacharya.info/Downloads/Sub-info/ME-RAA/ENGINEERING-DRAWING-BY-ND-BHATT.pdf',
    },
    {
      id: 5,
      title: 'Database Management System',
      author: 'Dr. Sheetal Takale',
      branch: 'CSE',
      semester: '5&6',
      imageUrl: 'https://m.media-amazon.com/images/I/5159rz1tRHL._SY522_.jpg',
      downloadUrl: 'https://www.kopykitab.com/Database-Systems-Database-Management-Systems-by-Dr-Mrs-Sheetal-Takale-Gujar-Nitin-N-Sakhare',
    },
    {
      id: 6,
      title: 'Operating System',
      author: 'S.Chand',
      branch: 'EC',
      semester: '5&6',
      imageUrl: 'https://m.media-amazon.com/images/I/51JtBfsVLML.jpg',
      downloadUrl: 'https://www.schandpublishing.com/books/tech-professional/computer-science/operating-system-2nd-edition/9789325975637/',
    },
    {
      id: 7,
      title: 'Software Engineering',
      author: 'S. Suresh',
      branch: 'CSE',
      semester: '5&6',
      imageUrl: 'https://rukminim2.flixcart.com/image/832/832/k5zn9u80/regionalbooks/d/m/b/software-engineering-b-e-b-tech-iv-semester-r-17-anna-university-original-imafzk4vzf9x3tjy.jpeg?q=70&crop=false',
      downloadUrl: 'https://www.vssut.ac.in/lecture_notes/lecture1428551142.pdf',
    },
    {
      id: 8,
      title: 'DataStructures and Algorithms',
      author: 'Alfredo  V. Aho',
      branch: 'CSE',
      semester: '3&4',
      imageUrl: 'https://m.media-amazon.com/images/I/71kBRLo8ZtL._SY522_.jpg ',
      downloadUrl: 'https://doc.lagout.org/Alfred%20V.%20Aho%20-%20Data%20Structures%20and%20Algorithms.pdf ',
    },
    {
      id: 9,
      title: 'Object Oriented Programming',
      author: 'S. Suresh',
      branch: 'CSE',
      semester: '3&4',
      imageUrl: 'https://m.media-amazon.com/images/I/81oMg57X2XL._SL1500_.jpg',
      downloadUrl: 'https://ebooks.lpude.in/management/mba/term_4/DCAP107_DCAP404_OBJECT_ORIENTED_PROGRAMMING.pdf',
    },
  ];

  const handleSemesterSelection = (semester) => {
    setSelectedSemester(semester);
    setSelectedBranch(''); // Clear branch selection
    // Always display all books when semester is selected
    setBooks(dummyBooks.filter(book => book.semester === semester));
  };

  const handleBranchSelection = (branch) => {
    setSelectedBranch(branch);
    // Filter books based on selected branch and semester
    if (selectedSemester) {
      setBooks(dummyBooks.filter(book => book.branch === branch && book.semester === selectedSemester));
    } else {
      setBooks(dummyBooks.filter(book => book.branch === branch));
    }
  };

  return (
    <div className="min-h-screen ">
    <div>
      <Breadcrumbs crumbs={crumbs} />
    </div>
    <div className="max-w-screen-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Semester-wise Books</h1>

      {/* Semester Selection */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 focus:outline-none ${selectedSemester === '1&2' ? 'bg-blue-700' : ''}`}
          onClick={() => handleSemesterSelection('1&2')}
        >
          Semester 1&2
        </button>
        <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 focus:outline-none ${selectedSemester === '3&4' ? 'bg-blue-700' : ''}`}
          onClick={() => handleSemesterSelection('3&4')}
        >
          Semester 3&4
        </button>
        <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 focus:outline-none ${selectedSemester === '5&6' ? 'bg-blue-700' : ''}`}
          onClick={() => handleSemesterSelection('5&6')}
        >
          Semester 5&6
        </button>
        <button
          className={`rounded-lg px-4 py-2 bg-blue-500 text-white border-2 border-blue-500 focus:outline-none ${selectedSemester === '7&8' ? 'bg-blue-700' : ''}`}
          onClick={() => handleSemesterSelection('7&8')}
        >
          Semester 7&8
        </button>
      </div>
      {selectedSemester === '' && (
        <p className="text-gray-500">Please select your semester</p>
      )}

      {/* Branch Filter Dropdown */}
      {selectedSemester && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Select your Branch:</h2>
          <select
            value={selectedBranch}
            onChange={(e) => handleBranchSelection(e.target.value)}
            className="rounded-lg px-4 py-2 bg-blue-100 text-blue-700 focus:outline-none focus:bg-blue-200 hover:bg-blue-200 transition duration-300"
          >
            <option value="">All</option>
            {allBranches.map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>
      )}

      {/* Display Books */}
      <div className="flex flex-wrap gap-4">
        {books.map((book) => (
          <div key={book.id} className="w-1/4 bg-white rounded-lg shadow-md p-4">
            <img src={book.imageUrl} alt={book.title} className="w-full h-40 mb-2" />
            <h3 className="text-sm font-semibold mb-1">{book.title}</h3>
            <p className="text-gray-500">Author: {book.author}</p>
            <p className="text-gray-500">Branch: {book.branch}</p>
          <Link to={book.downloadUrl} className=" gap-2 mt-4 w-full text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out flex justify-center items-center" >
            <span>View</span>
            <LuEye /></Link>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default SemesterPage;
