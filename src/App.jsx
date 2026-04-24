import { BrowserRouter, Routes, Route } from "react-router";
import First from "./components/First";
import Login from "./components/Login";
import Test from "./components/Test";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}>
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
export default App;
