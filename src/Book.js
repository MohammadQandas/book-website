import React from "react";
import "./Books.css";
const Book = ({ books }) => {
  return (
    <div className="container">
      {books.map((b) => (
        <div className="item">
        <h4 key={b.index}>
          <img src={b.img} alt="quotes" />
          <h4>{b.title}</h4>
          <h5> {b.author}</h5>
        </h4>
        </div>
      ))}
    </div>
  );
};

export default Book;
