import React from "react";

const getSymbol = (value) => {
  if (value === null) return "";
  return value ? "X" : "0";
};

export default function Cell({ value, onClick }) {
  return (
    <div
      className={(value !== null ? "disabled" : "") + " cell"}
      onClick={onClick}
    >
      {getSymbol(value)}
    </div>
  );
}
