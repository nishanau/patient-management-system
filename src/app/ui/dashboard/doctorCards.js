// components/Card.tsx
import React from 'react';
import Image from 'next/image';



const DoctorCard = ({ imageUrl, description, buttonText, onClick }) => {
  return (
    <div className="max-w-md overflow-hidden rounded-md shadow-md m-1">
      <div className="relative h-48 overflow-hidden">
        <img  className="object-cover w-full h-full" src={imageUrl} alt="Doctor image" />
      </div>
      <div className="p-4">
        <p className="text-gray-700">{description}</p>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
