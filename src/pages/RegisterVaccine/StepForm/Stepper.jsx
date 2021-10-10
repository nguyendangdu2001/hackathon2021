import React from "react";
import styled from "styled-components";
import arrow from "@assets/NUTNHANDIEN.png";
import { Fragment } from "react";
const Stepper = ({ className, step, onChange }) => {
  const stepTitle = [
    "Thông tin cá nhân",
    "Tiền sử bệnh",
    "Phiếu đồng ý tiêm",
    "Hoàn thành",
  ];

  return (
    <div className="flex justify-center w-full">
      <div
        className={`${className} flex step__nav items-center max-w-4xl mx-10 w-full self-center py-10 flex-nowrap my-10`}
      >
        {stepTitle.map((title, idx) => (
          <Fragment key={idx}>
            <button
              onClick={() => {
                step > idx && onChange(idx);
              }}
              type={idx > step ? "submit" : "button"}
              className={`step relative flex flex-col items-center md:flex-row ${
                step >= idx ? "font-semibold opacity-100" : "opacity-50"
              }`}
            >
              <div className="absolute w-6 h-auto mb-1 transform -translate-x-1/2 border-none bottom-full left-1/2">
                <img
                  src={arrow}
                  alt=""
                  className={`w-6 h-auto border-none ${
                    step === idx ? "opacity-100 animate-bounce" : "opacity-0 "
                  }`}
                />
              </div>

              <span className="flex items-center justify-center text-lg w-9 h-9">
                {idx + 1}
              </span>
              <div className="absolute w-32 mt-1 text-lg transform -translate-x-1/2 top-full left-1/2">
                {title}
              </div>
            </button>
            <div
              className={`flex-auto border-t-2 transition duration-500 ease-in-out last:hidden ${
                step > idx ? "border-blue-500" : "border-gray-300"
              }`}
            ></div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default styled(Stepper)`
  &.step__nav {
    /* margin: 40px 0; */

    .step {
      &:hover {
        cursor: pointer;
      }
      > span {
        place-items: center;
        padding: 4px 10px;
        border-radius: 50%;
        border: 3px solid;
      }
    }
    .active {
      font-weight: 700;

      opacity: 1;
    }
  }
`;
