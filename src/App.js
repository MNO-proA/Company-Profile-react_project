import Header from "./components/Header";
import "./index.css";
import Customer from "./pages/Customer";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employee" element={<Employees />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}
export default App;
