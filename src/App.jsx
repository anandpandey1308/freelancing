import { Route, Routes } from "react-router-dom";
import SignInPage from "./Pages/Authentication/SignInPage";
import SignUpPage from "./Pages/Authentication/SignUpPage";

const App =() =>{
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/" element={<SignUpPage />} />
    </Routes>
  )
}

export default App