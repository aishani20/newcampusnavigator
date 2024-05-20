import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';


const Card = ({ title, description, linkTo, bgImage }) => {
  return (
    <Link to={linkTo} className=" border-2 rounded-md dark:border-[#B8AE9F] ">
      <div className="relative flex cursor-pointer items-start p-2 duration-300 bg-lc-layer-01 dark:bg-dark-lc-layer-01 hover:bg-lc-layer-01 shadow-down-01 dark:shadow-dark-down-01 hover:shadow-down-02 rounded-lg dark:hover:bg-dark-lc-fill-02 dark:shadow-none dark:hover:shadow-none">
      {bgImage ? (
          <video
            src={bgImage}
            className="rounded-[4px] mr-3.5 h-[72px] w-[72px]"
            autoPlay
            loop
            muted
          />
        ) : (
        <img src={bgImage} alt={title} className="rounded-[4px] mr-3.5 h-[72px] w-[72px]" />
        )}
        <div className="flex-grow py-1 h-[72px]">
          <div className="flex h-full flex-col justify-center">
            <div className="flex items-start">
              <p className="block text-lg font-semibold text-blue-500 hover:underline dark:text-[#49B1F3] ">{title}</p>
            </div>
            <p className="text-gray-500 dark:text-[#B8AE9F]">{description}</p>
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
          bgImage="https://cdnl.iconscout.com/lottie/premium/preview-watermark/coding-book-9550106-7763093.mp4"
        />
        
        {/* QuestionPaper Card */}
        <Card
          title="QuestionPaper"
          description="Practice previous year questions."
          linkTo="/academics/pyq"
          // bgImage="https://cdn3d.iconscout.com/3d/premium/thumb/question-and-answer-4552035-3774597.png?f=webp"
          bgImage="https://cdnl.iconscout.com/lottie/premium/preview-watermark/questions-and-answers-3575719-2991383.mp4"
        />

        {/* Notes Card */}
        <Card
          title="Notes"
          description="Access course notes and materials."
          linkTo="/academics/notes"
          // bgImage="https://cdn3d.iconscout.com/3d/premium/thumb/notes-5206761-4352352.png?f=webp"
          bgImage="https://cdnl.iconscout.com/lottie/premium/preview-watermark/notes-6579407-5551521.mp4"
        />

        {/* SemesterBooks Card */}
        <Card
          title="SemesterBooks"
          description="Find semester-wise books."
          linkTo="/academics/semester-books"
          bgImage="https://cdnl.iconscout.com/lottie/premium/preview-watermark/study-lamp-11184873-8972402.mp4"
        />
      </div>
    </div>
  );
};

export default Academics;
