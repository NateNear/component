import React from 'react'
import styled from '@emotion/styled';

interface SurveyProps{
    heading: string;
}

const StyledHeading = styled.div`
font-size: 1.875rem;
font-weight: 700;
color: #1a202c;
margin-bottom: 0.5rem;`

const heading: React.FC<SurveyProps> = ({ heading }) =>{
  return (
    <StyledHeading>
    {heading}
  </StyledHeading>
  )
}

export default heading