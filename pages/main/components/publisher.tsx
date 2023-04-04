import React from 'react'
import styled from '@emotion/styled';

interface SurveyProps{
    publisher: string;
}


const Publisher = styled.div`
font-size: 0.75rem;
font-weight: 500;
color: #718096;
margin-bottom: 0.75rem;`

const publisher: React.FC<SurveyProps> = ({ publisher}) =>{
  return (
    <Publisher>
        {publisher} &nbsp; | &nbsp; Survey Written
      </Publisher>
  )
}

export default publisher