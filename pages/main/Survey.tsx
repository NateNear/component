import React, { useState } from 'react';
import Body from './components/body'
import Header from './components/header'


interface SurveyProps {
  publisher: string;
  heading: string;
  description: string;
  imageSrc: string;
  forecastYears: string;
  hashtags: string[];
}

const Survey: React.FC<SurveyProps> = ({ publisher, heading, description, imageSrc, forecastYears, hashtags }) => {


  return (
    <>
  
      <Header/>
      <br />

      <Body publisher= {publisher}
        heading={heading}
        description={description}
        imageSrc={imageSrc}
        forecastYears={forecastYears}
        hashtags={hashtags}/>
        

</>
  );
};

export default Survey;