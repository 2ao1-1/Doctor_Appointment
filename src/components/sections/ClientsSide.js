import React from "react";
import { ArrowRight } from "lucide-react";

export function ClientsSide({ clientData, handlePatient, clients }) {
  function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }
  return (
    <div className="col-span-1 row-span-2 bg-teal-200 rounded-md p-4 grid gap-4">
      <WaitingList clientData={clientData} handlePatient={handlePatient} />
      <LastClient clients={clients} formatTime={formatTime} />
    </div>
  );
}
function WaitingList({ clientData, handlePatient }) {
  return (
    <div>
      <h3 className="text-xl text-teal-800 font-bold mb-2">Waiting List</h3>

      <ul className="bg-teal-100 p-2 rounded-md">
        {clientData.length === 0 && <p>No Clients Today Yet</p>}
        {clientData.map((user) => (
          <li
            className="bg-teal-300/50 rounded my-1 p-2 flex gap-4 justify-start items-center"
            key={user.id}
          >
            <span className="w-1/12 text-5xl text-teal-800">{user.id}</span>
            <div className="w-9/12">
              <h4 className="text-lg">{user.name}</h4>
              <p className="text-sm text-teal-800">{user.description}</p>
            </div>
            <button
              className="rounded-full bg-teal-300 p-3 hover:bg-teal-500 hover:text-white"
              onClick={() => handlePatient(user)}
            >
              <ArrowRight size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LastClient({ clients, formatTime }) {
  return (
    <div>
      <h3 className="text-xl text-teal-800 font-bold mb-2">Last Client</h3>

      <ul className="bg-teal-100 p-2 rounded-md">
        {clients.length === 0 && <p>We are not started yet!</p>}
        {clients.map((cleint) => (
          <li
            className="bg-teal-300/50 rounded my-1 p-2 flex gap-4 justify-start items-center"
            key={cleint.id}
          >
            <div key={cleint.id} className="w-4/6">
              <h4 className="text-lg ">{cleint.name}</h4>
              <p className="text-sm text-teal-800">{cleint.description}</p>
              <p className="text-sm text-teal-800">
                {cleint.note || "No Notes for this patient"}
              </p>
            </div>
            <div>
              <p className="flex flex-col text-center">
                Time Spent: <span>{formatTime(cleint.timeSpent)}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
