import React from 'react'
export default function SelectInput({ label, children }) {
  return (
    <div className="space-y-1 w-full">
      <label className="text-sm text-gray-600">{label}</label>
      <select className="w-full border-b border-gray-300 py-2 outline-none bg-white text-gray-800">
        {children}
      </select>
    </div>
  );
}
