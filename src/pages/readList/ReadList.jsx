import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredData } from "../../Utility/addToDB";
import Book from "../Books/Book";

const ReadList = () => {
  const data = useLoaderData();
  console.log(data);
  const [readList, MyreadList] = useState([]);
  useEffect(() => {
    const getBookData = getStoredData();
    const inNUmber = getBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) => inNUmber.includes(book.bookId));
    MyreadList(myReadList);
  }, [data]);
  return (
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
  );
};

export default ReadList;
