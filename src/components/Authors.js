import React, { useState, useEffect } from "react";
import Author from "./Author";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(`https://book-lookup-api.test/api/author`)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        setAuthors(json);
      });
  }, []);

  return (
    <div>
      {authors.map(author => {
        return (
          <Author key={author.id} books={author.books} name={author.name} />
        );
      })}
    </div>
  );
};
export default Authors;
