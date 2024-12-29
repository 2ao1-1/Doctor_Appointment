import React from "react";

export function History({ clients }) {
  return (
    <div className="col-span-1 row-span-1 bg-teal-200 rounded-md p-4">
      <h3 className="text-xl font-bold mb-4">Patient History</h3>
      {clients.length === 0 ? (
        <p>No Patient Yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.date || "N/A"}</td>
                <td>{client.note || "No notes"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
