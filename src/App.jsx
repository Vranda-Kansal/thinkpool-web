import { BrowserRouter, Routes, Route } from "react-router";
import DefaultComponent from "./components/DefaultComponent";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import ProfileEdit from "./components/ProfileEdit";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultComponent />}>
              <Route path="/" element={<Home />}>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Signup />} />
              </Route>
              <Route path="/profile/edit" element={<ProfileEdit />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
