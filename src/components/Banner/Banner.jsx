import React from "react";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-around items-center p-16 w-full bg-amber-50 rounded-2xl">
      <div className="w-1/2">
        <span className="m-2 text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius debitis
          officiis nihil molestiae amet, modi fuga ipsum minima doloribus illum
          blanditiis vero cupiditate explicabo aliquid, ullam dolor beatae
          numquam cum!
        </span>
        <button className="btn btn-primary">Make more</button>
      </div>
      <div className="w-1/2">
        <img className="rounded-4xl" src={bookImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
