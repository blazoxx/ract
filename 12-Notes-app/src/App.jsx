import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({
      title,
      details,
    });
    setTask(copyTask); // updating task with new note without mutating original task or editing the previous task
    console.log(copyTask);

    setTitle("");
    setDetails("");
  };

  // Deleting note method 1
  // const deleteNote = (indexToDelete) => {
  //   const filteredNotes = task.filter((_, index) => index !== indexToDelete);
  //   setTask(filteredNotes);
  // };

  // Another way to delete note
  const deleteNote = (indexToDelete) => {
    const copyTask = [...task];
    copyTask.splice(indexToDelete, 1);
    setTask(copyTask);
  }

  return (
    <div className="w-full bg-[#5e4075] text-white">
      {/* Input data */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=""
        className="flex flex-wrap justify-between items-start py-10 md:gap-5 gap-10 mx-auto sm:max-w-4/5"
      >
        <div className="md:max-w-1/3 md:min-w-[350px] sm:mx-auto flex flex-col w-full gap-5 justify-center items-center">
          <h1 className=" font-bold text-center text-4xl">Add Notes</h1>

          {/* type in heading box */}
          <input
            className="w-2/3 font-bold md:w-full outline-none px-2 py-2 border-2 rounded "
            type="text"
            maxLength={20}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Heading"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity("This field cannot be empty")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />

          {/* type in details box */}
          <textarea
            className="w-2/3 md:w-full h-20 outline-none px-2 py-2 border-2 rounded "
            value={details}
            maxLength={120}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            placeholder="Write details..."
            required
          ></textarea>
          <p className="text-sm opacity-70">
            {120 - details.length}{" "}
            {120 - details.length === 1 ? "character" : "characters"} left
          </p>

          <button className="w-2/3 md:w-full bg-white text-black px-5 py-2 rounded hover:bg-gray-300 font-bold active:scale-95 transition-all">
            Add Note
          </button>
        </div>

        {/* LIVE PREVIEW */}
        <div className="mx-auto flex">
          <div className="relative">
            <div className="bg-[url('https://imgs.search.brave.com/7phD_ENU1C4GcnJsuMzkLcBlaTypdCdu5JES_ooOg4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZS11cC1i/bGFuay1saW5lZC1w/YXBlcl8xMDQ4OTQ0/LTE0ODIzNjgwLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA')] bg-cover bg-no-repeat w-56 h-68 sm:h-72 sm:w-60 border-2 rounded-b-2xl rounded-e-2xl"></div>

            <div className="absolute inset-0 flex flex-col p-4 sm:pt-10 text-black">
              <h1 className="font-bold text-md sm:text-xl text-center wrap-break-word mb-1 sm:mb-5">
                {title || <span className="opacity-60">Heading Preview</span>}
              </h1>

              <p className="whitespace-pre-wrap wrap-break-word text-sm sm:text-md opacity-95 pl-2">
                {details || (
                  <span className="opacity-60">Write details preview...</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </form>

      {/* Display Notes */}
      <div className="border-t-2 border-[#d8d8d8] pt-10 bg-[#7b549f]">
        <h1 className="font-bold text-center text-4xl pb-5">Your Notes</h1>
        <div className="flex flex-wrap bg-yellow gap-10 justify-start items-start p-2">
          {task.map((note, index) => {
            return (
              <div
                key={index}
                className="relative bg-[url('https://imgs.search.brave.com/7phD_ENU1C4GcnJsuMzkLcBlaTypdCdu5JES_ooOg4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jbG9zZS11cC1i/bGFuay1saW5lZC1w/YXBlcl8xMDQ4OTQ0/LTE0ODIzNjgwLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA')] bg-cover bg-no-repeat w-56 h-68 sm:h-72 sm:w-60 border-2 rounded-b-2xl rounded-l-2xl p-4 mb-5 mx-auto text-[#000000]"
              >
                <X onClick={()=>{
                  deleteNote(index)
                }} className="absolute right-1 top-1 bg-red-400 hover:bg-red-500 active:scale-120 transition-all cursor-pointer p-0.5 rounded-full" stroke-width="2.5" color='white' size={19} />
                <h1 className="font-bold text-md sm:text-xl text-center wrap-break-word mb-1 sm:mb-5">
                  {note.title}
                </h1>

                <p className="whitespace-pre-wrap wrap-break-word text-sm sm:text-md opacity-95 pl-2">
                  {note.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
