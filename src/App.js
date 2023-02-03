
import './App.css';
import AppRouter from './config/router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './screen/Home';
// import SignUp from './screen/SignUp';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <div>
    <AppRouter/>
    {/* <Home/> */}
   </div>
  );
}

export default App;
