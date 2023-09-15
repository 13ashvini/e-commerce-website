import { ErrorMessage } from "formik";
import React, { KeyboardEventHandler, useState } from "react";
import { twMerge } from "tailwind-merge";
import ATMSelect from "../ATMSelect/ATMSelect";

export interface ATMInputAdormantPropTypes {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  adormant: string | React.ReactNode;
  adormantProps: {
    position?: "start" | "end";
    onClick?: () => void;
    extraClasses?: string;
  };
  type?: "text" | "password" | "number";
  placeholder?: string;
  className?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  size?: "small" | "medium" | "large" | number;
  autoFocus?: boolean;
  onKeydown?: KeyboardEventHandler<HTMLInputElement>;
}

const ATMInputAdormant = ({
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
  label,
  required = false,
  disabled = false,
  readonly = false,
  adormant,
  adormantProps = {
    position: "start",
  },
  autoFocus = false,
  onKeydown,
}: ATMInputAdormantPropTypes) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="">
      {label && (
        <label
          className={`text-slate-700 font-medium text-sm ${
            disabled && "opacity-40"
          } `}
        >
          {label} {required && <span className="text-red-500"> * </span>}
        </label>
      )}

      <div
        className={` w-full  items-center   ${
          label && "mt-1"
        } flex ${isFocus && " rounded-0"} ${className} `}
      >
        {adormantProps.position === "start" && (
          <div
            onClick={() => adormantProps.onClick && adormantProps.onClick()}
            className={twMerge(
              `h-full flex justify-center p-0 items-center bg-transparent  ${
                adormantProps.onClick && "cursor-pointer"
              } ${adormantProps.extraClasses}`
            )}
          >
            {adormant}
          </div>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
          placeholder={placeholder}
          className={`w-full h-full  bg-inherit text-slate-700 border-0 outline-0 px-3 rounded-0`}
          disabled={disabled}
          readOnly={readonly}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          autoFocus={autoFocus}
          onKeyDown={onKeydown}
        />

        {adormantProps.position === "end" && (
          <div
            onClick={() => adormantProps.onClick && adormantProps.onClick()}
            className={twMerge(
              ` h-full flex justify-center items-center py-0 px-3 bg-slate-300  ${
                adormantProps.onClick && "cursor-pointer"
              }  ${adormantProps.extraClasses}`
            )}
          >
            {adormant}
          </div>
        )}
      </div>

      {name && (
        <ErrorMessage name={name}>
          {(errMsg) => (
            <p className="font-poppins absolute text-[14px] text-start mt-0 text-red-500">
              {errMsg}
            </p>
          )}
        </ErrorMessage>
      )}
    </div>
  );
};

export default ATMInputAdormant;
