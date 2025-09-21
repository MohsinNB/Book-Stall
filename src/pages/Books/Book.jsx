import React from "react";
import { GiRoundStar } from "react-icons/gi";

const Book = ({ data }) => {
  const SingleBook = data;
  const { bookName, author, image, review, rating, category } = SingleBook;

  const limitWords = (str, wordCount) => {
    const words = str.split(" "); // split text into words
    if (words.length <= wordCount) return str; // return original if short
    return words.slice(0, wordCount).join(" ") + "..."; // join first N words + ellipsis
  };
  return (
    <div className="card mt-3 mb-3  w-96 shadow-sm border p-6">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body justify-center  p-10">
        <h2 className="card-title">
          {bookName}
          <div className="btn btn-secondary">{author}</div>
        </h2>
        <p>{limitWords(review, 10)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating}
            <GiRoundStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
