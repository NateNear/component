import React, { useState } from 'react';
import { FaThumbsUp, FaSave, FaShare, FaPlus } from 'react-icons/fa';
import styled from '@emotion/styled';

interface SurveyProps {
  publisher: string;
  heading: string;
  description: string;
  imageSrc: string;
  forecastYears: string;
  hashtags: string[];
  isDarkMode: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div<{ active?: boolean }>`
  cursor: pointer;
  color: ${props => props.active ? '#1E40AF' : '#6B7280'};
  margin-right: 30px;
  margin-left: 0px;
`;

function Icons(){
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleSaveClick = () => {
    setSaved(!saved);
  };

  return (
    <Container>

      
      <Button active={liked} onClick={handleLikeClick}>
        <FaThumbsUp size={24} />
      </Button>
      <Button active={saved} onClick={handleSaveClick}>
        <FaSave size={24} />
      </Button>
      <Button>
        <FaShare size={24} />
      </Button>
      <Button>
        <FaPlus size={24} />
      </Button>

      
    </Container>
  );
};

export default Icons