import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './svg/sb-admin-2.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Createaccount from './Createaccount';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import Verify from './Verify';
import Verification from './Verification';
import Homepage from './Homepage';
import Shortenurl from './Shortenurl';
import Yoururl from './Yoururl';
import Pricing from './Pricing';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/portal' element={<Homepage />}>
          <Route path='/portal/home' element={<Home/>}></Route>
          <Route path='/portal/shorten-url' element={<Shortenurl />}></Route>
          <Route path='/portal/your-url/:id' element={<Yoururl />}></Route>
          <Route path='/portal/pricing' element={<Pricing />}></Route>
        </Route>
        <Route path='/create-account' element={<Createaccount />}></Route>
        <Route path='/forgot-password' element={<Forgotpassword />}></Route>
        <Route path='/verification/:id/:token' element={<Verification />}></Route>
        <Route path='/reset-password/:id/:token' element={<Resetpassword />}></Route>
        <Route path='/verify/:token' element={<Verify />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
