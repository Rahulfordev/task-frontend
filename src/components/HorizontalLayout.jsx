import React from "react";
import Column from "./Column";
import "./HorizontalLayout.css";

const columns = [
  "Incomplete",
  "To Do",
  "Doing",
  "Under Review",
  "Completed",
  "Overdue",
];

const HorizontalLayout = () => (
  <div className="horizontal-layout">
    {columns.map((column, index) => (
      <Column key={index} title={column} />
    ))}
  </div>
);

export default HorizontalLayout;
