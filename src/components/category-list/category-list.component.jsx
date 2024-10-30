import React from "react";
import CategoryItem from "../category-item/category-item.component";
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
        return <CategoryItem {...props} key={id} />;
      })}
    </div>
  );
};

export default CategoryList;
