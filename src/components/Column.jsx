import Card from "./Card";

const Column = ({ title }) => (
  <div className="column">
    <div className="column__header">
      <h2>{title}</h2>
      <button>0</button>
    </div>
    <div className="cards-container">
      {[...Array(10)].map((_, idx) => (
        <Card key={`${title}-${idx}`} id={`${title}-${idx}`} />
      ))}
    </div>
  </div>
);

export default Column;
