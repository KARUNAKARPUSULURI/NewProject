import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/login';
import SignUp from './Components/Signup/signup';
import Dashboard from './Components/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
