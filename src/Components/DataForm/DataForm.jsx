import React, { useState } from "react";
import Button from "../Button/Button";

const DataForm = ({ onfinish, setDataFormVisible}) => {
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const formdata = {
    note: note,
    tag: tag,
  };

  return (
    <div className="absolute w-full  top-[30%]">
          <form className="  w-full max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md relative  z-10">
      {/* Close button */}
      <button
        type="button"
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        onClick={() => {
          /* Add your close function here */
          setDataFormVisible(false)
        }}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mb-6">
        <label
          htmlFor="note"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Note
        </label>
        <input
          type="text"
          id="note"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your note here"
          required
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="tag"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select a tag
        </label>
        <select
          id="tag"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setTag(e.target.value)}
        >
          <option  defaultValue="office">
            Office
          </option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="ideas">Ideas</option>
          <option value="home">Home</option>
        </select>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        onClick={(e) => {
          e.preventDefault();
          onfinish(formdata);
        }}
      >
        Submit
      </button>
    </form>
    </div>
    

    // <div className="w-[60%] border-2 border-sky-500">
    //   <form className="max-w-sm mx-auto">
    //     <label
    //       htmlFor="message"
    //       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //     >
    //       Add Note
    //     </label>
    //     <textarea
    //       id="message"
    //     //   rows="4"
    //       className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //       placeholder="Leave a comment..."
    //       onChange={(e)=>setNote(e.target.value)}
    //     ></textarea>
    //     <div className="w-full flex ">
    //     <label
    //       htmlFor="tag"
    //       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //     >
    //       Select Tag
    //     </label>
    //     <select name="tag" id="tag"
    //     onChange={(e)=>setTag(e.target.value)}>
    //         <option value="office">Office</option>
    //         <option value="work">Work</option>
    //         <option value="home">Home</option>
    //         <option value="personal">Personal</option>
    //         <option value="office">Office</option>
    //     </select>
    //     </div>

    //     <Button text="Add" onClickFunc={(e)=>{
    //        e.preventDefault()
    //        onfinish(formdata)}}/>
    //   </form>
    // </div>
  );
};

export default DataForm;
