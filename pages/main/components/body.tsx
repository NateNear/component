import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from './dropdown'
import Hashtags from './hashtags'
import Publisher from './publisher'
import Icons from './icons'
import Heading from './heading'
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

  const MainDiv = styled.div`
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
 `

  const SndDiv = styled.div`
  padding: 1rem 1.5rem;
  @media (min-width: 640px) {
    width: 50%;
  } `


  const H1div = styled.div`
    position: relative;`
  

    const StyledPara = styled.p`
      color: #718096;
      margin-bottom: 1rem;
      margin-top: 0.25rem;`

    const ForecastDiv = styled.div`
      color: #718096;
      margin-bottom: 0.5rem;
      font-weight: 600;
      `

    const HrDiv = styled.hr`
      margin-left: -1.5rem;
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
      width: 50%;
      border-color: #e2e8f0;
      position: absolute;
      width: 760px;`


  return (
    <MainDiv>
    <SndDiv>
      <Publisher publisher={publisher}/>
      <H1div>

      <Heading heading={heading}/>
        
        <Dropdown/>
        
      </H1div>
      <br />
      <StyledPara>{description}</StyledPara>
      <ForecastDiv>{forecastYears}</ForecastDiv>
      <Hashtags hashtags={hashtags}/>
      <HrDiv/>
      <br />
      <Icons/>
    </SndDiv>
    <div>
    <ImageBody
        heading={heading}
        imageSrc={imageSrc}/>
    </div>
    </MainDiv>
  )
}


export default Body