import React, { useState } from 'react';
import styled from '@emotion/styled';




  function Dropdown(){

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState('Global');


  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  const ButtonDiv = styled.div`
  position: absolute; 
  top: 1.75rem; 
  right: 0;`

const Button = styled.button`
  color: #718096;
  position: absolute;
  right: 270px;
  top: 70px;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #1a202c;
  }`

const StyledSvg = styled.svg `
  height: 1.25rem;
  width: 1.25rem;
  margin-left: 0.25rem; `

const DropdownDiv = styled.div`
  position: absolute;
  right: 265px;
  top: 70px;
  z-index: 10;
  margin-top: 1rem;
  background-color: #ffffff;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); `

const StyledUl = styled.ul `
  padding-top: 1rem;
  li {
    padding: 0 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #4B5563;
    &:hover {
    background-color: #F3F4F6;
    color: #374151;
    cursor: pointer;
      }
    }`


  return(
    <ButtonDiv>
          <Button
            onClick={handleDropdownClick}
          >
            <span>{selectedYear}</span>
            <StyledSvg
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.7-.3l-3.7-3.8a1 1 0 111.4-1.4l3 3 3.3-3.4a1 1 0 111.4 1.4l-3.7 3.8a1 1 0 01-.7.3z"
                clipRule="evenodd"
              />
            </StyledSvg>
          </Button>
          {isDropdownOpen && (
            <DropdownDiv>
          <StyledUl>
            <li onClick={() => handleYearSelect('Global')}>Global</li>
            <li onClick={() => handleYearSelect('India')}>India</li>
            <li onClick={() => handleYearSelect('Ukraine')}>Ukraine</li>
          </StyledUl>
            </DropdownDiv>
          )}
        </ButtonDiv>
  )
}


export default Dropdown