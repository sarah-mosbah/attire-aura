
import "./category-preview.component.scss";
import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  return (
    <div className="category-preview-container">
      <h2 onClick={() => navigate(`./${title.toLowerCase()}`)}>{title.toUpperCase()}</h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
