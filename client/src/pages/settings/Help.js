import React from "react";

const Help = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mt-8 mb-4">Help Center</h1>
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Frequently Asked Questions (FAQs)</h2>
        <div>
          <h3 className="text-base font-medium mb-1">How do I reset my password?</h3>
          <p className="text-sm mb-4">You can reset your password by clicking on the "Forgot Password" link on the login page.</p>
        </div>
        <div>
          <h3 className="text-base font-medium mb-1">How do I update my profile information?</h3>
          <p className="text-sm mb-4">To update your profile information, go to the settings page and select the "Edit Profile" option.</p>
        </div>
        <div>
          <h3 className="text-base font-medium mb-1">How do I contact customer support?</h3>
          <p className="text-sm mb-4">You can contact customer support by emailing us at support@example.com or by calling our helpline at 1-800-123-4567.</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-2">Contact Us</h2>
        <p className="text-sm">For any further assistance or queries, please feel free to contact us using the information provided below:</p>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Email: support@example.com</li>
          <li>Phone: 1-800-123-4567</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
