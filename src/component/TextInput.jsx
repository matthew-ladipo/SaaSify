import React from 'react'
export default function TextInput({ label, icon, ...props }) {
  return (
    <div className="space-y-1 w-full">
      <label className="text-sm text-gray-600">{label}</label>
      <div className="flex items-center border-b border-gray-300 py-2">
        <input
          {...props}
          className="w-full outline-none text-gray-800"
        />
        {icon && <span className="text-gray-400">{icon}</span>}
      </div>
    </div>
  );
}
