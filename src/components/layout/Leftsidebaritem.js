import React from "react";
import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const Leftsidebaritem = (props) => {
  let [drop, setDrop] = useState(props.subcategory);
  let [showicon, setShowicon] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShowicon(!showicon)}
          className=" mt-5 flex cursor-pointer items-center justify-between border-b border-solid border-[#F0F0F0]"
        >
          <h2 className=" mb-5 font-dm text-cGrey ">
            {props.color && (
              <span
                className=" mr-3 inline-block h-3 w-3 rounded-full"
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </h2>
          {showicon ? (
            <BiMinus className="mb-5 text-cGrey" />
          ) : (
            <BiPlus className="mb-5 text-cGrey" />
          )}
        </div>
      ) : (
        <h2 className=" mb-5 font-dm text-cGrey">{props.title}</h2>
      )}

      {showicon && <div>{props.children}</div>}
    </div>
  );
};

export default Leftsidebaritem;