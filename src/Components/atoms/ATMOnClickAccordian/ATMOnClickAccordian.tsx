// import React from 'react'

// const ATMOnClickAccordian = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ATMOnClickAccordian
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { twMerge } from 'tailwind-merge'

type AccordionProps= {
  title: string;
  children: React.ReactNode;
  className?:string
  titleExtraClass?:string
  extraClass?:string
}

const ATMOnClickAccordian: React.FC<AccordionProps> = ({ title, children,className ,titleExtraClass,extraClass}) => {
  const [isOpenAccordian, setIsOpenAccordian] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const toggleAccordion = () => {
    setIsOpenAccordian(!isOpenAccordian);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpenAccordian
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpenAccordian]);
  return (
    <div
      className={` items-center  flex ${
        isOpenAccordian ? 'max-h-screen  ' : ' overflow-hidden'
      }`}
   onClick={toggleAccordion}
    >
        <div className={twMerge(` flex flex-col  ${extraClass}`)}>
      <div className={twMerge(`flex gap-2 items-center ${titleExtraClass}`)}>
        {title}
        <span>{isOpenAccordian ?  <IoIosArrowUp/>:  <IoIosArrowDown/>}</span>
      </div>
    <div className='relative animate-[wiggle_8s_ease-in-out_infinite]' ><div    ref={contentRef} className={twMerge(`  bg-white  absolute  bg-white  shadow-lg overflow-hidden transition-max-height ease-out duration-1000 ${className}`)}>{children} </div></div>
      </div>
    </div>
  );
};

export default ATMOnClickAccordian;

