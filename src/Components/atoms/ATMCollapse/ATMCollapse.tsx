import React, { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface CollapseProps {
  children: React.ReactNode;
  title: string;
  titleExtraClass?:string
  className?:String
}

const ATMCollapse = ({ children, title,titleExtraClass,className }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <button
      type="button"
        className={twMerge(`flex gap-2 items-center ${titleExtraClass}`)}
        onClick={toggleCollapse}
      >
        {title}
      </button>

      <div
        ref={contentRef}
        className={twMerge(`overflow-hidden transition-max-height ease-out duration-1000 ${className}`)}
      >
        {children}
      </div>
    </div>
  );
};

export default ATMCollapse;