import "./category.component.scss";
import ProductCard from "../../components/product-card/product-card.component";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { CategoryContext } from "../../contexts/category.context";
const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoryContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <>
       <h2 >{category.toUpperCase()}</h2>
       <div className="category-container">
   
  
     {products && products.map((product) => (
       <ProductCard key={product.id} product={product} />
     ))}
   
 </div>
    </>
 
  );
};

export default Category;
