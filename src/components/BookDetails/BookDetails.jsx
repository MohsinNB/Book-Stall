import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId == id);
  const {
    bookName,
    image,
    author,
    review,
    tags,
    category,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
  } = singleBook;

  return (
    <div className="w-full mx-auto flex justify-center">
      <div className="bg-myOwn rounded-2xl w-1/2 p-10 m-5">
        <img className="w-48" src={image} alt="" />
      </div>
      <div className="w-1/2 m-5">
        <article className="max-w-4xl mx-auto p-8 bg-white shadow-sm rounded-lg">
          {/* bookName + Author */}
          <header className="mb-4">
            <h1 className="text-4xl font-extrabold leading-tight">
              {bookName}
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              By : <span className="font-medium text-gray-800">{author}</span>
            </p>
          </header>

          <div className="divider my-4"></div>

          {/* category */}
          <div className="mb-6">
            <span className="inline-block px-2 py-1 text-sm font-medium text-gray-700">
              {category}
            </span>
          </div>

          <div className="divider my-4"></div>

          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Middle: review + tags */}
            <div className="md:col-span-2">
              <h2 className="text-sm font-semibold mb-2">Review :</h2>
              <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                {review}
              </p>

              {/* Tags */}
              <div className="mb-6">
                <span className="text-sm font-bold mr-3">Tag</span>
                {tags.map((t, i) => (
                  <span
                    key={i}
                    className="badge badge-success badge-outline m-2"
                    bookName={t}
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div></div>

              {/* Info grid */}
              <dl className="grid grid-cols-[200px_1fr] gap-y-2 text-sm">
                <div className="contents">
                  <dt className="text-gray-600">Number of Pages:</dt>
                  <dd className="font-semibold">{totalPages}</dd>
                </div>

                <div className="contents">
                  <dt className="text-gray-600">Publisher:</dt>
                  <dd className="font-semibold">{publisher}</dd>
                </div>

                <div className="contents">
                  <dt className="text-gray-600">Year of Publishing:</dt>
                  <dd className="font-semibold">{yearOfPublishing}</dd>
                </div>

                <div className="contents">
                  <dt className="text-gray-600">Rating:</dt>
                  <dd className="font-semibold">{rating}</dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BookDetails;
