import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoryContext } from "../../contexts/category.context";

const MyCategoriesPreview = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default MyCategoriesPreview;
