import React, { useState } from "react";
import Card from "./Card";

const Column = ({ title }) => (
  <div className="column">
    <div className="column__header">
      <h2>{title}</h2>
      <button>0</button>
    </div>
    <div className="cards-container">
      {[...Array(10)].map((_, idx) => (
        <Card key={idx} id={idx + 1} />
      ))}
    </div>
  </div>
);

export default Column;
