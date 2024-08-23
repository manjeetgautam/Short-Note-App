import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({note}) => {
    // console.log(data.description);
    //{data, reference}
    //dragConstraints={reference}
    console.log(note);
    
    
  return (
    <>
      <motion.div drag  whileDrag={{scale:1.1}} className="relative flex-shrink-1 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-xs mt-5 font-semibold leading-tight">
          {note.note}
        </p>
        <div className="footer absolute bottom-0  w-full left-0">
          <div className="flex items-center justify-between py-3 px-8 mb-3">
            <h5>.4mb</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              <MdOutlineFileDownload size=".7em" color="#fff" />
            </span>
          </div>
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold">{note.tag}</h3>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
