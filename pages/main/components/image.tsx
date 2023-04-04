import React from 'react';
import Image from 'next/image';


interface SurveyProps {
    heading: string;
    imageSrc: string;
  }


const ImageBody: React.FC<SurveyProps> = ({ heading, imageSrc }) => {
  return (

    <Image
          src={imageSrc}
          alt={heading}
          width={300}
          height={200}
          objectFit="scale-down"
          objectPosition="top-right"
          className="pt-11 pl-14 rounded-2xl"
      />

  )
}

export default ImageBody