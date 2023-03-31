import React, { useState } from 'react';
import { css } from '@emotion/css';
import { FaThumbsUp, FaSave, FaShare, FaPlus } from 'react-icons/fa';

import Icons from './icons'
import ImageBody from './image'

interface SurveyProps {
    publisher: string;
    heading: string;
    description: string;
    imageSrc: string;
    forecastYears: string;
    hashtags: string[];
  }

  const Body: React.FC<SurveyProps> = ({ publisher, heading, description, imageSrc, forecastYears, hashtags }) =>{

  

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('Global');


  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };
  return (
    <div
    className={css`
      background-color: #fff;
      width: 100%;
      max-width: 48rem;
      border-radius: 0.375rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      @media (min-width: 640px) {
        flex-direction: row;
      }
    `}
  >
    <div
      className={css`
        padding: 1rem 1.5rem;
        @media (min-width: 640px) {
          width: 50%;
        }
      `}
    >
      <div
        className={css`
          font-size: 0.75rem;
          font-weight: 500;
          color: #718096;
          margin-bottom: 0.75rem;
        `}
      >
        {publisher} &nbsp; | &nbsp; Survey Written
      </div>
      <div className={css`position: relative;`}>
        <h1
          className={css`
            font-size: 1.875rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 0.5rem;
          `}
        >
          {heading}
        </h1>

        <div className={css`position: absolute; top: 1.75rem; right: 0;`}>
          <button
            onClick={handleDropdownClick}
            className={css`
              color: #718096;
              position: absolute;
              right: 270px;
              top: 70px;
              font-size: 0.875rem;
              font-weight: 500;
              display: flex;
              align-items: center;
              border: none;
              background-color: transparent;
              cursor: pointer;
              &:hover {
                color: #1a202c;
              }
            `}
          >
            <span>{selectedYear}</span>
            <svg
              className={css`
                height: 1.25rem;
                width: 1.25rem;
                margin-left: 0.25rem;
              `}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.7-.3l-3.7-3.8a1 1 0 111.4-1.4l3 3 3.3-3.4a1 1 0 111.4 1.4l-3.7 3.8a1 1 0 01-.7.3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className={css`
              position: absolute;
              right: 265px;
              top: 70px;
              z-index: 10;
              margin-top: 1rem;
              background-color: #ffffff;
              border-radius: 0.375rem;
              box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
              `}>
          <ul className={css`
              padding-top: 1rem;
              li {
                padding: 0 1rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                color: #4B5563;
                &:hover {
                background-color: #F3F4F6;
                color: #374151;
                cursor: pointer;
                  }
                }
              `}>
            <li onClick={() => handleYearSelect('Global')}>Global</li>
            <li onClick={() => handleYearSelect('India')}>India</li>
            <li onClick={() => handleYearSelect('Ukraine')}>Ukraine</li>
          </ul>
            </div>
          )}
        </div>
      </div>
      <br />
      <p className={css`
      color: #718096;
      margin-bottom: 1rem;
      margin-top: 0.25rem;`}>{description}</p>
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
      <Icons publisher= {publisher}
        heading={heading}
        description={description}
        imageSrc={imageSrc}
        forecastYears={forecastYears}
        hashtags={hashtags}/>
    </div>
    <div>
    <ImageBody
        heading={heading}
        imageSrc={imageSrc}/>
    </div>
    </div>
  )
}


export default Body