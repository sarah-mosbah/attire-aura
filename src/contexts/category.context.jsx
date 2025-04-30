import { createContext,  useState, useEffect } from "react";
import { SHOP_DATA } from "../shop-data.js";
import { getCategory } from "../utils/firebase/firbase.utils.js";
export const CategoryContext = createContext({
  categories: [],
  setCategories: () => null,
});

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(SHOP_DATA);
    useEffect(() => {
        const fetchCategories = async () => {
            const categoryMap = await getCategory();
           
            setCategories(categoryMap);
        }

        fetchCategories();
    }, []);

    const value = { categories, setCategories };
  return (
    <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
  );
};

export default CategoryProvider;
