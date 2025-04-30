import {Routes, Route} from "react-router-dom";
import MyCategoriesPreview from "../my-categories-preview/my-categories-preview.component";
import "./shop.styles.scss";
import Category from "../category/category.component";

const Shop = () => {


  return (
    <div className="shop-container">
      <Routes>
        <Route index element={<MyCategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default Shop;
