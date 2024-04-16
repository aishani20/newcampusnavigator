// import React from "react";
// import { FaPlus } from "react-icons/fa";

// const FAQHome = () => {
//   return (

//     <div className="mx-auto pl-4 my-16">
//       <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>

//       <div className="space-y-4">
//         {/* FAQ Item 1 */}
//         <div className="flex items-center justify-between border-b pb-2">
//           <p className="text-lg">
//             What is the Placement Management System?
//           </p>
//           <FaPlus className="text-blue-500 cursor-pointer" />
//         </div>

//         {/* FAQ Item 2 */}
//         <div className="flex items-center justify-between border-b pb-2">
//           <p className="text-lg">
//             How is Placement Software helpful for higher education institutions?
//           </p>
//           <FaPlus className="text-blue-500 cursor-pointer" />
//         </div>

//         {/* FAQ Item 3 */}
//         <div className="flex items-center justify-between border-b pb-2">
//           <p className="text-lg">
//             What are the main features of Placement Software?
//           </p>
//           <FaPlus className="text-blue-500 cursor-pointer" />
//         </div>

//         {/* FAQ Item 4 */}
//         <div className="flex items-center justify-between border-b pb-2">
//           <p className="text-lg">
//             Can the Creatrix Placement Management System be customizable and integrable with other education modules?
//           </p>
//           <FaPlus className="text-blue-500 cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQHome;

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQHome = () => {
  const faqs = [
    {
      question: "What is CampusNavigator?",
      answer:
        "The Placement Management System is a software platform designed to streamline and manage the placement process in educational institutions. It helps automate tasks such as job postings, student registrations, interview scheduling, and placement analytics.",
    },
    {
      question: "How is CampusNavigator helpful for you?",
      answer:
        "Placement Software offers several benefits to higher education institutions. It improves efficiency by automating manual tasks, enhances communication between students and recruiters, provides data insights for better decision-making, and contributes to overall placement success rates.",
    },
    {
      question: "What are the main features of CampusNavigator?",
      answer:
        "Key features of Placement Software include job posting and application management, resume database, interview scheduling, analytics and reporting, communication tools, and integration capabilities with other educational modules.",
    },
  ];

  const [isOpen, setIsOpen] = useState(Array(faqs.length).fill(false)); // Initialize isOpen state for FAQ items

  const toggleFAQ = (index) => {
    const updatedOpenState = isOpen.map((item, i) =>
      i === index ? !item : false
    );
    setIsOpen(updatedOpenState);
  };

  return (
    <div className="mx-auto pl-4 my-16">
      <h2 className="text-xl font-bold mb-4 dark:text-[#C5C4C2]">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className="flex items-center justify-between border-b pb-2 cursor-pointer dark:text-[#C5C4C2]" onClick={()=>toggleFAQ(index)}>
              <p className="text-lg">{faq.question}</p>
              {isOpen[index] ? (
                <FaMinus
                  className="text-blue-500 cursor-pointer dark:text-[#6377d8]"
                  onClick={() => toggleFAQ(index)}
                />
              ) : (
                <FaPlus
                  className="text-blue-500 cursor-pointer dark:text-[#6377d8]"
                  onClick={() => toggleFAQ(index)}
                />
              )}
            </div>
            <div
              className={`pl-8 transition-all duration-300 ease-in-out ${
                isOpen[index] ? "h-auto" : "h-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQHome;
