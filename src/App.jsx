import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/auth/Login";
import DefaultComponent from "./components/DefaultComponent";
import { Provider } from "react-redux";
import store from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultComponent />}>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
