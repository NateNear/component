import React from 'react'
import styled from '@emotion/styled';

interface SurveyProps{
    publisher: string;
    isDarkMode: boolean;
}




const publisher: React.FC<SurveyProps> = ({ publisher, isDarkMode}) =>{

const Publisher = styled.div`
font-size: 0.75rem;
font-weight: 500;
color: ${isDarkMode ? "#000" : "#718096"};
margin-bottom: 0.75rem;`



return (
    <Publisher>
        {publisher} &nbsp; | &nbsp; Survey Written
      </Publisher>
  )
}

export default publisher