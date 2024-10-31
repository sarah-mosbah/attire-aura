import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Route, Routes } from "react-router-dom";

const Shop = () => <div>This is my shop</div>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
