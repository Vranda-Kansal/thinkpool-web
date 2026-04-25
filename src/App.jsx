import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/auth/Login";
import DefaultComponent from "./components/DefaultComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultComponent />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
