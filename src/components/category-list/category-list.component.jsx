import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./category-list.component.scss";
const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => {
        const props = {
          title,
          id,
          imageUrl,
        };
        return <DirectoryItem {...props} key={id} />;
      })}
    </div>
  );
};

export default CategoryList;
