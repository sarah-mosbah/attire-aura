import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";
import Authentcation from "./routes/authentcation/authentcation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="signin" element={<Authentcation />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
