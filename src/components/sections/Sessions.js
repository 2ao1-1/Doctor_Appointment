import React from "react";

export function Sessions({ patient, timer, savePatient, note, setNote }) {
  if (!patient) {
    return (
      <div className="col-span-2 row-span-1 bg-teal-200 rounded-md p-4 justify-center items-center flex">
        <h2>Ready to Start Sessions</h2>
      </div>
    );
  }
  return (
    <div className="col-span-2 row-span-1 bg-teal-200 rounded-md  flex">
      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-bold text-teal-800 mb-2">
          {patient.name}
        </h2>
        <p className="text-base text-teal-600 mb-2">{patient.description}</p>
        <div className="flex flex-col">
          <label className="text-base text-teal-800 mb-2">Note :</label>
          <textarea
            className="w-full h-40 rounded-md outline-0 py-2 px-4 mb-4 "
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <button
          onClick={savePatient}
          className="bg-teal-700 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
      <div className="w-1/2 p-4 flex flex-col justify-center items-center">
        <p className="flex flex-col justify-center items-center border-8 rounded-full p-10">
          Timer :
          <span>
            {Math.floor(timer / 60)}:
            {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
          </span>
        </p>
      </div>
    </div>
  );
}
