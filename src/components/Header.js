import React from "react";
import { navItems } from "../App";
import { Settings, User } from "lucide-react";

export function Header() {
  return (
    <>
      <header className="w-full p-4 border-b font-mono bg-teal-100">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-3xl  cursor-pointer">Dr Appointment</div>
          <ul className="flex justify-between gap-4">
            {navItems.map((item) => (
              <Links>{item}</Links>
            ))}
          </ul>
          <div className="flex gap-4">
            <Button>
              <Settings size={20} />
            </Button>
            <Button>
              <User size={20} />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

function Links({ children }) {
  return (
    <li className="cursor-pointer hover:bg-teal-200 px-2 rounded-md">
      {children}
    </li>
  );
}

function Button({ children }) {
  return (
    <button className="rounded-full p-2 hover:bg-teal-200">{children}</button>
  );
}
