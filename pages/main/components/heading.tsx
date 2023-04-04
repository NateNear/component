import React from 'react'
import styled from '@emotion/styled';

interface SurveyProps{
  heading: string;
  isDarkMode: boolean;
}

const StyledHeading = styled.div<{ isDarkMode: boolean }>`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${props => props.isDarkMode ? '#f7fafc' : '#1a202c'};
  margin-bottom: 0.5rem;
`;

const Heading: React.FC<SurveyProps> = ({ heading, isDarkMode }) => {
  return (
    <StyledHeading isDarkMode={isDarkMode}>
      {heading}
    </StyledHeading>
  )
}

export default Heading;
