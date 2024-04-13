import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumbs = ({ crumbs }) => {
  const location = useLocation();

  return (
    <div className="flex items-center text-sm text-gray-500 space-x-2">
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <IoIosArrowForward className="text-blue-500" />
          )}
           {location.pathname === crumb.link ? (
            <span>{crumb.text}</span>
          ):(
          <Link to={crumb.link} className="text-blue-500 hover:underline">
            {crumb.text}
          </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
