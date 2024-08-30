import React from "react";

const Collection = ({ title, images }) => {
  return (
    <article className="my-10 flex flex-col gap-3">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-lg">{title}</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        {images.map((image, index) => {
          return (
            <figure key={index} className="flex items-center justify-center">
              <img src={image} alt={title} className="block object-cover" />
            </figure>
          );
        })}
      </div>
    </article>
  );
};

export default Collection;
