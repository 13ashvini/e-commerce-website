import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { twMerge } from 'tailwind-merge'

type AccordionProps= {
  title: string;
  children: React.ReactNode;
  className?:string
  titleExtraClass?:string
  extraClass?:string
}

const ATMAccordian: React.FC<AccordionProps> = ({ title, children,className ,titleExtraClass,extraClass}) => {
  const [isOpenAccordian, setIsOpenAccordian] = useState(false);

  const toggleAccordion = () => {
    setIsOpenAccordian(!isOpenAccordian);
  };

  return (
    <div
      className={` items-center w-full z-1000   ${
        isOpenAccordian ? 'max-h-screen ' : 'max-h-5  overflow-hidden'
      }`}
      onMouseOver={toggleAccordion}
      // onMouseLeave={toggleAccordion}
    >
        <div className={twMerge(`flex flex-col gap-2 items-center  ${extraClass} `)}>
      <div className={twMerge(`flex gap-2 items-center ${titleExtraClass}`)}>
        {title}
        <span>{isOpenAccordian ?  <IoIosArrowUp/>:  <IoIosArrowDown/>}</span>
      </div>
    <div className='relative animate-[wiggle_8s_ease-in-out_infinite]' ><div className={twMerge(`  bg-white rounded-lg shadow-lg border border-gray-300 absolute   ${className}`)}>{children} </div></div>
      </div>
    </div>
  );
};

export default ATMAccordian;

