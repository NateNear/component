import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from './dropdown'
import Hashtags from './hashtags'
import Publisher from './publisher'
import Icons from './icons'
import Heading from './heading'
import ImageBody from './image'
import { ThemeProvider } from '@emotion/react';


interface SurveyProps {
  publisher: string;
  heading: string;
  description: string;
  imageSrc: string;
  forecastYears: string;
  hashtags: string[];
  isDarkMode: boolean;
}

const Body: React.FC<SurveyProps> = ({ publisher, heading, description, imageSrc, forecastYears, hashtags, isDarkMode }) =>{
  const MainDiv = styled.div`
    background-color: ${isDarkMode ? "#000" : "#fff"};
    color: ${isDarkMode ? "#fff" : "#000"};
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
  `;

  const SndDiv = styled.div`
    padding: 1rem 1.5rem;
    color: ${isDarkMode ? "#fff" : "#000"};
    background-color: ${isDarkMode ? "#1a202c" : "#fff"};
    @media (min-width: 640px) {
      width: 50%;
    }
  `;

  const H1div = styled.div`
    position: relative;
  `;

  const StyledPara = styled.p`
    color: ${isDarkMode ? "#CBD5E0" : "#718096"};
    margin-bottom: 1rem;
    margin-top: 0.25rem;
  `;

  const ForecastDiv = styled.div`
    color: ${isDarkMode ? "#CBD5E0" : "#718096"};
    margin-bottom: 0.5rem;
    font-weight: 600;
  `;

  const HrDiv = styled.hr`
    margin-left: -1.5rem;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    width: 50%;
    border-color: ${isDarkMode ? "#4A5568" : "#e2e8f0"};
    position: absolute;
    width: 760px;
  `;

  return (
    <ThemeProvider theme={{ mode: isDarkMode ? 'dark' : 'light' }}>
    <MainDiv>
      <SndDiv>
        <Publisher publisher={publisher} isDarkMode={isDarkMode} />
        <H1div>
          <Heading heading={heading} isDarkMode={isDarkMode} />
          <Dropdown/>
        </H1div>
        <br />
        <StyledPara>{description}</StyledPara>
        <ForecastDiv>{forecastYears}</ForecastDiv>
        <Hashtags hashtags={hashtags} isDarkMode={isDarkMode} />
        <HrDiv />
        <br />
        <Icons/>
      </SndDiv>
      <div>
        <ImageBody
          heading={heading}
          imageSrc={imageSrc}
          isDarkMode={isDarkMode}
        />
      </div>
    </MainDiv>
    </ThemeProvider>
  );
};

export default Body;
