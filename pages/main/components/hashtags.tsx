import React from 'react';
import styled from '@emotion/styled';


interface SurveyProps {
    hashtags: string[];
    isDarkMode: boolean;
  }


const hashtags: React.FC<SurveyProps> = ({hashtags }) =>{
    const HashtagfDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;`
  
  const HashtagsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;`
  
  const HashtagDiv = styled.div`
    background-color: #edf2f7;
    color: #718096;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;`
  return (
    <HashtagfDiv>
    <HashtagsDiv>
      {hashtags.map((tag, index) => (
        <HashtagDiv key={index}>
          #{tag}
        </HashtagDiv>
      ))}
    </HashtagsDiv>
  </HashtagfDiv>
  )
}

export default hashtags