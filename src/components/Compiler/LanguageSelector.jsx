import React from "react";

const languages = [
  { id: 50, label: "C" },
  { id: 54, label: "C++" },
  { id: 51, label: "C#" },
  { id: 62, label: "Java" },
  { id: 71, label: "Python" },
  { id: 63, label: "JavaScript" },
];

export default function LanguageSelector({ selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="border px-3 py-2 rounded"
    >
      {languages.map((lang) => (
        <option key={lang.id} value={lang.id}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
