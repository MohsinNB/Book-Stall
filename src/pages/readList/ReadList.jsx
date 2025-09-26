import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredData } from "../../Utility/addToDB";
import Book from "../Books/Book";

const ReadList = () => {
  const data = useLoaderData();
  // console.log(data);
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const getBookData = getStoredData();
    const inNUmber = getBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) => inNUmber.includes(book.bookId));
    setReadList(myReadList);
  }, [data]);
  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );

      setReadList(sortedByPages);
      console.log(sortedByPages);
    } else if (type === "ratings") {
      const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRating);
      console.log(sortedByRating);
    }
  };
  return (
    <>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn btn-accent m-1">
          Sort By {sort ? sort : ""}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a
              onClick={() => {
                handleSort("pages");
              }}
            >
              Pages
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleSort("ratings");
              }}
            >
              Rating
            </a>
          </li>
        </ul>
      </div>
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Read Book List"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {readList.length === 0 ? (
              <p>No books found</p>
            ) : (
              readList.map((b) => <Book key={b.bookId} data={b} />)
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="My Wish List "
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            My Wish List module
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadList;
