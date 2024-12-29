import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const navItems = ["Dashboard", "Clients", "Analytics"];

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    description: "Routine health screening",
    phone: "+1 567-8901",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@mail.com",
    description: "Follow-up appointment",
    phone: "+1 123-4567",
  },
  {
    id: 3,
    name: "Sam Wilson",
    email: "sam.wilson@test.org",
    description: "Annual physical examination",
    phone: "+1 789-2345",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@demo.net",
    description: "Vaccination appointment",
    phone: "+1 345-6789",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    description: "Consultation for symptoms",
    phone: "+1 456-7890",
  },
];

export default function App() {
  const [clientData, setClientData] = useState(data);
  const [clients, setClients] = useState([]);
  const [patient, setPatient] = useState(null);
  const [timer, setTimer] = useState(0);
  const [note, setNote] = useState("");

  useEffect(() => {
    let intervalId;

    if (patient) {
      setTimer(0);
      intervalId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [patient]);

  function handlePatient(user) {
    setPatient(user);
    setNote("");
    setClientData((patientData) =>
      patientData.filter((patient) => patient.id !== user.id)
    );
  }
  function savePatientData() {
    if (!patient) return;

    const currentDate = new Date().toLocaleDateString();
    const newPatient = {
      ...patient,
      note,
      timeSpent: timer,
      date: currentDate,
      sessionTime: Math.floor(timer / 60),
    };

    setClients((patientData) => [...patientData, newPatient]);
    setPatient(null);
    setTimer(0);
    setNote("");
  }

  return (
    <>
      <Header />
      <Main
        clientData={clientData}
        handlePatient={handlePatient}
        savePatient={savePatientData}
        clients={clients}
        patient={patient}
        timer={timer}
        note={note}
        setNote={setNote}
      />
    </>
  );
}
