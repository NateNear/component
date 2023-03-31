import React, { useState } from 'react'

import { FaThumbsUp, FaSave, FaShare, FaPlus } from 'react-icons/fa';

interface SurveyProps {
    publisher: string;
    heading: string;
    description: string;
    imageSrc: string;
    forecastYears: string;
    hashtags: string[];
  }

const Icons: React.FC<SurveyProps> = ({ publisher, heading, description, imageSrc, forecastYears, hashtags }) =>{
    const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);


  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleSaveClick = () => {
    setSaved(!saved);
  };


  return (
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
  )
}

export default Icons