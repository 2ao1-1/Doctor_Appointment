import React from "react";
import { ClientsSide } from "./sections/ClientsSide";
import { Sessions } from "./sections/Sessions";
import { Analytics } from "./sections/Analytics";
import { History } from "./sections/History";

export function Main({
  clientData,
  handlePatient,
  savePatient,
  clients,
  patient,
  timer,
  note,
  setNote,
}) {
  const totalTime = clients.reduce((acc, client) => acc + client.timeSpent, 0);

  return (
    <main className="container mx-auto grid grid-cols-3 grid-rows-2 gap-1">
      <ClientsSide
        clientData={clientData}
        handlePatient={handlePatient}
        clients={clients}
      />
      <Sessions
        patient={patient}
        timer={timer}
        savePatient={savePatient}
        note={note}
        setNote={setNote}
      />
      <Analytics
        clients={clients}
        patientNum={clients.length}
        totalTime={totalTime}
      />
      <History clients={clients} />
    </main>
  );
}
