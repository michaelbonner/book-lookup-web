import React, { useState, useEffect } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://book-lookup-api.test/api/book`)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        setBooks(json);
      });
  }, []);

  return (
    <div className="bg-gray-200 py-4">
      {books.map(book => {
        const { id, author_id, title, synopsis, published_at, author } = book;
        return (
          <Book
            key={id}
            id={id}
            author_id={author_id}
            title={title}
            synopsis={synopsis}
            published_at={published_at}
            author={author.name}
          />
        );
      })}
    </div>
  );
};
export default Books;
