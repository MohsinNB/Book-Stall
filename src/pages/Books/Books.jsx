import React from "react";
import Book from "./Book";

const Books = ({ data }) => {
  const Books = data;
  //   const [books, setBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((Data) => {
  //         console.log(Data);
  //       });
  //   }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Books.map((book) => (
          <Book key={book.bookId} data={book}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;
