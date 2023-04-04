import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ThemeContext } from '../../_app';

interface SurveyProps {
  heading: string;
}

const StyledHeading = styled.div<{ theme: string }>`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#1a202c')};
  margin-bottom: 0.5rem;
`;

const Heading: React.FC<SurveyProps> = ({ heading }) => {
  const { theme } = useContext(ThemeContext);

  return <StyledHeading theme={theme}>{heading}</StyledHeading>;
};

export default Heading;
