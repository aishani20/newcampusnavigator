// import React from 'react';
// import { Link } from 'react-router-dom';
// import Breadcrumbs from '../components/common/Breadcrumbs';

// // Card component for styling links
// const Card = ({ title, description, linkTo }) => (
//   <div className="border rounded-lg shadow-md bg-white p-4 mb-4">
//     <Link to={linkTo} className="block text-lg font-semibold text-blue-500 hover:underline">{title}</Link>
//     <p className="text-gray-600">{description}</p>
//   </div>
// );

// const Academics = () => {
//   const crumbs = [
//     { text: 'Home', link: '/' },
//     { text: 'Academics', link: '/academics' },
//   ];

//   return (
//     <div className="h-screen">
//       <div>
//         <Breadcrumbs crumbs={crumbs} />
//       </div>
//       <div className="flex flex-wrap gap-4">
//         {/* ProgrammingBooks Card */}
//         <Card
//           title="ProgrammingBooks"
//           description="Explore programming books."
//           linkTo="/academics/programming-books"
//         />
        
//         {/* QuestionPaper Card */}
//         <Card
//           title="QuestionPaper"
//           description="Practice previous year questions."
//           linkTo="/academics/pyq"
//         />

//         {/* Notes Card */}
//         <Card
//           title="Notes"
//           description="Access course notes and materials."
//           linkTo="/academics/notes"
//         />

//         {/* SemesterBooks Card */}
//         <Card
//           title="SemesterBooks"
//           description="Find semester-wise books."
//           linkTo="/academics/semester-books"
//         />
//       </div>
//     </div>
//   );
// };

// export default Academics;


import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';


const Card = ({ title, description, linkTo, bgImage }) => {
  return (
    <Link to={linkTo} className=" border-2 rounded-md ">
      <div className="relative flex cursor-pointer items-start p-2 duration-300 bg-lc-layer-01 dark:bg-dark-lc-layer-01 hover:bg-lc-layer-01 shadow-down-01 dark:shadow-dark-down-01 hover:shadow-down-02 rounded-lg dark:hover:bg-dark-lc-fill-02 dark:shadow-none dark:hover:shadow-none">
        <img src={bgImage} alt={title} className="rounded-[4px] mr-3.5 h-[72px] w-[72px]" />
        <div className="flex-grow py-1 h-[72px]">
          <div className="flex h-full flex-col justify-center">
            <div className="flex items-start">
              <p className="block text-lg font-semibold text-blue-500 hover:underline">{title}</p>
            </div>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};






const Academics = () => {
  const crumbs = [
    { text: 'Home', link: '/' },
    { text: 'Academics', link: '/academics' },
  ];

  return (
    <div className="h-screen">
      <div>
        <Breadcrumbs crumbs={crumbs} />
      </div>
      <div className="flex flex-wrap gap-4">
        {/* ProgrammingBooks Card */}
        <Card
          title="Programming Books"
          description="Explore programming books."
          linkTo="/academics/programming-books"
          bgImage="https://media.geeksforgeeks.org/wp-content/uploads/20221206161100/Programming-Books-That-Every-Programmer-Must-Read-Once.png"
        />
        
        {/* QuestionPaper Card */}
        <Card
          title="QuestionPaper"
          description="Practice previous year questions."
          linkTo="/academics/pyq"
          // bgImage="http://dspace.christcollegeijk.edu.in:8080/jspui/retrieve/59054764-8b8f-456b-8fe7-d7a5e7c00a2b"
        />

        {/* Notes Card */}
        <Card
          title="Notes"
          description="Access course notes and materials."
          linkTo="/academics/notes"
          bgImage="path_to_your_image.jpg"
        />

        {/* SemesterBooks Card */}
        <Card
          title="SemesterBooks"
          description="Find semester-wise books."
          linkTo="/academics/semester-books"
        />
      </div>
    </div>
  );
};

export default Academics;
