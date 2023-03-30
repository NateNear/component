import React, { useState } from 'react';

import { FaThumbsUp, FaSave, FaShare, FaPlus } from 'react-icons/fa';


interface SurveyProps {
  publisher: string;
  heading: string;
  description: string;
  imageSrc: string;
  forecastYears: string;
  hashtags: string[];
}

const Survey: React.FC<SurveyProps> = ({ publisher, heading, description, imageSrc, forecastYears, hashtags }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('Global');

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleSaveClick = () => {
    setSaved(!saved);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white w-full md:max-w-3xl rounded-md shadow-md overflow-hidden flex flex-col sm:flex-row">
      <div className="sm:w-1/2 px-4 py-5 sm:p-6">
        <div className="text-xs font-medium text-gray-500 mb-3">{publisher} &nbsp; | &nbsp; Survey Written</div>
        <div className="flex items-center relative">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 block">{heading}</h1>
  
          <div className="mt-auto mr-6 absolute top-20">
            <button onClick={handleDropdownClick} className="text-gray-500 flex items-center focus:outline-none">
              <span>{selectedYear}</span>
              <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.7-.3l-3.7-3.8a1 1 0 111.4-1.4l3 3 3.3-3.4a1 1 0 111.4 1.4l-3.7 3.8a1 1 0 01-.7.3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-1 bg-white rounded-md shadow-lg">
                <ul className="py-1">
                  <li
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    onClick={() => handleYearSelect('Global')}
                  >
                    Global
                  </li>
                  <li
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    onClick={() => handleYearSelect('2022')}
                  >
                    India
                  </li>
                  <li
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    onClick={() => handleYearSelect('2022')}
                  >
                    Ukraine
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <br />
        <p className="text-gray-500 mb-4 mt-1">{description}</p>
        <div className="text-gray-500 mb-2 font-semibold">{forecastYears}</div>
        <div className="flex items-center mb-2">
          <div className="flex flex-wrap relative">
            {hashtags.map((tag, index) => (
              <div key={index} className="bg-gray-100 text-gray-500 text-xs font-medium rounded-full px-2 py-1 mr-2 mb-2">
                #{tag}
              </div>
            ))}
          </div>
        </div>
        <hr className="-ml-6 mt-3 mb-3 w-3/6  border-gray-300 absolute w-400" />
        <br />
        <div className="flex items-center">
            <div onClick={handleLikeClick} className={`cursor-pointer ${liked ? 'text-blue-500' : 'text-gray-500'} mr-6 ml-2`}>
              <FaThumbsUp size={24} />
            </div>
            <div onClick={handleSaveClick} className={`cursor-pointer ${saved ? 'text-blue-500' : 'text-gray-500'} mr-6`}>
              <FaSave size={24} />
            </div>
            <div className="cursor-pointer text-gray-500 mr-6">
              <FaShare size={24} />
            </div>
            <div className="cursor-pointer text-gray-500">
              <FaPlus size={24} />
            </div>
          </div>
      </div>
      <div className="h-60 sm:w-1/2">
        <img src={imageSrc} alt={heading} className="pt-11 pl-14 object-scale-down h-60 w-80 object-right-top rounded-2xl" />
      </div>
    </div>
  );
};

export default Survey;
