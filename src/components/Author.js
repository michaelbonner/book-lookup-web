import React from "react";

const Author = ({ books, name }) => {
  return (
    <div className="w-full lg:w-1/2 mt-4 bg-white rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold">Books</h3>
        {books.length
          ? books.map(book => {
              return (
                <div title={book.synopsis} key={book.id}>
                  • {book.title}
                </div>
              );
            })
          : "No books"}
      </div>
    </div>
  );
};
export default Author;
