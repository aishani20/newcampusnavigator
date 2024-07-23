import React from 'react';

const ShowPYQS = ({ year, branch, pdfThumbnail, pdfFile }) => {
  const [showPdf, setShowPdf] = React.useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setShowPdf(true)}
      onMouseLeave={() => setShowPdf(false)}
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{year}</h2>
        <p className="text-gray-600">{branch}</p>
      </div>
      <div
        className={`absolute inset-0 bg-gray-100 opacity-0 transition-opacity duration-300 ${
          showPdf ? 'opacity-100' : ''
        }`}
        style={{ zIndex: 1 }}
      >
        {showPdf && (
          <embed
            src={pdfFile}
            type="application/pdf"
            className="w-full h-full"
          />
        )}
      </div>
      <img src={pdfThumbnail} alt="PDF Thumbnail" className="w-full h-full object-cover" />
    </div>
  );
};

export default ShowPYQS;